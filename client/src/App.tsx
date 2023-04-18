import React from "react";
import { MantineProvider, Box } from "@mantine/core";

function App() {
	return (
		<MantineProvider withCSSVariables withGlobalStyles withNormalizeCSS>
			<Box
				sx={(theme) => ({
					backgroundColor: theme.colors.gray[8],
					color: theme.colors.gray[1],
				})}
			>
				Hello
			</Box>
		</MantineProvider>
	);
}

export default App;
