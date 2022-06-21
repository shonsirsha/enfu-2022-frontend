import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import FormInput from "components/FormInput";

import { mediaBreakpoint } from "utils/mediaBreakpoints";
import MyButton from "components/Buttons/MyButton";
import Select from "components/FormInput/Select";
import SuccessSemnas from "components/Success/SuccessSemnas";

import { validEmail, whitespace } from "utils/validations";
import FileInputSemnas from "components/FormInput/FileInputSemnas";
import Image from "next/image";
import debounce from "utils/debounce";

const OuterContainer = styled.div`
	min-height: 100vh;
	display: flex;
	padding-top: 24px;

	& .form-control {
		background: #88ccf9;
		border: none;
		padding: 10px 16px;
		border-radius: 24px;
		max-width: 480px;
		text-align: center;
	}

	& .smallInput {
		max-width: 320px;
		font-size: 24px;
		border-radius: 32px;
	}

	& .referral .form-control {
		background: #feb01c;
	}

	& .fileInputBtn {
		max-width: 480px;
	}
	& textarea:focus,
	& input:focus,
	& select:focus {
		outline: none !important;
		box-shadow: none;
	}

	& .form > div > p {
		text-align: center;
		margin-bottom: 8px;
	}

	& select {
		border-radius: 16px;
		max-width: 480px;
		background: #88ccf9;
		text-align: center;
		padding: 8px;
	}

	@media ${mediaBreakpoint.down.md} {
		min-height: 100vh;
	}
`;

const InnerContainer = styled.div`
	border-radius: 240px;
	border-bottom-right-radius: 0;
	border-bottom-left-radius: 0;
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

const BackButton = styled(SubmitButton)`
	background: #000;
	border: none;

	&:hover,
	&:focus {
		background: #353535;
	}
`;

const Subheader = styled.p`
	font-size: 32px;
	margin: 0;
	font-weight: 800;
`;

const PaymentMethodContainer = styled.div`
	display: flex;
	padding: 8px 32px;
	border-radius: 24px;
	flex-direction: column;
	align-items: center;
	min-width: 315px;
	border: 12px solid #88ccf9;
`;

const PaymentText = styled.div`
	font-size: 21px;
	font-weight: 300;
`;

const NoticeText = styled.p`
	font-family: Poppins;
	font-size: 16px;
	font-weight: 500;
	font-style: italic;
`;

const PaymentMethod = ({
	imgSrc,
	atasNama,
	accountNumber,
	width = 240,
	height = 84,
	className,
}) => (
	<PaymentMethodContainer className={className}>
		<Image src={imgSrc} alt="Logo" width={width} height={height} />
		<PaymentText className="mt-4">{atasNama}</PaymentText>
		<PaymentText className="mt-1">{accountNumber}</PaymentText>
	</PaymentMethodContainer>
);

const PaymentSection = ({
	price,
	buktiTrfSetterGetter,
	onChange,
	referralCodeError = false,
}) => {
	const { buktiTrf, setBuktiTrf } = buktiTrfSetterGetter;

	return (
		<Container className="d-flex flex-column align-items-center">
			<Header className="mt-md-2 mb-md-4 mt-1 mb-3 text-center">PAYMENT</Header>

			<div className="d-flex align-items-center flex-column w-100 form">
				<Subheader className="text-secondary">YOU HAVE TO PAY</Subheader>
				<FormInput
					noMargin
					small
					readOnly
					className="align-items-center"
					value={price}
				/>
			</div>

			<div className="d-flex align-items-center flex-column w-100 form mt-5 referral">
				<Subheader className="text-orange">REFERRAL CODE</Subheader>
				<FormInput
					noMargin
					small
					name="referralCode"
					className="align-items-center"
					// value={referralCode}
					onChange={(e) => {
						onChange(e);
					}}
					placeholder="If Any"
				/>

				{referralCodeError && (
					<PaymentText
						style={{ fontSize: 16 }}
						className="text-danger  text-center mt-3"
					>
						Referral code is invalid! 😔
					</PaymentText>
				)}
			</div>

			<div className="d-flex align-items-center flex-lg-row flex-column w-100 form mt-5 align-items-center justify-content-center mb-5">
				<PaymentMethod
					imgSrc={"/assets/dana_logo.png"}
					atasNama="A.n xxxx"
					accountNumber="08xxxx"
				/>
				<PaymentMethod
					imgSrc={"/assets/bri_logo.png"}
					width={123}
					height={93}
					atasNama="A.n xxxx"
					className="mx-lg-5 my-lg-0 my-3"
					accountNumber="08xxxx"
				/>
				<PaymentMethod
					width={220}
					height={84}
					imgSrc={"/assets/ovo_logo.png"}
					atasNama="A.n xxxx"
					accountNumber="08xxxx"
				/>
			</div>

			<FileInputSemnas
				text="INSERT YOUR REGISTRATION PAYMENT INVOICE HERE"
				accept={"image/png, image/jpeg, image/jpg"}
				setFile={setBuktiTrf}
				noMargin
				file={buktiTrf}
				noticeText={
					"File must be of type .jpg or .png with a maximum size of 5MB."
				}
			/>
		</Container>
	);
};

const FirstSection = ({ onChange, details, statuses, ktmSetterGetter }) => {
	const {
		fullName,

		facultyDepartmentBatch,
		email,
		dob,
		univName,
		phoneNr,
	} = details;
	const { ktm, setKTM } = ktmSetterGetter;
	return (
		<Container className="d-flex flex-column align-items-center">
			<Header className="mt-md-2 mb-md-4 mt-1 mb-3 text-center">
				REGISTER{" "}
				<span className="text-danger">
					FOR <br /> NATIONAL SEMINAR
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
					className="align-items-center "
					value={dob}
				/>

				<FileInputSemnas
					text="Upload KTM"
					accept={"image/png, image/jpeg, image/jpg"}
					setFile={setKTM}
					file={ktm}
					noticeText={
						"Only for Freshmen of Management at Diponegoro University. File must be of type .jpg or .png with a maximum size of 5MB."
					}
				/>
			</div>
		</Container>
	);
};

const NationalSeminarRegister = () => {
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
		referralCode: "",
	});
	const DEFAULT_PRICE = "150.000";
	const [loading, setLoading] = useState(false);
	const [success, setSuccess] = useState(false);
	const [price, setPrice] = useState(DEFAULT_PRICE);
	const [ktm, setKTM] = useState(null);
	const [buktiTrf, setBuktiTrf] = useState(null);
	const [referralCodeError, setReferralCodeError] = useState(false);
	const ktmSetterGetter = { ktm, setKTM };
	const buktiTrfSetterGetter = { buktiTrf, setBuktiTrf };

	const [step, setStep] = useState(0);

	const {
		fullName,
		status,
		facultyDepartmentBatch,
		email,
		dob,
		univName,
		phoneNr,
		referralCode,
	} = details;
	const onChangeReferralCode = async (e) => {
		console.log("searching for...", e.target.value);
		setDetails({ ...details, [e.target.name]: e.target.value });

		if (whitespace(e.target.value)) {
			setPrice(DEFAULT_PRICE);
		} else {
			try {
				const res = await axios({
					method: "GET",
					url: `${process.env.NEXT_PUBLIC_REST_API_URL}/referral-code/${e.target.value}`,
				});
				setPrice(res.data.result[0].priceIDR);
			} catch (e) {
				setReferralCodeError(true);
				console.log("error", e);
			}
		}
	};

	const debouncedSearch = debounce(onChangeReferralCode, 850);

	const onChange = (e) => {
		if (e.target.name === "referralCode") {
			setReferralCodeError(false);

			if (whitespace(e.target.value)) {
				setPrice(DEFAULT_PRICE);
			} else {
				debouncedSearch(e);
			}
			// setDetails({ ...details, [e.target.name]: e.target.value });
		} else {
			setDetails({ ...details, [e.target.name]: e.target.value });
		}
	};

	const handleSubmit = async () => {
		if (step === 0) {
			setStep(1);

			document.body.scrollTop = document.documentElement.scrollTop = 0;
		} else {
			if (referralCodeError) {
				alert("Please use a valid referral code! 😊");
			} else {
				if (
					!validEmail(email) ||
					whitespace(fullName) ||
					whitespace(univName) ||
					whitespace(phoneNr) ||
					whitespace(dob) ||
					!buktiTrf
				) {
					alert("Please fill in all required fields! 😊");
				} else {
					await register();
				}
			}
		}
	};

	const register = async () => {
		setLoading(true);
		try {
			let bodyFormData = new FormData();
			bodyFormData.append("fullName", fullName);
			bodyFormData.append("facultyDepartmentBatch", facultyDepartmentBatch);
			bodyFormData.append("status", status);
			bodyFormData.append("phoneNr", phoneNr);
			bodyFormData.append("univName", univName);
			bodyFormData.append("email", email);
			bodyFormData.append("dob", dob);
			bodyFormData.append("referralCode", referralCode);

			if (ktm) {
				bodyFormData.append("ktm", ktm);
			}
			bodyFormData.append("buktiTrf", buktiTrf);

			await axios({
				method: "post",
				url: `${process.env.NEXT_PUBLIC_REST_API_URL}/seminar-nasional`,
				headers: { "Content-Type": "multipart/form-data" },
				data: bodyFormData,
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

	return (
		<>
			{success ? (
				<SuccessSemnas />
			) : (
				<OuterContainer className="bg-secondary">
					<InnerContainer className="bg-cream d-flex justify-content-center shadow flex-column align-items-center">
						{step === 0 ? (
							<FirstSection
								onChange={onChange}
								details={details}
								statuses={statuses}
								ktmSetterGetter={ktmSetterGetter}
							/>
						) : (
							<PaymentSection
								price={price}
								buktiTrfSetterGetter={buktiTrfSetterGetter}
								setDetails={setDetails}
								onChange={onChange}
								referralCodeError={referralCodeError}
							/>
						)}

						{loading ? (
							<NoticeText className="mb-4">Registering...</NoticeText>
						) : (
							<>
								<div className="d-flex mb-3 flex-lg-row flex-column mt-5 ">
									{step === 1 && (
										<BackButton
											onClick={() => {
												setStep(0);
											}}
											textColor="cream"
											className="me-lg-4 mb-lg-0 mb-4"
										>
											<b>
												<i>BACK</i>
											</b>
										</BackButton>
									)}
									<SubmitButton
										onClick={handleSubmit}
										variant="danger"
										textColor="cream"
									>
										<b>
											<i>{step === 0 ? `NEXT` : `SUBMIT`}</i>
										</b>
									</SubmitButton>
								</div>
							</>
						)}
					</InnerContainer>
				</OuterContainer>
			)}
		</>
	);
};

export async function getStaticProps() {
	const res = await fetch(`${process.env.NEXT_PUBLIC_REST_API_URL}/config`);
	const regist_semnas_open = (await res.json()).result[0].regist_semnas_open;

	// if (!regist_semnas_open) {
	// 	return {
	// 		redirect: {
	// 			destination: "/national-seminar/register",
	// 			permanent: false,
	// 		},
	// 	};
	// }
	return {
		props: {},
		revalidate: 1,
	};
}

export default NationalSeminarRegister;
