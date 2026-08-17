import buildHasuraProvider from "ra-data-hasura";
import { DataProvider } from "react-admin";
import { apolloClient } from "./apollo-client";
import gql from 'graphql-tag';


const GET_PERSONNEL_ONE = gql`
  query GetPersonnelOneForEdit($id: uuid!) {
    personnel_by_pk(id: $id) {
      id
      name
      name_en
      description
      description_en
      image
      slug
      slug_en
      experience
      certificates
      seo_title
      seo_description
      seo_title_en
      seo_description_en
      categories {
        category_id   # ← саме це нам треба для category_ids
      }
      personnel_services {
        service_id    # ← саме це нам треба для service_ids
      }
    }
  }
`;

const UPDATE_PERSONNEL_RELATIONS = gql`
  mutation UpdatePersonnelRelations(
    $personnel_id: uuid!
    $categories: [personnel_personnel_categories_insert_input!]!
    $services: [personnel_services_insert_input!]!
  ) {
    # 1. Очищаємо старі зв'язки категорій
    delete_personnel_personnel_categories(
      where: { personnel_id: { _eq: $personnel_id } }
    ) {
      affected_rows
    }
    # 2. Вставляємо нові категорії
    insert_personnel_personnel_categories(objects: $categories) {
      affected_rows
    }
    # 3. Очищаємо старі зв'язки послуг
    delete_personnel_services(
      where: { personnel_id: { _eq: $personnel_id } }
    ) {
      affected_rows
    }
    # 4. Вставляємо нові послуги
    insert_personnel_services(objects: $services) {
      affected_rows
    }
  }
`;

export const buildDataProvider = async () => {
  const dataProviderHasura = await buildHasuraProvider({
    client: apolloClient,
  });
  const dp: DataProvider = {
    getList: (resource, params) => dataProviderHasura.getList(resource, params),
    getOne: async (resource, params) => {
      if (resource === 'personnel') {
        const { data } = await apolloClient.query({
          query: GET_PERSONNEL_ONE,
          variables: { id: params.id },
          fetchPolicy: 'network-only',
        });
        return { data: data.personnel_by_pk };
      }
      return dataProviderHasura.getOne(resource, params);
    },
    getMany: (resource, params) => dataProviderHasura.getMany(resource, params),
    getManyReference: (resource, params) =>
      dataProviderHasura.getManyReference(resource, params),
    update: async (resource, params) => {
      if (resource === 'personnel') {
        // 1. Прибираємо системні та вкладені поля перед відправкою основного запису в Hasura
        const {
          __typename,
          id,
          categories,
          personnel_services,
          category_ids,
          service_ids,
          ...cleanMainData
        } = params.data;

        // 2. Оновлюємо основний запис у таблиці personnel
        await dataProviderHasura.update('personnel', {
          id: params.id,
          data: cleanMainData,
          previousData: params.previousData,
        });

        // 3. Формуємо нові масиви для M2M-зв'язків
        const newCategories = (categories?.data || []).map((c: any) => ({
          personnel_id: params.id,
          category_id: c.category_id,
        }));

        const newServices = (personnel_services?.data || []).map((s: any) => ({
          personnel_id: params.id,
          service_id: s.service_id,
        }));

        // 4. Оновлюємо M2M-зв'язки в БД
        await apolloClient.mutate({
          mutation: UPDATE_PERSONNEL_RELATIONS,
          variables: {
            personnel_id: params.id,
            categories: newCategories,
            services: newServices,
          },
        });

        // 5. КЛЮЧОВИЙ КРОК: Отримуємо свіжий оновлений запис з БД
        // Це гарантує, що React Admin отримає повноцінний об'єкт { data: { id: ..., name: ... } }
        const { data: updatedRecord } = await apolloClient.query({
          query: GET_PERSONNEL_ONE,
          variables: { id: params.id },
          fetchPolicy: 'network-only',
        });

        return { data: updatedRecord.personnel_by_pk };
      }

      return dataProviderHasura.update(resource, params);
    },
    updateMany: (resource, params) =>
      dataProviderHasura.updateMany(resource, params),
    create: (resource, params) => dataProviderHasura.create(resource, params),
    delete: (resource, params) => dataProviderHasura.delete(resource, params),
    deleteMany: (resource, params) =>
      dataProviderHasura.deleteMany(resource, params),
  };

  return dp;
};
