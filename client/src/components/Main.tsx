import React, { FunctionComponent, ReactElement, useContext } from "react";
import { BookContext } from "./Home/context";
import { Flex } from "@mantine/core";
import FilterSection from "./FilterSection";
import Results from "./Results";

const Main: FunctionComponent = (): ReactElement => {
	const { books } = useContext(BookContext);

	return (
		<Flex>
			<FilterSection />
			<Results books={books} />
		</Flex>
	);
};

export default Main;
