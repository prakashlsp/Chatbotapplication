import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { MessageList } from "./message/MessageList";
import { MessageCreate } from "./message/MessageCreate";
import { MessageEdit } from "./message/MessageEdit";
import { MessageShow } from "./message/MessageShow";
import { AdminConfigList } from "./adminConfig/AdminConfigList";
import { AdminConfigCreate } from "./adminConfig/AdminConfigCreate";
import { AdminConfigEdit } from "./adminConfig/AdminConfigEdit";
import { AdminConfigShow } from "./adminConfig/AdminConfigShow";
import { ChatSessionList } from "./chatSession/ChatSessionList";
import { ChatSessionCreate } from "./chatSession/ChatSessionCreate";
import { ChatSessionEdit } from "./chatSession/ChatSessionEdit";
import { ChatSessionShow } from "./chatSession/ChatSessionShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"LiveSupportChatBot"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Message"
          list={MessageList}
          edit={MessageEdit}
          create={MessageCreate}
          show={MessageShow}
        />
        <Resource
          name="AdminConfig"
          list={AdminConfigList}
          edit={AdminConfigEdit}
          create={AdminConfigCreate}
          show={AdminConfigShow}
        />
        <Resource
          name="ChatSession"
          list={ChatSessionList}
          edit={ChatSessionEdit}
          create={ChatSessionCreate}
          show={ChatSessionShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
