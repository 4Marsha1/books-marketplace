import { ReactElement, useEffect, useState } from "react";
import { IBooks } from "../../types";
import axios from "axios";
import { BookContext } from "./context";
import { API_URL } from "../../constants";

export const BooksProvider = ({ children }: { children: ReactElement }) => {
	const [books, setBooks] = useState<IBooks[]>([]);
	const [genres, setGenres] = useState<string[]>([]);

	const [genreFilter, setGenreFilter] = useState("");
	const [reviewFilter, setReviewFilter] = useState("");
	const [priceFilter, setPriceFilter] = useState("");

	useEffect(() => {
		(async () => {
			try {
				const req = await axios.get(API_URL);
				const data = req.data;
				setBooks(data);

				let set: Set<string> = new Set();
				await data.forEach((book: IBooks) => set.add(book.genre));
				setGenres(Array.from(set));
			} catch (error) {
				console.log(error);
			}
		})();
	}, []);

	return (
		<BookContext.Provider
			value={{
				books,
				genres,
				setGenreFilter,
				setPriceFilter,
				setReviewFilter,
				genreFilter,
				reviewFilter,
				priceFilter,
			}}
		>
			{children}
		</BookContext.Provider>
	);
};
