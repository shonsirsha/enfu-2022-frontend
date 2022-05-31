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
	padding-bottom: 32px;
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

const PaymentSection = ({ onSubmit, setBuktiTrf, buktiTrf }) => {
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
						setFile={setBuktiTrf}
						file={buktiTrf}
						accept="image/png, image/jpeg, image/jpg"
						text={"Proof of Payment*"}
					/>
				</div>

				<BlueButton className="shadow mt-5" onClick={onSubmit}>
					SUBMIT
				</BlueButton>
			</InnerPaymentSectionContainer>
		</OuterPaymentSectionContainer>
	);
};

const FirstMember = ({
	onChange,
	details,
	setStudentId1,
	setThreeByFour1,
	threeByFour1,
	studentId1,
}) => {
	const {
		teamName,
		fullName1,
		placeDob1,
		phoneNr1,
		facultyDepartmentBatch1,
		univName1,
		lineId1,
		gender1,
		email1,
	} = details;

	return (
		<>
			<div className="d-flex flex-lg-row flex-md-row flex-column">
				<FormInput
					onChange={onChange}
					text={"Team's Name*"}
					name={"teamName"}
					value={teamName}
					required
				/>
				<FormInput
					onChange={onChange}
					text={"Phone Number*"}
					name={"phoneNr1"}
					value={phoneNr1}
					required
				/>
			</div>
			<div className="d-flex flex-lg-row flex-md-row flex-column mt-3">
				<FormInput
					onChange={onChange}
					text={"Full Name*"}
					name={"fullName1"}
					required
					value={fullName1}
				/>

				<FormInput
					onChange={onChange}
					text={"Line ID"}
					name="lineId1"
					value={lineId1}
				/>
			</div>

			<div className="d-flex flex-lg-row flex-md-row flex-column mt-3">
				<FormInput
					onChange={onChange}
					text={"Faculty / Department / Batch*"}
					name={"facultyDepartmentBatch1"}
					value={facultyDepartmentBatch1}
					required
				/>

				<FormInput
					onChange={onChange}
					text={"E-mail*"}
					name="email1"
					value={email1}
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
						value={univName1}
					/>
					<div className="mt-lg-3">
						<FormInput
							onChange={onChange}
							text={"Gender*"}
							placeholder="Male / Female"
							name="gender1"
							value={gender1}
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
							value={placeDob1}
						/>
					</div>
				</div>

				<div className="d-flex flex-column w-lg-50 w-100 mt-lg-0 mt-3">
					<FileInput
						setFile={setThreeByFour1}
						file={threeByFour1}
						accept="image/png, image/jpeg, image/jpg"
						text={"3x4 Photo (Formal)*"}
					/>
					<div className="mt-2">
						<FileInput
							setFile={setStudentId1}
							file={studentId1}
							accept="image/png, image/jpeg, image/jpg"
							text={"Student ID*"}
						/>
					</div>
				</div>
			</div>
		</>
	);
};

const SecondMember = ({
	onChange,
	details,
	setStudentId2,
	setThreeByFour2,
	threeByFour2,
	studentId2,
}) => {
	const {
		fullName2,
		placeDob2,
		phoneNr2,
		facultyDepartmentBatch2,
		univName2,
		lineId2,
		gender2,
		email2,
	} = details;

	return (
		<>
			<div className="d-flex flex-lg-row flex-md-row flex-column">
				<FormInput
					onChange={onChange}
					text={"Full Name"}
					name={"fullName2"}
					required
					value={fullName2}
				/>

				<FormInput
					onChange={onChange}
					text={"Place, Date of Birth"}
					name={"placeDob2"}
					placeholder="Jakarta, 04-12-2000"
					required
					value={placeDob2}
				/>
			</div>

			<div className="d-flex flex-lg-row flex-md-row flex-column mt-3">
				<FormInput
					onChange={onChange}
					text={"Faculty / Department / Batch"}
					name={"facultyDepartmentBatch2"}
					value={facultyDepartmentBatch2}
					required
				/>

				<FormInput
					onChange={onChange}
					text={"Phone Number"}
					name={"phoneNr2"}
					value={phoneNr2}
					required
				/>
			</div>

			<div className="d-flex flex-lg-row flex-md-row flex-column mt-3">
				<FormInput
					onChange={onChange}
					text={"University / Institute"}
					name={"univName2"}
					required
					value={univName2}
				/>
				<FormInput
					onChange={onChange}
					text={"Line ID"}
					name="lineId2"
					value={lineId2}
				/>
			</div>

			<div className="d-flex flex-lg-row flex-md-row flex-column mt-3">
				<FormInput
					onChange={onChange}
					text={"Gender"}
					placeholder="Male / Female"
					name="gender2"
					value={gender2}
					required
				/>
				<FormInput
					onChange={onChange}
					text={"E-mail"}
					name="email2"
					value={email2}
					type={"email"}
					required
				/>
			</div>

			<div className="d-flex flex-lg-row flex-column mt-3">
				<FileInput
					setFile={setThreeByFour2}
					file={threeByFour2}
					accept="image/png, image/jpeg, image/jpg"
					text={"3x4 Photo (Formal)*"}
				/>
				<div className="ms-lg-5 mt-lg-0 mt-3">
					<FileInput
						setFile={setStudentId2}
						file={studentId2}
						accept="image/png, image/jpeg, image/jpg"
						text={"Student ID*"}
					/>
				</div>
			</div>
		</>
	);
};

const ThirdMember = ({
	onChange,
	details,
	setStudentId3,
	setThreeByFour3,
	threeByFour3,
	studentId3,
}) => {
	const {
		fullName3,
		placeDob3,
		phoneNr3,
		facultyDepartmentBatch3,
		univName3,
		lineId3,
		gender3,
		email3,
	} = details;

	return (
		<>
			<div className="d-flex flex-lg-row flex-md-row flex-column">
				<FormInput
					onChange={onChange}
					text={"Full Name"}
					name={"fullName3"}
					required
					value={fullName3}
				/>

				<FormInput
					onChange={onChange}
					text={"Place, Date of Birth"}
					name={"placeDob3"}
					placeholder="Jakarta, 04-12-2000"
					required
					value={placeDob3}
				/>
			</div>

			<div className="d-flex flex-lg-row flex-md-row flex-column mt-3">
				<FormInput
					onChange={onChange}
					text={"Faculty / Department / Batch"}
					name={"facultyDepartmentBatch3"}
					value={facultyDepartmentBatch3}
					required
				/>

				<FormInput
					onChange={onChange}
					text={"Phone Number"}
					name={"phoneNr3"}
					value={phoneNr3}
					required
				/>
			</div>

			<div className="d-flex flex-lg-row flex-md-row flex-column mt-3">
				<FormInput
					onChange={onChange}
					text={"University / Institute"}
					name={"univName3"}
					required
					value={univName3}
				/>
				<FormInput
					onChange={onChange}
					text={"Line ID"}
					name={"lineId3"}
					value={lineId3}
				/>
			</div>

			<div className="d-flex flex-lg-row flex-md-row flex-column mt-3">
				<FormInput
					onChange={onChange}
					text={"Gender"}
					placeholder="Male / Female"
					name={"gender3"}
					value={gender3}
					required
				/>
				<FormInput
					onChange={onChange}
					text={"E-mail"}
					name={"email3"}
					value={email3}
					type={"email"}
					required
				/>
			</div>

			<div className="d-flex flex-lg-row flex-column mt-3">
				<FileInput
					setFile={setThreeByFour3}
					file={threeByFour3}
					accept="image/png, image/jpeg, image/jpg"
					text={"3x4 Photo (Formal)*"}
				/>
				<div className="ms-lg-5 mt-lg-0 mt-3">
					<FileInput
						setFile={setStudentId3}
						file={studentId3}
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

	const [buktiTrf, setBuktiTrf] = useState(null);

	const [threeByFour_1, setThreeByFour_1] = useState(null);
	const [threeByFour_2, setThreeByFour_2] = useState(null);
	const [threeByFour_3, setThreeByFour_3] = useState(null);

	const [student_id_1, setStudent_id_1] = useState(null);
	const [student_id_2, setStudent_id_2] = useState(null);
	const [student_id_3, setStudent_id_3] = useState(null);

	const [detailMember1, setDetailMember1] = useState({
		teamName: "",
		phoneNr1: "",
		fullName1: "",
		lineId1: "",
		facultyDepartmentBatch1: "",
		email1: "",
		univName1: "",
		gender1: "",
		placeDob1: "",
	});

	const [detailMember2, setDetailMember2] = useState({
		phoneNr2: "",
		fullName2: "",
		lineId2: "",
		facultyDepartmentBatch2: "",
		email2: "",
		univName2: "",
		gender2: "",
		placeDob2: "",
	});

	const [detailMember3, setDetailMember3] = useState({
		phoneNr3: "",
		fullName3: "",
		lineId3: "",
		facultyDepartmentBatch3: "",
		email3: "",
		univName3: "",
		gender3: "",
		placeDob3: "",
	});

	const {
		teamName,
		phoneNr1,
		fullName1,
		lineId1,
		facultyDepartmentBatch1,
		email1,
		univName1,
		gender1,
		placeDob1,
	} = detailMember1;

	const {
		phoneNr2,
		fullName2,
		lineId2,
		facultyDepartmentBatch2,
		email2,
		univName2,
		gender2,
		placeDob2,
	} = detailMember2;

	const {
		phoneNr3,
		fullName3,
		lineId3,
		facultyDepartmentBatch3,
		email3,
		univName3,
		gender3,
		placeDob3,
	} = detailMember3;

	const onChangeMember1 = (e) => {
		setDetailMember1({ ...detailMember1, [e.target.name]: e.target.value });
	};
	const onChangeMember2 = (e) => {
		setDetailMember2({ ...detailMember2, [e.target.name]: e.target.value });
	};

	const onChangeMember3 = (e) => {
		setDetailMember3({ ...detailMember3, [e.target.name]: e.target.value });
	};

	const uploadImages = async () => {
		//TODO: DO THIS
		try {
			let bodyFormData = new FormData();

			bodyFormData.append("student_id_1", student_id_1);
			bodyFormData.append("threeByFour_1", threeByFour_1);
			bodyFormData.append("buktiTrf", buktiTrf);

			if (student_id_2) {
				bodyFormData.append("student_id_2", student_id_2);
			}
			if (student_id_3) {
				bodyFormData.append("student_id_3", student_id_3);
			}
			if (threeByFour_2) {
				bodyFormData.append("threeByFour_2", threeByFour_2);
			}
			if (threeByFour_3) {
				bodyFormData.append("threeByFour_3", threeByFour_3);
			}

			const res = await axios({
				method: "post",
				url: "http://localhost:5000/api/dbcc/images",
				headers: { "Content-Type": "multipart/form-data" },
				data: bodyFormData,
			});
			return res.data.teamId;
		} catch (e) {
			alert(
				`Oops, sorry, an error occured. 😬 Please try to re-submit your registration.\n\nIf this error keeps happening, please report it to us. Error code: ${e.response.status}`
			);
		}

		console.log(res);
	};

	const register = async (teamId) => {
		try {
			await axios({
				method: "post",
				url: "http://localhost:5000/api/dbcc",
				data: {
					teamId,
					teamName,
					phoneNr1,
					fullName1,
					lineId1,
					facultyDepartmentBatch1,
					email1,
					univName1,
					gender1,
					placeDob1,
					phoneNr2,
					fullName2,
					lineId2,
					facultyDepartmentBatch2,
					email2,
					univName2,
					gender2,
					placeDob2,
					phoneNr3,
					fullName3,
					lineId3,
					facultyDepartmentBatch3,
					email3,
					univName3,
					gender3,
					placeDob3,
				},
			});
			setSuccess(true);
		} catch (e) {
			if (
				e.response.status === 409 &&
				e.response.data.error === "email already registered"
			) {
				alert(
					`Oops, your team leader's email (${email1}) has already been registered! 😬 `
				);
			} else {
				console.log(e);
				alert(
					`Oops, sorry, an error occured. 😬 Please try to re-submit your registration.\n\nIf this error keeps happening, please report it to us. Error code: ${e.response.status}`
				);
			}
		}
	};
	const handleSubmit = async () => {
		setLoading(true);

		if (
			!validEmail(email1) ||
			whitespace(teamName) ||
			whitespace(fullName1) ||
			whitespace(univName1) ||
			whitespace(phoneNr1) ||
			whitespace(gender1) ||
			whitespace(facultyDepartmentBatch1) ||
			whitespace(placeDob1)
		) {
			alert("Please fill in all required fields! 😊");
		} else {
			if (!buktiTrf || !threeByFour_1 || !student_id_1) {
				alert(
					"Please attach all of the needed documents (payment slip, leader's 3x4 photo, and leader's student ID)! 😊"
				);
			} else {
				const teamId = await uploadImages();
				console.log(teamId);
				await register(teamId);
			}
		}
		setLoading(false);
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
								<FirstMember
									threeByFour1={threeByFour_1}
									setThreeByFour1={setThreeByFour_1}
									studentId1={student_id_1}
									setStudentId1={setStudent_id_1}
									onChange={onChangeMember1}
									details={detailMember1}
								/>
								<Subheader className="my-4 text-danger">2nd Member</Subheader>
								<SecondMember
									threeByFour2={threeByFour_2}
									setThreeByFour2={setThreeByFour_2}
									setStudentId2={setStudent_id_2}
									studentId2={student_id_2}
									onChange={onChangeMember2}
									details={detailMember2}
								/>
								<Subheader className="text-danger my-4">3rd Member</Subheader>
								<ThirdMember
									threeByFour3={threeByFour_3}
									setThreeByFour3={setThreeByFour_3}
									setStudentId3={setStudent_id_3}
									studentId3={student_id_3}
									onChange={onChangeMember3}
									details={detailMember3}
								/>
							</FormContainer>
						</Container>
					</OuterContainer>

					<PaymentSection
						onSubmit={handleSubmit}
						setBuktiTrf={setBuktiTrf}
						buktiTrf={buktiTrf}
					/>
				</BlueContainer>
			)}
		</>
	);
};

export default CoachingSession;
