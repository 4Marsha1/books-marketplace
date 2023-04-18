import React from "react";
import { MantineProvider } from "@mantine/core";
import Home from "./components/Home";

function App() {
	return (
		<MantineProvider withCSSVariables withGlobalStyles withNormalizeCSS>
			<Home />
		</MantineProvider>
	);
}

export default App;
