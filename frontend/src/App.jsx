import React from "react";
import routes from "./routes";
import ContextProvider from "./ContextState";
import { useRoutes } from "react-router-dom";
import AuthContextProvider from "./Context/AuthContext";

export default function App() {
  const router = useRoutes(routes);

  return (
    <AuthContextProvider>
      <ContextProvider>
        <div>{router}</div>
      </ContextProvider>
    </AuthContextProvider>
  );
}
