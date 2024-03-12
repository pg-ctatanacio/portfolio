import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import tictactoe from "../../Assets/Projects/tictactoe.png";

function Projects() {
	return (
		<Container fluid className="project-section">
			<Particle />
			<Container>
				<h1 className="project-heading">
					My Recent <strong className="purple">Works </strong>
				</h1>
				<p style={{ color: "white" }}>Here are a few projects I've worked on recently.</p>
				<Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={tictactoe}
							isBlog={false}
							title="TicTacToe Extreme"
							description="An extreme mode of tic-tac-toe that is built with React and Doodle.css."
							ghLink="https://github.com/pg-ctatanacio/tic-tac-toe"
							demoLink="https://pg-ctatanacio.github.io/tic-tac-toe/"
						/>
					</Col>

					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={bitsOfCode}
							isBlog={false}
							title="PGMall"
							description="An e-commerce order management system was built with the purpose of managing orders from different e-commerce platforms. Together with a mobile app, it allows operations to flow as smoothly and accurately as possible. It also
							comes with reports for backtracking and auditing transactions."
						/>
					</Col>

					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={editor}
							isBlog={false}
							title="PCFPro v2"
							description="A simple invoice tracking system to know the current department handling the invoice as well as monitoring the timing of the invoice process per department."
						/>
					</Col>

					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={suicide}
							isBlog={false}
							title="Annual Inventory App"
							description="Retail businesses need to align their actual stocks with the inventory for accuracy of data. We developed an app to replace the paper work and manual encoding after counting stocks with direct encoding through the app."
						/>
					</Col>

					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={leaf}
							isBlog={false}
							title="PG Contact Tracing"
							description="As the pandemic emerged, our health government required retail businesses and other establishments to provide a contact tracing form to help break the chains of transmission of COVID through the rapid identification of persons exposed to infected persons.s"
						/>
					</Col>
				</Row>
			</Container>
		</Container>
	);
}

export default Projects;
