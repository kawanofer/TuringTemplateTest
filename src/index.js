import React from "react";
import ReactDOM from "react-dom";
import Layout from "./pages/Layout";
import GlobalStyle from "./global";

ReactDOM.render(
	<React.StrictMode>
		<Layout />
		<GlobalStyle />
	</React.StrictMode>,
	document.getElementById("root")
);
