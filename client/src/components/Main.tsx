import React, { FunctionComponent, ReactElement } from "react";
import { Flex } from "@mantine/core";
import FilterSection from "./FilterSection";
import Results from "./Results";

const Main: FunctionComponent = (): ReactElement => {
	return (
		<Flex>
			<FilterSection />
			<Results />
		</Flex>
	);
};

export default Main;
