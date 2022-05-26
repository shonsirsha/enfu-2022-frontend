import React, { useRef, useState } from "react";
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
	border-radius: 16px;
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

const FileInput = ({ text, accept = "", ref = "" }) => {
	const inputRef = useRef(ref);
	const [fileName, setFileName] = useState("");
	const [fileSelected, setFileSelected] = useState(false);

	const onChange = (e) => {
		if (e.target.files[0].name) {
			setFileSelected(true);
			setFileName(e.target.files[0].name);
		}
	};
	return (
		<div className="d-flex flex-column w-100 me-5">
			<FormText className="mb-2">{text}:</FormText>
			{!fileSelected ? (
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
						File Selected: <b>{fileName}</b>{" "}
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
