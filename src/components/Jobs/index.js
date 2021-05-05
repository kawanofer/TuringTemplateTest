import React, { useState } from "react";
import { FaChevronRight } from "react-icons/fa";

import * as S from "./styles";

export default function Jobs() {
	const [data, setData] = useState([
		{
			jobTitle: "Junior Java Developer",
			company: "PickSaaS",
			country: "Wrclaw, Polska",
			published: "2 hours ago",
			description:
				"I am currently looking for a Java Developer. Project for Public Sector Location: Wrocław (during the pandemic remote work)$ up to PLN 550 net / MD B2B",
		},
		{
			jobTitle: "Junior Project Manager",
			company: "Frontkom",
			country: "Lublin, Polska",
			published: "3 hours ago",
			description:
				"Join us in the Lublin office to build innovative long-term projects. Exciting international clients and partners and a work environment focused on learning and growth awaits you!",
		},
		{
			jobTitle: "Junior Project Manager",
			company: "Frontkom",
			country: "Lublin, Polksa",
			published: "1 hours ago",
			description:
				"I am currently looking for a Java Developer. Project for Public Sector Location: Wrocław (during the pandemic remote work) $ up to PLN 550 net / MD B2B",
		},
	]);
	//
	return (
		<S.Container>
			<div className="cardBoxTitle">
				<div className="title">Newest Job Offers</div>
				<div className="allJobs">View all jobs offers ></div>
			</div>
			<S.CardWrapper>
				{data.map((item) => {
					return (
						<div className="card">
							<div className="line1">
								<div className="cardTitle">{item.jobTitle}</div>
								<div className="cardPublish">
									{item.published}
								</div>
							</div>

							<div className="line2">
								<div className="cardCompany">
									{item.company}
								</div>
								<div className="cardCountry">
									{item.country}
								</div>
							</div>

							<div className="cardDescription">
								{item.description}
							</div>
							<div className="cardButton">
								<FaChevronRight />
							</div>
						</div>
					);
				})}
			</S.CardWrapper>
		</S.Container>
	);
}
