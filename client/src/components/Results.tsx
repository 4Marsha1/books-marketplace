import React, { FunctionComponent, ReactElement } from "react";
import { IBooks } from "../types";
import { Flex } from "@mantine/core";
import BookCard from "./BookCard";

type TResultsProps = {
	books: IBooks[];
};

const Results: FunctionComponent<TResultsProps> = ({
	books,
}: TResultsProps): ReactElement => {
	return (
		<Flex
			direction="column"
			px="md"
			py="lg"
			gap="sm"
			sx={(theme) => ({
				width: "80%",
				height: "100vh",
				overflowY: "scroll",
				backgroundColor: theme.colors.gray[5],
			})}
		>
			{books.map((book) => (
				<BookCard key={book.id} book={book} />
			))}
		</Flex>
	);
};

export default Results;
