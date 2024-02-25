import { CssBaseline } from "@mui/material";
import { useEffect, useState } from "react";
import { Admin, DataProvider, Loading, Resource } from "react-admin";
import buildHasuraProvider from "ra-data-hasura";
import { productsResource } from "@app/modules/products/products-resource";
import { authProvider } from "./core/auth-provider";
import { buildDataProvider } from "./core/data-provider";
import { theme } from "./core/theme";
import { i18nProvider } from "./core/in18n";

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

  // useEffect(() => {
  //   OneSignalReact.init({ appId: "83b764ee-1bd9-4bb0-b98e-5194def59102" });
  // }, []);

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
      </Admin>
    </>
  );
};
