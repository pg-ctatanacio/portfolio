import React from "react";
import { Row } from "react-bootstrap";
import { DiAndroid, DiJava } from "react-icons/di";
import { SiAndroidstudio, SiKotlin } from "react-icons/si";
import StackCard from "./StackCard";

function Familiar() {
	return (
		<Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
			<StackCard icon={<DiAndroid />} stackName="Android Native" />
			<StackCard icon={<SiAndroidstudio />} stackName="Android Studio" />
			<StackCard icon={<DiJava />} stackName="Java" />
			<StackCard icon={<SiKotlin />} stackName="Kotlin" />
		</Row>
	);
}

export default Familiar;
