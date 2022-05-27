import React from "react";
import axios from "axios";
import { useState } from "react";
import styled from "styled-components";
import FormContainer from "components/FormContainer";
import { mediaBreakpoint } from "utils/mediaBreakpoints";
import FormInput from "components/FormInput";
import BlueButton from "components/Buttons/BlueButton";
import { whitespace, validEmail } from "utils/validations";
import SuccessDBCC from "components/Success/SuccessDBCC";
import { SemiCircle } from "components/SemiCircle";
import FileInput from "components/FormInput/FileInput";
import Ribbon from "components/Ribbon";
import DanaLogo from "public/assets/dana_logo.png";
import PaypalLogo from "public/assets/paypal_logo.png";
import GopayLogo from "public/assets/gopay_logo.png";
import OVOLogo from "public/assets/ovo_logo.png";
import PaymentMethod from "components/DBCC/PaymentMethods";

const BlueContainer = styled.div`
	padding-bottom: 32px;
`;
const OuterContainer = styled.div`
	padding: 32px;
	display: flex;
	flex-direction: column;
	min-height: 100vh;
	border-bottom-left-radius: 120px;
	border-bottom-right-radius: 120px;
	padding-bottom: 64px;
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

const Header = styled.h1`
	font-family: TT_Ramilas;
	font-size: 48px;
	line-height: 48px;

	@media ${mediaBreakpoint.down.md} {
		font-size: 32px;
		line-height: 32px;
	}
`;

const Subheader = styled.p`
	font-family: TT_Ramilas;
	font-size: 24px;
	line-height: 24px;
`;

const OuterPaymentSectionContainer = styled.div`
	z-index: 2;
	padding: 128px 0;
	border-radius: 104px;
	border-top-left-radius: 0;
	border-top-right-radius: 0;
	display: flex;
	align-items: center;
	justify-content: center;

	@media ${mediaBreakpoint.down.md} {
		padding: 64px 0;
	}
`;

const InnerPaymentSectionContainer = styled.div`
	max-width: 1320px;
	width: 100%;
	padding: 24px 16px;
	padding-bottom: 40px;
	border-radius: 24px;
	@media (max-width: 1194px) and ${mediaBreakpoint.up.lg} {
		max-width: 996px;
	}

	min-height: 480px;
`;

const StyledSemiCircleSmallLeft = styled(SemiCircle)`
	position: absolute;
	transform: rotate(90deg);
	left: -16px;
	top: 132px;
	width: 64px;
	height: 32px;
`;

const StyledSemiCircleSmallRight = styled(StyledSemiCircleSmallLeft)`
	right: 0;
	transform: rotate(270deg);
	left: calc(100% - 48px);
`;

const StyledSemiCircleSmallBottomRight = styled(StyledSemiCircleSmallLeft)`
	top: unset;
	bottom: 132px;
	transform: rotate(270deg);
	left: calc(100% - 48px);
`;

const StyledSemiCircleSmallBottomLeft = styled(StyledSemiCircleSmallLeft)`
	top: unset;
	bottom: 132px;
`;

const PaymentSection = () => {
	return (
		<OuterPaymentSectionContainer className="bg-secondary">
			<InnerPaymentSectionContainer className="position-relative bg-cream d-flex flex-column align-items-center shadow">
				<div className="d-md-block d-none">
					<StyledSemiCircleSmallLeft className="bg-secondary" />
					<StyledSemiCircleSmallRight className="bg-secondary" />
					<StyledSemiCircleSmallBottomRight className="bg-secondary" />
					<StyledSemiCircleSmallBottomLeft className="bg-secondary" />
				</div>

				<Ribbon text="Payment Options" />
				<div className="mt-3" />
				<div className="d-flex mb-4 mt-5 flex-wrap justify-content-center">
					<div className="me-lg-4 me-md-3 mb-lg-0 mb-5">
						<PaymentMethod
							src={PaypalLogo}
							w={200}
							h={84}
							alt="Paypal"
							accountNumber="@Dheasrgh"
							accountName="(a.n Dhea Reskita Saragih)"
						/>
					</div>

					<div className="me-lg-4 mb-lg-0 mb-5">
						<PaymentMethod
							src={GopayLogo}
							w={200}
							h={84}
							alt="Gopay"
							accountNumber="085161810803"
							accountName="(a.n Dhea Reskita Saragih)"
						/>
					</div>
					<div className="me-lg-4 me-md-3 mb-lg-0 mb-5">
						<PaymentMethod
							src={OVOLogo}
							w={200}
							h={84}
							alt="OVO"
							accountNumber="082375051837"
							accountName="(a.n Natalia Karlina Ginting)"
						/>
					</div>
					<div className="me-lg-4 mb-lg-0 ">
						<PaymentMethod
							src={DanaLogo}
							w={200}
							h={84}
							alt="Dana"
							accountNumber="082375051837"
							accountName="(a.n Natalia Karlina Ginting)"
						/>
					</div>
				</div>

				<div className="mt-3">
					<FileInput
						center
						setFile={() => {}}
						file={null}
						accept="image/png, image/jpeg, image/jpg"
						text={"Proof of Payment*"}
					/>
				</div>

				<BlueButton className="shadow mt-5" onClick={() => {}}>
					SUBMIT
				</BlueButton>
			</InnerPaymentSectionContainer>
		</OuterPaymentSectionContainer>
	);
};

const FirstMember = ({ onChange, details }) => {
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
					text={"Team's Name*"}
					name={"teamName"}
					value={facultyDepartmentBatch}
					required
				/>
				<FormInput
					onChange={onChange}
					text={"Phone Number*"}
					name={"phoneNr1"}
					value={phoneNr}
					required
				/>
			</div>
			<div className="d-flex flex-lg-row flex-md-row flex-column mt-3">
				<FormInput
					onChange={onChange}
					text={"Full Name*"}
					name={"fullName1"}
					required
					value={fullName}
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
					text={"Faculty / Department / Batch*"}
					name={"facultyDepartmentBatch1"}
					value={facultyDepartmentBatch}
					required
				/>

				<FormInput
					onChange={onChange}
					text={"E-mail*"}
					name="email1"
					value={email}
					type={"email"}
					required
				/>
			</div>

			<div className="mt-3 d-flex flex-lg-row flex-column">
				<div className="d-flex flex-column w-lg-50 me-lg-5 me-0 w-100">
					<FormInput
						onChange={onChange}
						text={"University / Institute*"}
						name={"univName1"}
						required
						value={univName}
					/>
					<div className="mt-lg-3">
						<FormInput
							onChange={onChange}
							text={"Gender*"}
							placeholder="Male / Female"
							name="gender1"
							value={gender}
							required
						/>
					</div>

					<div className="mt-lg-3">
						<FormInput
							onChange={onChange}
							text={"Place, Date of Birth*"}
							name={"placeDob1"}
							placeholder="Jakarta, 04-12-2000"
							required
							value={placeDOB}
						/>
					</div>
				</div>

				<div className="d-flex flex-column w-lg-50 w-100 mt-lg-0 mt-3">
					<FileInput
						setFile={() => {}}
						file={null}
						accept="image/png, image/jpeg, image/jpg"
						text={"3x4 Photo (Formal)*"}
					/>
					<div className="mt-2">
						<FileInput
							setFile={() => {}}
							file={null}
							accept="image/png, image/jpeg, image/jpg"
							text={"Student ID*"}
						/>
					</div>
				</div>
			</div>
		</>
	);
};

const SecondMember = ({ onChange, details }) => {
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
					text={"Full Name"}
					name={"fullName2"}
					required
					value={fullName}
				/>

				<FormInput
					onChange={onChange}
					text={"Place, Date of Birth"}
					name={"placeDob2"}
					placeholder="Jakarta, 04-12-2000"
					required
					value={placeDOB}
				/>
			</div>

			<div className="d-flex flex-lg-row flex-md-row flex-column mt-3">
				<FormInput
					onChange={onChange}
					text={"Faculty / Department / Batch"}
					name={"facultyDepartmentBatch2"}
					value={facultyDepartmentBatch}
					required
				/>

				<FormInput
					onChange={onChange}
					text={"Phone Number"}
					name={"phoneNr2"}
					value={phoneNr}
					required
				/>
			</div>

			<div className="d-flex flex-lg-row flex-md-row flex-column mt-3">
				<FormInput
					onChange={onChange}
					text={"University / Institute"}
					name={"univName2"}
					required
					value={univName}
				/>
				<FormInput
					onChange={onChange}
					text={"Line ID"}
					name="lineId2"
					value={lineId}
				/>
			</div>

			<div className="d-flex flex-lg-row flex-md-row flex-column mt-3">
				<FormInput
					onChange={onChange}
					text={"Gender"}
					placeholder="Male / Female"
					name="gender2"
					value={gender}
					required
				/>
				<FormInput
					onChange={onChange}
					text={"E-mail"}
					name="email2"
					value={email}
					type={"email"}
					required
				/>
			</div>

			<div className="d-flex flex-lg-row flex-column mt-3">
				<FileInput
					setFile={() => {}}
					file={null}
					accept="image/png, image/jpeg, image/jpg"
					text={"3x4 Photo (Formal)*"}
				/>
				<div className="ms-lg-5 mt-lg-0 mt-3">
					<FileInput
						setFile={() => {}}
						file={null}
						accept="image/png, image/jpeg, image/jpg"
						text={"Student ID*"}
					/>
				</div>
			</div>
		</>
	);
};

const ThirdMember = ({ onChange, details }) => {
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
					text={"Full Name"}
					name={"fullName3"}
					required
					value={fullName}
				/>

				<FormInput
					onChange={onChange}
					text={"Place, Date of Birth"}
					name={"placeDob3"}
					placeholder="Jakarta, 04-12-2000"
					required
					value={placeDOB}
				/>
			</div>

			<div className="d-flex flex-lg-row flex-md-row flex-column mt-3">
				<FormInput
					onChange={onChange}
					text={"Faculty / Department / Batch"}
					name={"facultyDepartmentBatch3"}
					value={facultyDepartmentBatch}
					required
				/>

				<FormInput
					onChange={onChange}
					text={"Phone Number"}
					name={"phoneNr3"}
					value={phoneNr}
					required
				/>
			</div>

			<div className="d-flex flex-lg-row flex-md-row flex-column mt-3">
				<FormInput
					onChange={onChange}
					text={"University / Institute"}
					name={"univName3"}
					required
					value={univName}
				/>
				<FormInput
					onChange={onChange}
					text={"Line ID"}
					name={"lineId3"}
					value={lineId}
				/>
			</div>

			<div className="d-flex flex-lg-row flex-md-row flex-column mt-3">
				<FormInput
					onChange={onChange}
					text={"Gender"}
					placeholder="Male / Female"
					name={"gender3"}
					value={gender}
					required
				/>
				<FormInput
					onChange={onChange}
					text={"E-mail"}
					name={"email3"}
					value={email}
					type={"email"}
					required
				/>
			</div>

			<div className="d-flex flex-lg-row flex-column mt-3">
				<FileInput
					setFile={() => {}}
					file={null}
					accept="image/png, image/jpeg, image/jpg"
					text={"3x4 Photo (Formal)*"}
				/>
				<div className="ms-lg-5 mt-lg-0 mt-3">
					<FileInput
						setFile={() => {}}
						file={null}
						accept="image/png, image/jpeg, image/jpg"
						text={"Student ID*"}
					/>
				</div>
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
				<BlueContainer className="d-flex flex-column bg-secondary">
					<OuterContainer className={`bg-cream align-items-center`}>
						<Header className="mb-lg-5 mb-3 text-center">
							DIPONEGORO BUSINESS CASE COMPETITION REGISTRATION
						</Header>

						<Container>
							<FormContainer>
								<Subheader className="mb-4 text-danger">Teams Leader</Subheader>
								<FirstMember onChange={onChange} details={details} />
								<Subheader className="mb-4 text-danger">2nd Member</Subheader>
								<SecondMember onChange={onChange} details={details} />
								<Subheader className="text-danger my-4">3rd Member</Subheader>
								<ThirdMember onChange={onChange} details={details} />
							</FormContainer>
						</Container>
					</OuterContainer>

					<PaymentSection />
				</BlueContainer>
			)}
		</>
	);
};

export default CoachingSession;
