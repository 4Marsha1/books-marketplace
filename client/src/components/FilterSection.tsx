import React, { FunctionComponent, ReactElement } from "react";
import { Box } from "@mantine/core";

const FilterSection: FunctionComponent = (): ReactElement => {
	return (
		<Box
			sx={(theme) => ({
				width: "20%",
				height: "100vh",
				backgroundColor: theme.colors.gray[7],
				borderRight: `2px solid ${theme.colors.dark[9]}`,
			})}
		></Box>
	);
};

export default FilterSection;
