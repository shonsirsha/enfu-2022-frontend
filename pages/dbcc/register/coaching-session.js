import React from "react";
import axios from "axios";
import { useState } from "react";
import styled from "styled-components";
import FormContainer from "components/FormContainer";
import { mediaBreakpoint } from "utils/mediaBreakpoints";
import FormInput from "components/FormInput";
import BlueButton from "components/Buttons/BlueButton";
import { whitespace, validEmail } from "utils/validations";
import FileInput from "components/FormInput/FileInput";
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
		margin-top: -164px;
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
`;

const Subheader = styled.p`
	font-family: TT_Ramilas;
	font-size: 24px;
	line-height: 24px;
`;

const NoticeText = styled.p`
	font-family: Poppins;
	font-size: 16px;
	font-weight: 500;
	font-style: italic;
`;

const ParticipantsOfDBCC = ({
	handleNext,
	onChange,
	details,
	handleSubmit,
	loading,
	setLoading,
}) => {
	const { dbccTeamName, dbccCodeOfRegistration } = details;
	return (
		<div className="d-flex flex-column">
			<Subheader className="mb-4 text-danger">Participants of DBCC</Subheader>
			<NoticeText className="mb-4">
				Please upload your DBCC’s registration and payment slip below!
			</NoticeText>
			<div className="d-flex mb-4">
				<FormInput
					text={"Team Name*"}
					value={dbccTeamName}
					onChange={onChange}
					name="dbccTeamName"
				/>
				<FormInput
					onChange={onChange}
					value={dbccCodeOfRegistration}
					text={"Code of Registration*"}
					name="dbccCodeOfRegistration"
				/>
			</div>

			{/* <FileInput
				accept="image/png, image/jpeg, image/jpg"
				text={"Upload File (payment slip of DBCC)*"}
			/> */}

			<div className="d-flex ms-auto me-5 mt-4">
				{loading ? (
					<NoticeText className="mb-4">Registering...</NoticeText>
				) : (
					<>
						<BlueButton
							onClick={() => {
								handleNext(-1);
							}}
							className="me-3"
						>
							Back
						</BlueButton>
						<BlueButton
							onClick={() => {
								handleSubmit();
							}}
						>
							SUBMIT
						</BlueButton>
					</>
				)}
			</div>
		</div>
	);
};

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
			<div className="d-flex">
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
			<div className="d-flex mt-3">
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

			<div className="d-flex mt-3">
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

			<div className="d-flex mt-3">
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

			<NextStepText className="mt-5 mx-auto">
				Are you a participant of Diponegoro Busines Case Competition?
			</NextStepText>

			<div className="d-flex mx-auto mt-4">
				<BlueButton
					onClick={() => {
						handleNext(0);
					}}
					className="me-5"
				>
					YES
				</BlueButton>
				<BlueButton textColor={"danger"}>NO</BlueButton>
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
			console.log("Done?", register);
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
					alert("failed");
				} else {
					await registerDBCCParticipant();
				}
			} else {
				alert("send with doc!");
			}
		}
	};
	return (
		<>
			{success ? (
				<SuccessDBCC />
			) : (
				<OuterContainer className={`bg-cream align-items-center`}>
					<Header className="mb-5">COACHING SESSION REGISTRATION</Header>

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
									setLoading={setLoading}
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
