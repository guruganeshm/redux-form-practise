import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import registerServiceWorker from "./registerServiceWorker";
import "bootstrap/dist/css/bootstrap.css";
import SampleForm from "./components/simpleForm";
import reducers from "./reducers";


ReactDOM.render(
	<Provider store={createStore(reducers)}>
		<SampleForm />
	</Provider>,
	document.getElementById("root")
);
registerServiceWorker();
