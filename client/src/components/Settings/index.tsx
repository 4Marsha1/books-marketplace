import React, { FunctionComponent, ReactElement, useState } from "react";
import Navbar from "../Navbar";
import { API_URL } from "../../constants";
import axios from "axios";
import Form from "./Form";

const Settings: FunctionComponent = (): ReactElement => {
	const [selectedFile, setSelectedFile] = useState<File>();

	const handleFileChange = function (e: React.ChangeEvent<HTMLInputElement>) {
		e.preventDefault();
		const fileList = e.target.files;

		if (!fileList) return;

		setSelectedFile(fileList[0]);
	};

	const uploadFile = async (
		e: React.MouseEvent<HTMLSpanElement, MouseEvent>
	) => {
		e.preventDefault();
		if (selectedFile) {
			const formData = new FormData();
			formData.append("file", selectedFile);
			console.log(Object.fromEntries(formData));
			try {
				const res = await axios.post(`${API_URL}/upload/`, formData);
				alert(res.data);
			} catch (error) {
				console.log(error);
			}
		}
	};
	return (
		<>
			<Navbar />
			<Form handleFileChange={handleFileChange} uploadFile={uploadFile} />
		</>
	);
};

export default Settings;
