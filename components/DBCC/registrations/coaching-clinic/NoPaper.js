import React from "react";
import FileInput from "components/FormInput/FileInput";
import BlueButton from "components/Buttons/BlueButton";
import PaymentMethod from "components/DBCC/PaymentMethods";
import styled from "styled-components";
import DanaLogo from "public/assets/dana_logo.png";
import PaypalLogo from "public/assets/paypal_logo.png";
import GopayLogo from "public/assets/gopay_logo.png";
import OVOLogo from "public/assets/ovo_logo.png";

const NoticeText = styled.p`
	font-family: Poppins;
	font-size: 16px;
	font-weight: 500;
	font-style: italic;
`;

const PriceText = styled.p`
	font-weight: bold;
	font-size: 24px;
	line-height: 24px;
`;

const Triangle = styled.div`
	width: 0;
	height: 0;
	border-top: 10px solid transparent;
	border-bottom: 10px solid transparent;

	border-left: 16px solid #ff5a24;
`;

const NoPaper = ({
	handleNext,
	setBuktiTrfFile,
	buktiTrfFile,
	handleSubmit,
	loading,
}) => {
	return (
		<div className="d-flex flex-column">
			<NoticeText className="mb-4">
				Please complete the payment through one of these options below!
			</NoticeText>
			<div className="d-flex mb-4 flex-wrap justify-content-center">
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
			<div className="mt-3 d-flex w-100 justify-content-lg-between justify-content-center align-items-center flex-lg-row flex-md-row flex-column">
				<FileInput
					setFile={setBuktiTrfFile}
					file={buktiTrfFile}
					accept="image/png, image/jpeg, image/jpg"
					text={"Upload File (payment slip)*"}
				/>
				<div className="d-flex me-lg-5 me-0 align-items-center mt-lg-0 mt-3">
					<Triangle className="me-3" />
					<PriceText>IDR 35K / 3 USD</PriceText>
				</div>
			</div>

			<div className="d-flex ms-lg-auto ms-md-auto ms-0 me-lg-5 me-md-4 me-0 mt-5 flex-lg-row flex-md-row flex-column">
				{loading ? (
					<NoticeText className="mb-4">Registering...</NoticeText>
				) : (
					<>
						<BlueButton
							onClick={() => {
								handleNext(-1);
							}}
							className="me-lg-3 me-md-3 me-0 mb-lg-0 mb-md-0 mb-3 shadow"
						>
							BACK
						</BlueButton>
						<BlueButton
							className="shadow"
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
export default NoPaper;
