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

const NonParticipantsOfDBCC = ({
	handleNext,
	onChange,
	details,
	handleSubmit,
	loading,
}) => {
	const { dbccTeamName, dbccCodeOfRegistration } = details;
	return (
		<div className="d-flex flex-column">
			<NoticeText className="mb-4">
				Please upload your DBCC’s registration and payment slip below!
			</NoticeText>
			<div className="d-flex mb-4 flex-wrap justify-content-center">
				<div className="me-4">
					<PaymentMethod
						src={PaypalLogo}
						w={200}
						h={84}
						alt="Paypal"
						accountNumber="@Dheasrgh"
						accountName="(a.n Dhea Reskita Saragih)"
					/>
				</div>

				<div className="me-4">
					<PaymentMethod
						src={GopayLogo}
						w={200}
						h={84}
						alt="Gopay"
						accountNumber="085161810803"
						accountName="(a.n Dhea Reskita Saragih)"
					/>
				</div>
				<div className="me-4">
					<PaymentMethod
						src={OVOLogo}
						w={200}
						h={84}
						alt="OVO"
						accountNumber="082375051837"
						accountName="(a.n Natalia Karlina Ginting)"
					/>
				</div>
				<div className="me-0">
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
			<div className="mt-3 d-flex w-100 justify-content-between align-items-center">
				<FileInput
					accept="image/png, image/jpeg, image/jpg"
					text={"Upload File (payment slip)*"}
				/>
				<div className="d-flex me-lg-5 me-0 align-items-center">
					<Triangle className="me-3" />
					<PriceText>IDR 25K/2 USD</PriceText>
				</div>
			</div>

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
export default NonParticipantsOfDBCC;
