import ReactDOM from "react-dom";
import { ApolloProvider } from "@apollo/client";
import { BrowserRouter } from "react-router-dom";
import { CookiesProvider } from "react-cookie";

import { App } from "./App";
import { client } from "./apollo.config";

import "./index.css";

ReactDOM.render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <CookiesProvider>
        <App />
      </CookiesProvider>
    </ApolloProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
