import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import FormInput from "components/FormInput";

import { mediaBreakpoint } from "utils/mediaBreakpoints";
import MyButton from "components/Buttons/MyButton";
import Select from "components/FormInput/Select";
import SuccessTalkInc from "components/Success/SuccessTalkInc";
import { validEmail, whitespace } from "utils/validations";
const OuterContainer = styled.div`
	min-height: 100vh;
	display: flex;
	padding-bottom: 24px;

	& .form-control {
		background: #88ccf9;
		border: none;
		padding: 10px 16px;
		border-radius: 24px;
		max-width: 480px;
		text-align: center;
	}

	& input[type="file"] {
		max-width: 480px;
	}

	& textarea:focus,
	& input:focus,
	& select:focus {
		outline: none !important;
		box-shadow: none;
	}

	& .small {
		max-width: 46%;
	}

	& .form > div > p {
		text-align: center;
		margin-bottom: 8px;
	}

	& .form > div {
		margin-top: 16px;
	}

	& select {
		border-radius: 16px;
		max-width: 480px;
		background: #88ccf9;
		text-align: center;
		padding: 8px;
	}

	@media ${mediaBreakpoint.down.md} {
		& .small {
			max-width: 100%;
		}

		min-height: 100vh;
	}
`;

const InnerContainer = styled.div`
	border-radius: 30%;
	border-top-right-radius: 0;
	border-top-left-radius: 0;
	width: 100%;
	padding-top: 32px;

	@media ${mediaBreakpoint.down.lg} {
		border-radius: 0;
		padding: 16px;
		padding-left: 40px;
		padding-right: 0;
	}

	@media ${mediaBreakpoint.down.md} {
		border-radius: 0;
		padding: 16px;
		padding-bottom: 32px;
	}
`;

const Container = styled.div`
	max-width: 1320px;
	width: 100%;
`;

const Header = styled.h1`
	font-family: TT_Ramilas;
	font-weight: 600;
	font-size: 42px;
	line-height: 42px;
	letter-spacing: 0.3px;
`;

const SubmitButton = styled(MyButton)`
	width: 240px;
	padding: 10px 0;

	border-radius: 28px;
	& p {
		font-size: 22px;
	}
`;

const NoticeText = styled.p`
	font-family: Poppins;
	font-size: 16px;
	font-weight: 500;
	font-style: italic;
`;

const SharingSessionRegister = () => {
	const statuses = [
		{ value: "Undergraduate / Student" },
		{ value: "Employee" },
		{ value: "Others" },
	];

	const [details, setDetails] = useState({
		fullName: "",
		status: statuses[0].value,
		facultyDepartmentBatch: "",
		email: "",
		dob: "",
		univName: "",
		phoneNr: "",
	});
	const [loading, setLoading] = useState(false);
	const [success, setSuccess] = useState(false);

	const onChange = (e) => {
		setDetails({ ...details, [e.target.name]: e.target.value });
	};

	const {
		fullName,
		status,
		facultyDepartmentBatch,
		email,
		dob,
		univName,
		phoneNr,
	} = details;

	const registerDBCCParticipant = async () => {
		setLoading(true);
		try {
			await axios({
				method: "post",
				url: `${process.env.NEXT_PUBLIC_REST_API_URL}/sharing-session`,
				data: {
					fullName,
					facultyDepartmentBatch,
					status,
					phoneNr,
					univName,
					email,
					dob,
				},
			});

			setSuccess(true);
		} catch (e) {
			if (e.response.status === 409) {
				alert(`Oops, your email (${email}) has already been registered! ???? `);
			} else {
				alert(
					`Oops, sorry, an error occured. ???? Please try to re-submit your registration.\n\nIf this error keeps happening, please report it to us. Error code: ${e.response.status}`
				);
			}
		}
		setLoading(false);
	};

	const handleSubmit = async () => {
		if (
			!validEmail(email) ||
			whitespace(fullName) ||
			whitespace(univName) ||
			whitespace(phoneNr) ||
			whitespace(dob)
		) {
			alert("Please fill in all required fields! ????");
		} else {
			await registerDBCCParticipant();
		}
	};

	return (
		<>
			{success ? (
				<SuccessTalkInc />
			) : (
				<OuterContainer className="bg-secondary">
					<InnerContainer className="bg-cream d-flex justify-content-center shadow">
						<Container className="d-flex flex-column align-items-center">
							<Header className="mt-md-2 mb-md-4 mt-1 mb-3 text-center">
								REGISTER{" "}
								<span className="text-danger">
									FOR <br /> TALK INC 1.0
								</span>
							</Header>

							<div className="d-flex flex-lg-row flex-md-row flex-column w-100 form">
								<FormInput
									onChange={onChange}
									text={"Full Name*"}
									name={"fullName"}
									className="align-items-center"
									required
									value={fullName}
								/>
								<FormInput
									onChange={onChange}
									text={"Faculty / Department / Batch"}
									name={"facultyDepartmentBatch"}
									className="align-items-center"
									placeholder=""
									required
									value={facultyDepartmentBatch}
								/>
							</div>

							<div className="d-flex flex-lg-row flex-md-row flex-column w-100 form ">
								<Select
									text="Status"
									onChange={onChange}
									name="status"
									className="align-items-center"
									content={statuses}
								/>

								<FormInput
									onChange={onChange}
									text={"Email*"}
									name={"email"}
									placeholder="mail@example.com"
									className="align-items-center"
									required
									value={email}
								/>
							</div>

							<div className="d-flex flex-lg-row flex-md-row flex-column w-100 form ">
								<FormInput
									onChange={onChange}
									text={"University / Institution*"}
									name={"univName"}
									className="align-items-center"
									value={univName}
								/>
								<FormInput
									onChange={onChange}
									text={"Phone Number*"}
									name={"phoneNr"}
									className="align-items-center"
									placeholder=""
									required
									value={phoneNr}
								/>
							</div>

							<div className="d-flex flex-lg-row flex-md-row flex-column w-100 form mb-5">
								<FormInput
									onChange={onChange}
									text={"Date of Birth*"}
									name={"dob"}
									placeholder={"DD/MM/YYYY"}
									className="align-items-center small"
									value={dob}
								/>
							</div>

							{loading ? (
								<NoticeText>Registering...</NoticeText>
							) : (
								<SubmitButton
									onClick={handleSubmit}
									variant="danger"
									textColor="cream"
								>
									<b>
										<i>SUBMIT</i>
									</b>
								</SubmitButton>
							)}
						</Container>
					</InnerContainer>
				</OuterContainer>
			)}
		</>
	);
};

export async function getServerSideProps() {
	const res = await fetch(`${process.env.NEXT_PUBLIC_REST_API_URL}/config`);
	const regist_sharing_session_open = (await res.json()).result[0]
		.regist_sharing_session_open;

	if (!regist_sharing_session_open) {
		return {
			redirect: {
				destination: "/national-seminar/register",
			},
		};
	}

	return {
		props: {},
	};
}

export default SharingSessionRegister;
