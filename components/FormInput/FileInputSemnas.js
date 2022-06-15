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
	width: 100%;
	border: none;
	border-radius: 40px;
	padding: 0;
	height: 48px;

	& p {
		font-size: 21px;
		font-style: Italic;
		font-weight: 300;
	}
`;

const Inner = styled.div``;

const ChangeButton = styled.button`
	background: none;
	border: none;
`;

const InnerBtn = styled.div`
	border-radius: 40px;
	background: #000;
	padding: 8px 16px;
	min-width: 80px;
	height: 100%;
	right: 0;
	font-weight: 800;
	font-size: 19px;
	line-height: 28px;
	text-align: center;
`;

const FileInputSemnas = ({
	text,
	accept = "",
	center = false,
	ref = "",
	noMargin = false,
	setFile = () => {},
	file,
	noticeText = "File must be of type .jpg/.png with a maximum size of 5MB",
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
		<div
			className={`d-flex flex-column false ${
				noMargin ? `me-0` : `me-5`
			} align-items-center w-100`}
		>
			<FormText className="mb-2">{text}:</FormText>
			{!file ? (
				<UploadBtn
					className="bg-orange position-relative d-flex align-items-center fileInputBtn"
					onClick={() => {
						inputRef.current.click();
					}}
				>
					<p className="m-0 mx-auto">Select JPG/PNG</p>
					<InnerBtn className="text-white">Browse</InnerBtn>
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

			<NoticeText className={`text-danger mt-2 ${center && `text-center`}`}>
				{noticeText}
			</NoticeText>
		</div>
	);
};

export default FileInputSemnas;
