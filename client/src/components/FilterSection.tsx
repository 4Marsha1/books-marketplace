import React, { FunctionComponent, ReactElement, useContext } from "react";
import { Select, Radio, Flex, Text } from "@mantine/core";
import { BookContext } from "./Home/context";
import { getStars } from "./BookCard";

const PRICES = [
	{ value: "5", label: "Under $5" },
	{ value: "10", label: "$5 - $10" },
	{ value: "15", label: "$10 - $15" },
	{ value: "25", label: "$15 - $25" },
	{ value: "30", label: "above $25" },
];

const FilterSection: FunctionComponent = (): ReactElement => {
	const {
		genres,
		genreFilter,
		reviewFilter,
		priceFilter,
		setReviewFilter,
		setGenreFilter,
		setPriceFilter,
	} = useContext(BookContext);

	const getPrices = () => {
		return PRICES.map((price) => (
			<Radio
				value={price.value}
				label={price.label}
				styles={{
					radio: {
						display: "none",
					},
					icon: {
						display: "none",
					},
					label: {
						cursor: "pointer",
						color: "white",
					},
				}}
				sx={(theme) => ({
					cursor: "pointer",
					"&:hover": {
						backgroundColor: theme.colors.gray[6],
					},
					padding: "0.4rem 1rem",
				})}
			/>
		));
	};

	const getCustomerReviewStars = () => {
		let arr = [];
		for (let i = 4; i >= 1; i--) {
			arr.push(
				<Radio
					value={i}
					label={
						<Flex gap="sm">
							{getStars(i)}{" "}
							<Text fz="sm" color="white">
								& up
							</Text>
						</Flex>
					}
					styles={{
						radio: {
							display: "none",
						},
						label: {
							cursor: "pointer",
						},
					}}
					sx={(theme) => ({
						cursor: "pointer",
						"&:hover": {
							backgroundColor: theme.colors.gray[6],
						},
						padding: "0.4rem 1rem",
					})}
				/>
			);
		}
		return arr;
	};

	return (
		<Flex
			direction="column"
			p="md"
			gap="sm"
			sx={(theme) => ({
				width: "20%",
				height: "100vh",
				backgroundColor: theme.colors.gray[7],
				borderRight: `2px solid ${theme.colors.dark[9]}`,
			})}
		>
			<Select
				name="genre"
				label="Genres"
				value={genreFilter}
				onChange={setGenreFilter}
				placeholder="Pick a genre"
				data={[
					...genres.map((item) => ({ value: item, label: item })),
					{ value: "all", label: "all" },
				]}
				styles={(theme) => ({
					label: {
						color: theme.colors.gray[2],
					},
				})}
			/>

			<Radio.Group
				value={reviewFilter}
				onChange={setReviewFilter}
				name="review"
				label="CustomerReviews"
				styles={(theme) => ({
					label: {
						color: theme.colors.gray[2],
					},
				})}
			>
				<Flex direction="column" mt="xs">
					{getCustomerReviewStars()}
				</Flex>
			</Radio.Group>

			<Radio.Group
				value={priceFilter}
				onChange={setPriceFilter}
				name="price"
				label="Price"
				styles={(theme) => ({
					label: {
						color: theme.colors.gray[2],
					},
				})}
			>
				<Flex direction="column" mt="xs">
					{getPrices()}
				</Flex>
			</Radio.Group>
		</Flex>
	);
};

export default FilterSection;
