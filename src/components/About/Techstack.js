import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiJavascript1, DiReact, DiNodejs, DiMsqlServer } from "react-icons/di";
import { SiFirebase, SiPhp, SiMysql, SiExpress } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

function Techstack() {
	return (
		<Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
			<StackCard icon={<SiPhp />} stackName="PHP" />
			<StackCard icon={<DiJavascript1 />} stackName="Javascript" />
			<StackCard icon={<DiNodejs />} stackName="Node.js" />
			<StackCard icon={<SiExpress />} stackName="ExpressJs" />
			<StackCard icon={<DiReact />} stackName="React" />
			<StackCard icon={<TbBrandReactNative />} stackName="React Native" />
			<StackCard icon={<SiFirebase />} stackName="Firebase" />
			<StackCard icon={<DiMsqlServer />} stackName="MSSQL Server" />
			<StackCard icon={<SiMysql />} stackName="MySQL Server" />
		</Row>
	);
}

const StackCard = ({ icon, stackName }) => {
	return (
		<Col xs={4} md={2} className="tech-icons">
			<div style={{ marginBottom: "-70px" }}>{icon}</div>
			<span style={{ fontSize: 13 }}>{stackName}</span>
		</Col>
	);
};

export default Techstack;
