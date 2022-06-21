import React from "react";
import axios from "axios";
import { useState } from "react";
import styled from "styled-components";
import FormContainer from "components/FormContainer";
import { mediaBreakpoint } from "utils/mediaBreakpoints";
import FormInput from "components/FormInput";
import BlueButton from "components/Buttons/BlueButton";
import { whitespace, validEmail } from "utils/validations";
import WithPaper from "components/DBCC/registrations/coaching-clinic/WithPaper";
import NoPaper from "components/DBCC/registrations/coaching-clinic/NoPaper";
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
	font-weight: 700;

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
				Is there a paper to be reviewed?
			</NextStepText>

			<div className="d-flex mx-auto mt-4 flex-lg-row flex-md-row flex-column ">
				<BlueButton
					onClick={() => {
						handleNext(0);
					}}
					className="me-lg-5 me-md-3 me-0 mb-lg-0 mb-md-0 mb-2 shadow"
				>
					YES
				</BlueButton>
				<BlueButton
					onClick={() => {
						handleNext(1);
					}}
					className="shadow"
					textColor={"danger"}
				>
					NO
				</BlueButton>
			</div>
		</>
	);
};

const CoachingClinic = () => {
	const [anyPaperToBeReviewedStatus, setAnyPaperToBeReviewed] = useState(-1);
	const [buktiTrfFile, setBuktiTrfFile] = useState(null);
	const [paperFile, setPaperFile] = useState(null);
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
		anyPaperToBeReviewed: false,
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
		anyPaperToBeReviewed,
	} = details;

	const handleNext = (num) => {
		setAnyPaperToBeReviewed(num);

		if (num === 0) {
			setDetails({ ...details, anyPaperToBeReviewed: true });
		} else if (num === 1) {
			setDetails({ ...details, anyPaperToBeReviewed: false });
		}
	};
	const onChange = (e) => {
		setDetails({ ...details, [e.target.name]: e.target.value });
	};

	const registerWithPaper = async () => {
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
			bodyFormData.append("anyPaperToBeReviewed", anyPaperToBeReviewed);
			bodyFormData.append("buktiTrf", buktiTrfFile);
			bodyFormData.append("paper", paperFile);

			await axios({
				method: "post",
				url: `${process.env.NEXT_PUBLIC_REST_API_URL}/coaching-clinic`,
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

	const registerNoPaper = async () => {
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
			bodyFormData.append("anyPaperToBeReviewed", anyPaperToBeReviewed);

			bodyFormData.append("buktiTrf", buktiTrfFile);

			await axios({
				method: "post",
				url: `${NEXT_PUBLIC_REST_API_URL}/coaching-clinic`,
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
			if (anyPaperToBeReviewed) {
				if (!buktiTrfFile || !paperFile) {
					alert("Please attach all necessary files! 😊");
				} else {
					await registerWithPaper();
				}
			} else {
				if (!buktiTrfFile) {
					alert("Please attach your payment slip! 😊");
				} else {
					await registerNoPaper();
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
					<Header className="mb-lg-5 mb-3">COACHING CLINIC REGISTRATION</Header>

					<Container>
						<FormContainer>
							{anyPaperToBeReviewedStatus === -1 && (
								<FirstStep
									handleNext={handleNext}
									onChange={onChange}
									details={details}
								/>
							)}

							{anyPaperToBeReviewedStatus === 0 && (
								<WithPaper
									handleNext={handleNext}
									details={details}
									loading={loading}
									setBuktiTrfFile={setBuktiTrfFile}
									buktiTrfFile={buktiTrfFile}
									handleSubmit={handleSubmit}
									setPaperFile={setPaperFile}
									paperFile={paperFile}
								/>
							)}

							{anyPaperToBeReviewedStatus === 1 && (
								<NoPaper
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

export async function getServerSideProps() {
	const res = await fetch(`${process.env.NEXT_PUBLIC_REST_API_URL}/config`);
	const regist_coaching_clinic_open = (await res.json()).result[0]
		.regist_coaching_clinic_open;

	if (!regist_coaching_clinic_open) {
		return {
			redirect: {
				destination: "/dbcc/register",
				permanent: false,
			},
		};
	}
	return {
		props: {},
	};
}

export default CoachingClinic;
