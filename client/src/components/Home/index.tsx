import React, { FunctionComponent, ReactElement } from "react";
import Navbar from "../Navbar";
import { BooksProvider } from "./provider";
import Main from "../Main";

const Home: FunctionComponent = (): ReactElement => {
	return (
		<BooksProvider>
			<>
				<Navbar />
				<Main />
			</>
		</BooksProvider>
	);
};

export default Home;
