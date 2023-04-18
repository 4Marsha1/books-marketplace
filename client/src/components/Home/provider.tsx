import { ReactElement, useEffect, useState } from "react";
import { IBooks } from "../../types";
import axios from "axios";
import { BookContext } from "./context";
import { API_URL } from "../../constants";

export const BooksProvider = ({ children }: { children: ReactElement }) => {
	const [books, setBooks] = useState<IBooks[]>([]);

	useEffect(() => {
		(async () => {
			try {
				const req = await axios.get(API_URL);
				const data = req.data;
				setBooks(data);
			} catch (error) {
				console.log(error);
			}
		})();
	}, []);

	return (
		<BookContext.Provider value={{ books }}>{children}</BookContext.Provider>
	);
};
