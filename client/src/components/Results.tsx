import React, { FunctionComponent, ReactElement, useContext } from "react";
import { Flex } from "@mantine/core";
import BookCard from "./BookCard";
import { BookContext } from "./Home/context";

const Results: FunctionComponent = (): ReactElement => {
	const { books, genreFilter, priceFilter, reviewFilter } =
		useContext(BookContext);

	const getFilteredBooks = () => {
		return books
			.filter((book) => {
				if (genreFilter === "" || genreFilter === "all") {
					return book;
				} else {
					return book.genre === genreFilter;
				}
			})
			.filter((book) => {
				if (reviewFilter === "") {
					return book;
				} else {
					return book.user_ratings >= Number(reviewFilter);
				}
			})
			.filter((book) => {
				if (priceFilter === "") {
					return book;
				} else {
					switch (priceFilter) {
						case "5":
							return book.price < 5;
						case "10":
							return book.price > 5 && book.price < 10;
						case "15":
							return book.price > 10 && book.price < 15;
						case "25":
							return book.price > 15 && book.price < 25;
						case "30":
							return book.price > 30;
						default:
							return book;
					}
				}
			})
			.map((book) => <BookCard key={book.id} book={book} />);
	};

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
			{getFilteredBooks()}
		</Flex>
	);
};

export default Results;
