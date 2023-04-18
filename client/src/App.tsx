import React from "react";
import { MantineProvider } from "@mantine/core";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Settings from "./components/Settings";

function App() {
	return (
		<MantineProvider withCSSVariables withGlobalStyles withNormalizeCSS>
			<BrowserRouter>
				<Routes>
					<Route path="/" Component={Home} />
					<Route path="/settings" Component={Settings} />
				</Routes>
			</BrowserRouter>
		</MantineProvider>
	);
}

export default App;
