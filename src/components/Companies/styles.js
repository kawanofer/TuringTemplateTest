import styled from "styled-components";
//
export const Container = styled.div`
	width: 1640px;
	margin: 0 auto;
	margin-top: 64px;

	display: flex;
	flex-direction: column;

	.title {
		font-size: 48px;
		font-weight: bold;
		letter-spacing: 0px;
	}
	
	/*  */

	i {
        border: 2px solid #b9b9b9;
		font-size: 25px;
		text-align: center;
		border-radius: 50%;
		display: inline-block;
		padding: 30px;
	}

	img {
		display: block;
	}

	/*  */
	.companyBox {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		margin-top: 32px;
	}

	.companyWrapper{
		text-align: center;
	}

	.companyTitle{
		font-size: 24px;
		text-align: center;
		font-weight: bold;
		margin-top: 10px;
	}
`;
