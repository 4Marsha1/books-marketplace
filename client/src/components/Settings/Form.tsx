import React, { ChangeEvent, FunctionComponent, ReactElement } from "react";
import { Flex, Button, Text, Table } from "@mantine/core";

type TFormProps = {
	handleFileChange: (e: ChangeEvent<HTMLInputElement>) => void;
	uploadFile: (
		e: React.MouseEvent<HTMLSpanElement, MouseEvent>
	) => Promise<void>;
};

const ELEMENTS = [
	{
		name: "Alexander Hamilton",
		authors: "Ron Chernow",
		user_ratings: 4.8,
		reviews: 9198,
		price: 13.0,
		year: 2016,
		genre: "Non Fiction",
	},
];

const Form: FunctionComponent<TFormProps> = ({
	handleFileChange,
	uploadFile,
}: TFormProps): ReactElement => {
	const rows = ELEMENTS.map((element) => (
		<tr key={element.name}>
			<td>{element.name}</td>
			<td>{element.authors}</td>
			<td>{element.user_ratings}</td>
			<td>{element.reviews}</td>
			<td>{element.price}</td>
			<td>{element.year}</td>
			<td>{element.genre}</td>
		</tr>
	));
	return (
		<form>
			<Flex
				direction="column"
				mx="auto"
				my="10rem"
				px="lg"
				py="md"
				gap="2rem"
				sx={(theme) => ({
					width: "max-content",
					backgroundColor: theme.colors.gray[3],
				})}
			>
				<Text fz="lg" weight={500} lh="30px">
					Upload a CSV file in the format
				</Text>
				<Table
					horizontalSpacing="xl"
					verticalSpacing="xs"
					fontSize="xs"
					highlightOnHover
					withBorder
					withColumnBorders
				>
					<thead>
						<tr>
							<th>Name</th>
							<th>Author</th>
							<th>Ratings</th>
							<th>Review</th>
							<th>Price</th>
							<th>Year</th>
							<th>Genre</th>
						</tr>
					</thead>
					<tbody>{rows}</tbody>
				</Table>
				<input
					type="file"
					multiple={false}
					accept=".csv"
					onChange={handleFileChange}
				/>
				<Button onClick={uploadFile} type="submit">
					Upload CSV
				</Button>
			</Flex>
		</form>
	);
};

export default Form;
