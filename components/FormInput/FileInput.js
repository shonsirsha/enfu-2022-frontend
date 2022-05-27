import React, { useRef } from "react";
import styled from "styled-components";

const FormText = styled.p`
	font-size: 16px;
	font-family: Poppins;
`;

const NoticeText = styled.p`
	font-family: Poppins;
	font-size: 16px;
	font-weight: 400;
	font-style: italic;
`;

const UploadBtn = styled.button`
	background: #ff5a24;
	height: 80px;
	width: 220px;
	border: none;
	border-radius: 10px;
	padding: 8px;
`;

const Inner = styled.div`
	background: transparent;
	border: 2px dashed white;
	border-radius: 12px;
	width: 100%;
	height: 100%;

	font-size: 48px;
	line-height: 48px;
	color: #fff;
	font-weight: 200;
`;

const ChangeButton = styled.button`
	background: none;
	border: none;
`;

const FileInput = ({
	text,
	accept = "",
	ref = "",
	setFile = () => {},
	file,
}) => {
	const inputRef = useRef(ref);

	const onChange = (e) => {
		if (e.target.files[0]) {
			if (e.target.files[0].size >= 5000000) {
				alert("Sorry, the file's size is too big, you can't use this file!");
				e.target.value = "";
			} else {
				setFile(e.target.files[0]);
			}
		}
	};
	return (
		<div className="d-flex flex-column">
			<FormText className="mb-2">{text}:</FormText>
			{!file ? (
				<UploadBtn
					onClick={() => {
						inputRef.current.click();
					}}
				>
					<Inner>+</Inner>
				</UploadBtn>
			) : (
				<div className="d-flex mb-2">
					<NoticeText className="me-3">
						File Selected: <b>{file.name}</b>{" "}
					</NoticeText>

					<ChangeButton
						onClick={() => {
							inputRef.current.click();
						}}
					>
						<NoticeText className="text-secondary">Change</NoticeText>
					</ChangeButton>
				</div>
			)}

			<input
				accept={accept}
				onChange={onChange}
				className="d-none"
				ref={inputRef}
				type={"file"}
			/>

			<NoticeText className="text-danger mt-2">
				File must be of type .jpg/.png with a maximum size of 5MB
			</NoticeText>
		</div>
	);
};

export default FileInput;
