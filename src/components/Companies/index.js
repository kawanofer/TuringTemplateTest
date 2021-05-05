import React, { useState } from "react";

import companyIcon from "../../assets/icon/icon-briefcase.svg";
import * as S from "./styles";

export default function Companies() {
	const [data, setData] = useState([
		{
			company: "GrandParade",
		},
		{
			company: "Seargin",
		},
		{
			company: "DEX Ventures",
		},
		{
			company: "NBC",
		},
		{
			company: "SVT SP Zoom",
		},
		{
			company: "DG Tech",
		},
		{
			company: "PickSaaS",
		},
		{
			company: "BlackRose",
		},
		{
			company: "Front",
		},
	]);
	//
	return (
		<S.Container>
			<div className="title">Featured Companies</div>

			<div className="companyBox">
				{data.map((item) => {
					return (
						<div className="companyWrapper">
							<i>
								<img src={companyIcon} alt="Company icon" />
							</i>
							<div className="companyTitle">{item.company}</div>
						</div>
					);
				})}
			</div>
		</S.Container>
	);
}
