import React from "react";
import * as S from "./styles";

export default function Banner() {
	//
	return (
		<S.Container>
			<div className="bannerImg" alt="image" />
			<div className="bannerInfo">
				<div className="bannerTitle">Juniors make IT work.</div>
				<div className="bannerSubtitle">
					Hide and invest in highly skilled juniors now.
				</div>
				<button className="bannerButton">Post Offer Now</button>
			</div>
		</S.Container>
	);
}
