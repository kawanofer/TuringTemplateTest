import styled from "styled-components";
import banner from "../../assets/image/banner.png";
//
export const Container = styled.div`
	position: relative;
	color: #ffffff;

	.bannerInfo {
		position: absolute;
		top: 205px;
		left: 140px;

		display: flex;
		flex-direction: column;	
	}

	.bannerTitle {
		font-size: 48px;
		letter-spacing: 3px;
		color: #ffffff;
		font-weight: 600;
	}

	.bannerSubtitle {
		font-size: 20px;
		letter-spacing: 2px;
		color: #ffffff;
		padding: 16px 0 35px 0;
	}

	.bannerButton {
		width: 220px;
		height: 52px;
		top: 0;
		color: #ffffff;
		font-size: 18px;
		text-align: center;
		font: normal normal medium 20px/29px Gordita;
		letter-spacing: 0px;
		//	padding: 0 32px;
		background: transparent linear-gradient(90deg, #266efd 0%, #3876f1 100%)
			0% 0% no-repeat padding-box;
		box-shadow: 0px 3px 17px #3876f194;
		border-radius: 5px;
		border: none;
	}

	.bannerImg {
		width: 1920px;
		height: 540px;
		background: url(${banner});
		background-position: top;
		background-size: cover;
		background-repeat: no-repeat, repeat;
	}
`;
