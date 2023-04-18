import React, { FunctionComponent, ReactElement } from "react";
import { IBooks } from "../types";
import { Paper, Text, Flex, Badge } from "@mantine/core";
import { IconStar } from "@tabler/icons-react";

type TBookCardProp = {
	book: IBooks;
};

const BookCard: FunctionComponent<TBookCardProp> = ({
	book,
}: TBookCardProp): ReactElement => {
	function getStars(rating: number) {
		// Round to nearest half
		rating = Math.round(rating * 2) / 2;
		let output = [];

		// Append all the filled whole stars
		for (var i = rating; i >= 1; i--)
			output.push(<IconStar color="gold" fill="gold" />);

		// If there is a half a star, append it
		if (i === 0.5) output.push(<IconStar color="gold" fill="gold" />);

		// Fill the empty stars
		for (let i = 5 - rating; i >= 1; i--)
			output.push(<IconStar color="gold" />);

		return output;
	}

	return (
		<Paper
			shadow="sm"
			radius="md"
			p="md"
			sx={(theme) => ({ border: `2px solid ${theme.colors.dark[2]}` })}
		>
			<Flex direction="column" gap="xs">
				<Text weight={700} fz="xl" lh="30px">
					{book.name}
				</Text>
				<Flex gap="sm" align="center">
					<Text weight={600} fz="lg" lh="21px">
						{book.authors}
					</Text>
					|
					<Text weight={500} fz="lg" lh="21px">
						{book.genre}
					</Text>
					|
					<Text weight={500} fz="lg" lh="21px">
						{book.year}
					</Text>
				</Flex>
				<Flex gap="sm">
					{getStars(book.user_ratings)}
					<Text
						weight={500}
						sx={(theme) => ({
							color: theme.colors.blue[5],
						})}
					>
						{book.reviews}
					</Text>
				</Flex>
				<Badge color="dark" size="lg" variant="filled" w="60px" h="30px">
					<Text weight={600} fz="lg" lh="30px">
						${book.price}
					</Text>
				</Badge>
			</Flex>
		</Paper>
	);
};

export default BookCard;
