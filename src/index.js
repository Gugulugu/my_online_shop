import React from "react";
import * as ReactDOMClient from "react-dom/client";
import App from "./App";
import "./index.css";

import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOMClient.createRoot(document.getElementById("root"));

root.render(<App></App>);
