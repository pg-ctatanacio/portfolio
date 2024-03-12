import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiOutlineTwitter, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
	return (
		<Container fluid className="home-about-section" id="about">
			<Container>
				<Row>
					<Col md={8} className="home-about-description">
						<h1 style={{ fontSize: "2.1em" }}>
							MORE <span className="purple"> INFORMATION </span> ABOUT ME
						</h1>
						<p className="home-about-body">
							I started my career using <b className="purple">PHP and Java</b> for creating
							websites and simple apps but currently, I'm enjoying the frontend side with{" "}
							<b className="purple">React and React Native</b>.
							<br />
							<br />
							I like playing video games to reduce stress but sometimes instead of reducing it
							adds up to my stress.
							<br />
							<br />
						</p>
					</Col>
					<Col md={4} className="myAvtar">
						<Tilt>
							<img src={myImg} className="img-fluid" alt="avatar" />
						</Tilt>
					</Col>
				</Row>
			</Container>
		</Container>
	);
}
export default Home2;
