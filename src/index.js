import React from "react";
import ReactDOM from "react-dom";
import { reduxForm } from "redux-form";
import { createStore } from "redux";
import { Provider } from "react-redux";
import registerServiceWorker from "./registerServiceWorker";
import "bootstrap/dist/css/bootstrap.css";
import Form from "./components/formComponent";

const store = createStore(() => ({}));

ReactDOM.render(<Form />, document.getElementById("root"));
registerServiceWorker();
