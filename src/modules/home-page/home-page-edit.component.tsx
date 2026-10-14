import { FC, ReactNode } from "react";
import {
  ArrayInput,
  Edit,
  ReferenceInput,
  SelectInput,
  SimpleFormIterator,
  TabbedForm,
  TextInput,
  required,
} from "react-admin";
import { RichTextInput } from "ra-input-rich-text";
import { Box, Typography } from "@mui/material";
import { CloudinaryInput } from "@app/common/components/cloudinary-input/cloudinary-input.comnponent";

const Lang: FC<{ children: ReactNode; title: string }> = ({ title, children }) => (
  <Box sx={{ width: "100%", mb: 3 }}>
    <Typography variant="h6" sx={{ mb: 1 }}>
      {title}
    </Typography>
    {children}
  </Box>
);

const ServiceSelect = ({ source, label }: { source: string; label: string }) => (
  <ReferenceInput source={source} reference="services" perPage={300} sort={{ field: "name", order: "ASC" }}>
    <SelectInput optionText="name" label={label} fullWidth validate={required()} />
  </ReferenceInput>
);

export const HomePageEdit = () => (
  <Edit title="Головна сторінка" mutationMode="pessimistic" redirect={false}>
    <TabbedForm>
      <TabbedForm.Tab label="Перший екран">
        <Typography variant="body2" sx={{ mb: 2 }}>
          H1 складається з трьох рядків. SEO title і description головної - у розділі «Мета дані сторінок», маршрут /.
        </Typography>
        <Lang title="UA">
          <TextInput source="hero_title_top" label="H1: верхній рядок" fullWidth />
          <TextInput source="hero_title_main" label="H1: назва клініки (найбільший шрифт)" fullWidth />
          <TextInput source="hero_title_bottom" label="H1: нижній рядок" fullWidth />
          <TextInput source="hero_text" label="Текст під заголовком" multiline fullWidth />
          <TextInput source="hero_button" label="Текст кнопки" fullWidth />
        </Lang>
        <Lang title="EN">
          <TextInput source="hero_title_top_en" label="H1: top line" fullWidth />
          <TextInput source="hero_title_main_en" label="H1: clinic name" fullWidth />
          <TextInput source="hero_title_bottom_en" label="H1: bottom line" fullWidth />
          <TextInput source="hero_text_en" label="Text" multiline fullWidth />
          <TextInput source="hero_button_en" label="Button" fullWidth />
        </Lang>
      </TabbedForm.Tab>

      <TabbedForm.Tab label="Про клініку">
        <CloudinaryInput source="about_image" label="Фото клініки" />
        <Lang title="UA">
          <TextInput source="about_label" label="Надзаголовок" fullWidth />
          <TextInput source="about_title" label="Заголовок H2" fullWidth />
          <RichTextInput source="about_text" label="Текст" fullWidth />
          <TextInput source="about_button" label="Текст кнопки (прокручує до послуг)" fullWidth />
          <TextInput source="about_image_alt" label="Alt фото" fullWidth />
        </Lang>
        <Lang title="EN">
          <TextInput source="about_label_en" label="Label" fullWidth />
          <TextInput source="about_title_en" label="H2" fullWidth />
          <RichTextInput source="about_text_en" label="Text" fullWidth />
          <TextInput source="about_button_en" label="Button" fullWidth />
          <TextInput source="about_image_alt_en" label="Image alt" fullWidth />
        </Lang>
      </TabbedForm.Tab>

      <TabbedForm.Tab label="Переваги">
        <Typography variant="body2" sx={{ mb: 2 }}>
          Номер 01-06 ставиться автоматично за порядком карток. Порядок змінюється стрілками.
        </Typography>
        <Lang title="UA">
          <TextInput source="advantages_title" label="Заголовок H2" fullWidth />
          <ArrayInput source="advantages" label="Картки">
            <SimpleFormIterator fullWidth>
              <TextInput source="title" label="Заголовок H3" fullWidth />
              <TextInput source="description" label="Опис" multiline fullWidth />
            </SimpleFormIterator>
          </ArrayInput>
        </Lang>
        <Lang title="EN">
          <TextInput source="advantages_title_en" label="H2" fullWidth />
          <ArrayInput source="advantages_en" label="Cards">
            <SimpleFormIterator fullWidth>
              <TextInput source="title" label="H3" fullWidth />
              <TextInput source="description" label="Description" multiline fullWidth />
            </SimpleFormIterator>
          </ArrayInput>
        </Lang>
      </TabbedForm.Tab>

      <TabbedForm.Tab label="Послуги">
        <TextInput source="services_title" label="Заголовок H2 (UA)" fullWidth />
        <TextInput source="services_intro" label="Вступ (UA)" multiline fullWidth />
        <TextInput source="services_title_en" label="Заголовок H2 (EN)" fullWidth />
        <TextInput source="services_intro_en" label="Вступ (EN)" multiline fullWidth />
        <Typography variant="body2" sx={{ my: 2 }}>
          Картки послуг на головній. Фото й адреса беруться зі сторінки обраної послуги («Фото послуги» та alt). Порядок змінюється стрілками.
        </Typography>
        <ArrayInput source="home_services" label="Картки послуг">
          <SimpleFormIterator fullWidth>
            <ServiceSelect source="service_id" label="Сторінка послуги" />
            <TextInput source="title" label="Назва на картці (UA)" fullWidth />
            <TextInput source="title_en" label="Назва на картці (EN)" fullWidth />
            <TextInput source="description" label="Опис (UA)" multiline fullWidth />
            <TextInput source="description_en" label="Опис (EN)" multiline fullWidth />
            <ArrayInput source="links" label="Посилання на підпослуги">
              <SimpleFormIterator inline>
                <ServiceSelect source="service_id" label="Підпослуга" />
                <TextInput source="label" label="Текст посилання (UA)" />
                <TextInput source="label_en" label="Текст посилання (EN)" />
              </SimpleFormIterator>
            </ArrayInput>
          </SimpleFormIterator>
        </ArrayInput>
      </TabbedForm.Tab>

      <TabbedForm.Tab label="Лікарі">
        <TextInput source="doctors_title" label="Заголовок H2 (UA)" fullWidth />
        <TextInput source="doctors_intro" label="Вступ (UA)" multiline fullWidth />
        <TextInput source="doctors_title_en" label="Заголовок H2 (EN)" fullWidth />
        <TextInput source="doctors_intro_en" label="Вступ (EN)" multiline fullWidth />
        <Typography variant="body2" sx={{ my: 2 }}>
          Якщо список порожній, на головній показуються всі лікарі. Фото й посада беруться з профілю лікаря.
        </Typography>
        <ArrayInput source="home_doctors" label="Лікарі на головній">
          <SimpleFormIterator inline>
            <ReferenceInput source="personnel_id" reference="personnel" perPage={200} sort={{ field: "name", order: "ASC" }}>
              <SelectInput optionText="name" label="Лікар" validate={required()} />
            </ReferenceInput>
          </SimpleFormIterator>
        </ArrayInput>
      </TabbedForm.Tab>

      <TabbedForm.Tab label="Текст">
        <Typography variant="body2" sx={{ mb: 2 }}>
          Спершу показуються заголовок і вступ, решта відкривається кнопкою. Підзаголовки в розгорнутій частині - Heading 3.
        </Typography>
        <Lang title="UA">
          <TextInput source="text_title" label="Заголовок H2" fullWidth />
          <RichTextInput source="text_intro" label="Вступ (видно одразу)" fullWidth />
          <RichTextInput source="text_more" label="Текст після «Читати більше»" fullWidth />
          <TextInput source="text_more_button" label="Кнопка розгортання" />
          <TextInput source="text_less_button" label="Кнопка згортання" />
        </Lang>
        <Lang title="EN">
          <TextInput source="text_title_en" label="H2" fullWidth />
          <RichTextInput source="text_intro_en" label="Intro" fullWidth />
          <RichTextInput source="text_more_en" label="Text after «Read more»" fullWidth />
          <TextInput source="text_more_button_en" label="Expand button" />
          <TextInput source="text_less_button_en" label="Collapse button" />
        </Lang>
      </TabbedForm.Tab>

      <TabbedForm.Tab label="FAQ">
        <Lang title="UA">
          <TextInput source="faq_title" label="Заголовок H2" fullWidth />
          <ArrayInput source="faq" label="Запитання">
            <SimpleFormIterator fullWidth>
              <TextInput source="question" label="Запитання" fullWidth />
              <RichTextInput source="answer" label="Відповідь" fullWidth />
            </SimpleFormIterator>
          </ArrayInput>
        </Lang>
        <Lang title="EN">
          <TextInput source="faq_title_en" label="H2" fullWidth />
          <ArrayInput source="faq_en" label="Questions">
            <SimpleFormIterator fullWidth>
              <TextInput source="question" label="Question" fullWidth />
              <RichTextInput source="answer" label="Answer" fullWidth />
            </SimpleFormIterator>
          </ArrayInput>
        </Lang>
      </TabbedForm.Tab>
    </TabbedForm>
  </Edit>
);
