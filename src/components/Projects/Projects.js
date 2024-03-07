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
				<p style={{ color: "white" }}>
					Here are a few projects I've worked on recently.
				</p>
				<Row
					style={{ justifyContent: "center", paddingBottom: "10px" }}>
					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={tictactoe}
							isBlog={false}
							title="TicTacToe Extreme"
							description="A extreme mode of Tic-tac-toe that is built with React and Doodle.css."
							ghLink="https://github.com/pg-ctatanacio/tic-tac-toe"
							demoLink="https://pg-ctatanacio.github.io/tic-tac-toe/"
						/>
					</Col>

					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={bitsOfCode}
							isBlog={false}
							title="PGMall"
							description="A E-commerce order management system built on purpose of managing orders from different e-commerce platform. Together
                            with a mobile app it helps the operations to flow smooth and accurate as possible. It also 
                            comes with reports for backtracking and auditing of transactions."
						/>
					</Col>

					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={editor}
							isBlog={false}
							title="PCFPro v2"
							description="A simple invoice tracking system to know the current department handling the invoice as
                            well as monitoring the timings on how long they process the invoices."
						/>
					</Col>

					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={leaf}
							isBlog={false}
							title="PG Contact Tracing"
							description="As pandemic emerged, our health government required the retails businesses and other establishment
                            to provide a contact tracing form to help with breaking chains of transmission of Covid 
                            through the rapid identification of persons exposed to infected person."
						/>
					</Col>

					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={suicide}
							isBlog={false}
							title="Annual Inventory App"
							description="Retail businesses needs to align their actual stocks to the inventory for accuracy of data. We
                            developed an app to replaced the paper works and manual encoding after counting of inventory with 
                            direct encoding through app."
						/>
					</Col>

				</Row>
			</Container>
		</Container>
	);
}

export default Projects;
