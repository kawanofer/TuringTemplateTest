import styled from "styled-components";
//
export const Container = styled.div`
	width: 1640px;
	margin: 0 auto;
	margin-top: 64px;

	display: flex;
	flex-direction: column;

	.cardBoxTitle {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}

	.title {
		font-size: 48px;
		font-weight: bold;
		letter-spacing: 2px;
	}

	.allJobs {
		font-size: 18px;
		text-align: right;
		color: #276ffb;
		font-weight: bold;
		cursor: pointer;
	}
`;

export const CardWrapper = styled.div`
	margin-top: 32px;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;

	.card {
		width: 492px;
		height: 217px;
		margin-right: 50px;
		position: relative;
	}

	.card:not(:first-child):before {
		content: "";
		display: block;
		height: 100%;
		left: -2em;
		position: absolute;
		border: 1px solid #aaaaaa;
	}

	.line1 {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.line2 {
		display: flex;
		align-items: center;
		justify-content: flex-start;
		padding: 8px 0 32px 0;
	}

	.cardTitle {
		color: #276ffb;
		font-size: 24px;
		font-weight: bold;
	}
	.cardPublish {
		font-size: 18px;
		opacity: 0.6;
	}

	.cardCompany {
		font-size: 20px;
		opacity: 0.6;
		font-weight: bold;
		margin-right: 16px;
		color: #141414;
	}
	.cardCountry {
		font-size: 20px;
		opacity: 0.6;
	}

	.cardDescription {
		font-size: 20px;
		opacity: 0.6;
	}

	.cardButton {
		position: absolute;
		width: 36px;
		height: 36px;
		bottom: 0;
		right: 0;
		text-align: center;
		cursor: pointer;
		color: #ffffff;
		font-size: 15px;
		padding-top: 8px;

		background: transparent linear-gradient(90deg, #266efd 0%, #3876f1 100%)
			0% 0% no-repeat padding-box;
		box-shadow: 0px 3px 17px #3876f194;
		border-radius: 5px;
	}
`;
