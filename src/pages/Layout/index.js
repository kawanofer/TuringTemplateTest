import React from "react";
// components
import Hero from "../../components/Hero";
import Jobs from "../../components/Jobs";
import Companies from "../../components/Companies";

import * as S from "./styles";

export default function Layout() {
	//
	return (
		<S.Container>
			<Hero />
			<Jobs />
			<Companies />
		</S.Container>
	);
}
