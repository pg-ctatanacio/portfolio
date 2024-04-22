import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiWindows } from "react-icons/di";
import { SiVisualstudiocode, SiPostman } from "react-icons/si";
import StackCard from "./StackCard";

function Toolstack() {
	return (
		<Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
			<StackCard icon={<DiWindows />} stackName="Windows" />
			<StackCard icon={<SiVisualstudiocode />} stackName="VS Code" />
			<StackCard icon={<SiPostman />} stackName="Postman" />
		</Row>
	);
}

export default Toolstack;
