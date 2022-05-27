import React from "react";
import axios from "axios";
import { useState } from "react";
import styled from "styled-components";
import FormContainer from "components/FormContainer";
import { mediaBreakpoint } from "utils/mediaBreakpoints";
import FormInput from "components/FormInput";
import BlueButton from "components/Buttons/BlueButton";
import { whitespace, validEmail } from "utils/validations";
import ParticipantsOfDBCC from "components/DBCC/registrations/coaching-session/ParticipantsOfDBCC";
import NonParticipantsOfDBCC from "components/DBCC/registrations/coaching-session/NonParticipantsOfDBCC";
import SuccessDBCC from "components/Success/SuccessDBCC";

const OuterContainer = styled.div`
	padding: 32px;
	display: flex;
	flex-direction: column;
	min-height: 100vh;
	& .form-control {
		background: #fffbf0;
		border: 3px solid #ff5a24;
		border-radius: 8px;
	}
`;

const Container = styled.div`
	display: flex;
	align-items: center;
	max-width: 1320px;
	width: 100%;
	margin: 0 auto;
	@media (max-width: 1194px) and ${mediaBreakpoint.up.lg} {
		max-width: 996px;
	}
`;

const NextStepText = styled.p`
	font-weight: 700;
	font-size: 19px;
`;

const Header = styled.h1`
	font-family: TT_Ramilas;
	font-size: 48px;
	line-height: 48px;

	@media ${mediaBreakpoint.down.md} {
		font-size: 32px;
		line-height: 32px;
	}
`;

const FirstStep = ({ handleNext, onChange, details }) => {
	const {
		fullName,
		placeDOB,
		phoneNr,
		facultyDepartmentBatch,
		univName,
		lineId,
		gender,
		email,
	} = details;

	return (
		<>
			<div className="d-flex flex-lg-row flex-md-row flex-column">
				<FormInput
					onChange={onChange}
					text={"Full Name*"}
					name={"fullName"}
					required
					value={fullName}
				/>
				<FormInput
					onChange={onChange}
					text={"Place, DOB*"}
					name={"placeDOB"}
					placeholder="Jakarta, 04-12-2000"
					required
					value={placeDOB}
				/>
			</div>
			<div className="d-flex flex-lg-row flex-md-row flex-column mt-3">
				<FormInput
					onChange={onChange}
					text={"Faculty / Department / Batch*"}
					name={"facultyDepartmentBatch"}
					value={facultyDepartmentBatch}
					required
				/>
				<FormInput
					onChange={onChange}
					text={"Phone Number*"}
					name={"phoneNr"}
					value={phoneNr}
					required
				/>
			</div>

			<div className="d-flex flex-lg-row flex-md-row flex-column mt-3">
				<FormInput
					onChange={onChange}
					text={"University / Institute*"}
					name={"univName"}
					required
					value={univName}
				/>
				<FormInput
					onChange={onChange}
					text={"Line ID"}
					name="lineId"
					value={lineId}
				/>
			</div>

			<div className="d-flex flex-lg-row flex-md-row flex-column mt-3">
				<FormInput
					onChange={onChange}
					text={"Gender*"}
					placeholder="Male / Female"
					name="gender"
					value={gender}
					required
				/>
				<FormInput
					onChange={onChange}
					text={"E-mail*"}
					name="email"
					value={email}
					type={"email"}
					required
				/>
			</div>

			<NextStepText className="mt-5 mx-auto text-lg-start text-center">
				Are you a participant of Diponegoro Busines Case Competition?
			</NextStepText>

			<div className="d-flex mx-auto mt-4 flex-lg-row flex-md-row flex-column ">
				<BlueButton
					onClick={() => {
						handleNext(0);
					}}
					className="me-lg-5 me-md-3 me-0 mb-lg-0 mb-md-0 mb-2"
				>
					YES
				</BlueButton>
				<BlueButton
					onClick={() => {
						handleNext(1);
					}}
					textColor={"danger"}
				>
					NO
				</BlueButton>
			</div>
		</>
	);
};

const CoachingSession = () => {
	const [isDBCCParticipant, setIsDBCCParticipant] = useState(-1);
	const [buktiTrfFile, setBuktiTrfFile] = useState(null);
	const [success, setSuccess] = useState(false);
	const [loading, setLoading] = useState(false);

	const [details, setDetails] = useState({
		fullName: "",
		placeDOB: "",
		phoneNr: "",
		facultyDepartmentBatch: "",
		univName: "",
		lineId: "",
		gender: "",
		email: "",
		dbccParticipant: false,
		dbccTeamName: "",
		dbccCodeOfRegistration: "",
	});

	const {
		fullName,
		placeDOB,
		phoneNr,
		facultyDepartmentBatch,
		univName,
		lineId,
		gender,
		email,
		dbccParticipant,
		dbccTeamName,
		dbccCodeOfRegistration,
	} = details;

	const handleNext = (num) => {
		setIsDBCCParticipant(num);

		if (num === 0) {
			setDetails({ ...details, dbccParticipant: true });
		} else if (num === 1) {
			setDetails({ ...details, dbccParticipant: false });
		}
	};
	const onChange = (e) => {
		setDetails({ ...details, [e.target.name]: e.target.value });
	};

	const registerDBCCParticipant = async () => {
		setLoading(true);
		try {
			const register = await axios({
				method: "post",
				url: "http://localhost:5000/api/coaching-session",
				data: {
					fullName,
					placeDOB,
					facultyDepartmentBatch,
					phoneNr,
					univName,
					lineId,
					gender,
					email,
					dbccParticipant,
					dbccTeamName,
					dbccCodeOfRegistration,
				},
			});

			setSuccess(true);
		} catch (e) {
			if (e.response.status === 409) {
				alert(`Oops, your email (${email}) has already been registered! 😬 `);
			} else {
				alert(
					`Oops, sorry, an error occured. 😬 Please try to re-submit your registration.\n\nIf this error keeps happening, please report it to us. Error code: ${e.response.status}`
				);
			}
		}
		setLoading(false);
	};

	const registerNONDBCC = async () => {
		setLoading(true);
		try {
			let bodyFormData = new FormData();
			bodyFormData.append("fullName", fullName);
			bodyFormData.append("placeDOB", placeDOB);
			bodyFormData.append("facultyDepartmentBatch", facultyDepartmentBatch);
			bodyFormData.append("phoneNr", phoneNr);
			bodyFormData.append("univName", univName);
			bodyFormData.append("lineId", lineId);
			bodyFormData.append("gender", gender);
			bodyFormData.append("email", email);
			bodyFormData.append("dbccParticipant", dbccParticipant);
			bodyFormData.append("dbccTeamName", "");
			bodyFormData.append("dbccCodeOfRegistration", "");
			bodyFormData.append("buktiTrf", buktiTrfFile);

			await axios({
				method: "post",
				url: "http://localhost:5000/api/coaching-session",
				headers: { "Content-Type": "multipart/form-data" },
				data: bodyFormData,
			});

			setSuccess(true);
		} catch (e) {
			if (e.response.status === 409) {
				alert(`Oops, your email (${email}) has already been registered! 😬 `);
			} else {
				console.log(e);
				alert(
					`Oops, sorry, an error occured. 😬 Please try to re-submit your registration.\n\nIf this error keeps happening, please report it to us. Error code: ${e.response.status}`
				);
			}
		}
		setLoading(false);
	};

	const handleSubmit = async () => {
		if (
			!validEmail(email) ||
			whitespace(fullName) ||
			whitespace(placeDOB) ||
			whitespace(facultyDepartmentBatch) ||
			whitespace(univName) ||
			whitespace(phoneNr) ||
			whitespace(gender)
		) {
			alert("Please fill in all required fields! 😊");
		} else {
			if (dbccParticipant) {
				if (whitespace(dbccTeamName) || whitespace(dbccCodeOfRegistration)) {
					alert("Please fill in all required fields! 😊");
				} else {
					await registerDBCCParticipant();
				}
			} else {
				if (!buktiTrfFile) {
					alert("Please attach your payment slip! 😊");
				} else {
					await registerNONDBCC();
				}
			}
		}
	};
	return (
		<>
			{success ? (
				<SuccessDBCC />
			) : (
				<OuterContainer className={`bg-cream align-items-center`}>
					<Header className="mb-lg-5 mb-3">
						COACHING SESSION REGISTRATION
					</Header>

					<Container>
						<FormContainer>
							{isDBCCParticipant === -1 && (
								<FirstStep
									handleNext={handleNext}
									onChange={onChange}
									details={details}
								/>
							)}

							{isDBCCParticipant === 0 && (
								<ParticipantsOfDBCC
									handleNext={handleNext}
									onChange={onChange}
									details={details}
									loading={loading}
									handleSubmit={handleSubmit}
								/>
							)}

							{isDBCCParticipant === 1 && (
								<NonParticipantsOfDBCC
									handleNext={handleNext}
									details={details}
									loading={loading}
									setBuktiTrfFile={setBuktiTrfFile}
									buktiTrfFile={buktiTrfFile}
									handleSubmit={handleSubmit}
								/>
							)}
						</FormContainer>
					</Container>
				</OuterContainer>
			)}
		</>
	);
};

export default CoachingSession;
