import React, { FunctionComponent, ReactElement } from "react";
import { Flex, Text, TextInput, ActionIcon } from "@mantine/core";
import { IconSettings, IconSearch } from "@tabler/icons-react";

const Navbar: FunctionComponent = (): ReactElement => {
	return (
		<Flex
			justify="space-between"
			align="center"
			px="xl"
			py="md"
			sx={(theme) => ({
				backgroundColor: theme.colors.dark[8],
				color: theme.colors.gray[2],
				height: 80,
				border: `1px solid ${theme.colors.dark[4]}`,
			})}
		>
			<Text fz="2rem" lh="20" weight={700}>
				Books
			</Text>
			<TextInput
				placeholder="Search books..."
				variant="filled"
				size="md"
				icon={<IconSearch size="1.25rem" />}
				sx={(theme) => ({
					width: "50%",
					outline: `2px solid ${theme.colors.dark[4]}`,
				})}
			/>
			<ActionIcon
				size="lg"
				radius="md"
				variant="subtle"
				sx={(theme) => ({
					color: theme.colors.gray[1],
					"&:hover": {
						backgroundColor: theme.colors.dark[5],
					},
				})}
			>
				<IconSettings size="2rem" />
			</ActionIcon>
		</Flex>
	);
};

export default Navbar;
