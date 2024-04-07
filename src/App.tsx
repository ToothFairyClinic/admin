import { CssBaseline } from "@mui/material";
import { useEffect, useState } from "react";
import {
  Admin,
  DataProvider,
  EditGuesser,
  Loading,
  Resource,
} from "react-admin";
import buildHasuraProvider from "ra-data-hasura";
import { productsResource } from "@app/modules/products/products-resource";
import { authProvider } from "./core/auth-provider";
import { buildDataProvider } from "./core/data-provider";
import { theme } from "./core/theme";
import { i18nProvider } from "./core/in18n";
import { advantagesResource } from "./modules/avantages/advantages.resourve";
import { servicesResource } from "./modules/services/services-resource";
import { personnelResource } from "./modules/personnel/personnel-resource";
import { personnelCategoryResource } from "./modules/personnel-category/personnel-category-resource";
import { PriceListResource } from "./modules/price-list/price-list.resource";
import { PriceListCategoryResource } from "./modules/price-list-category/price-list-category.resource";
import { ourWorksResource } from "./modules/our-works/our-works-resource";
import { reviewsResource } from "./modules/reviews/reviews-resource";

export const App = () => {
  const [dataProvider, setDataProvider] = useState<DataProvider<string> | null>(
    null
  );

  useEffect(() => {
    const getDataProvider = async () => {
      const dp = await buildDataProvider();

      setDataProvider(dp);
    };

    getDataProvider();
  }, []);

  if (!dataProvider) {
    return <Loading />;
  }

  return (
    <>
      <CssBaseline />
      <Admin
        dataProvider={dataProvider}
        authProvider={authProvider}
        requireAuth
        i18nProvider={i18nProvider}
        theme={theme}
      >
        <Resource {...productsResource} />
        <Resource {...advantagesResource} />
        <Resource {...servicesResource} />
        <Resource {...personnelResource} />
        <Resource {...personnelCategoryResource} />
        <Resource {...PriceListResource} />
        <Resource {...PriceListCategoryResource} />
        <Resource {...ourWorksResource} />
        <Resource {...reviewsResource} />
      </Admin>
    </>
  );
};
