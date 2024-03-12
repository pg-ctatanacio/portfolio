import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
	let date = new Date();
	let year = date.getFullYear();
	return (
		<Container fluid className="footer">
			<Container>
				<Row>
					<Col md="8" className="footer-copywright">
						<h3>Copyright © {year} CA</h3>
					</Col>
					<Col md="4" className="footer-body" style={{ paddingRight: 0 }}>
						<ul className="footer-icons">
							<li className="social-icons">
								<a
									href="https://github.com/pg-ctatanacio"
									style={{ color: "white" }}
									target="_blank"
									rel="noopener noreferrer"
								>
									<AiFillGithub />
								</a>
							</li>
							<li className="social-icons">
								<a
									href="https://www.linkedin.com/in/cris-atanacio-577230150/"
									style={{ color: "white" }}
									target="_blank"
									rel="noopener noreferrer"
								>
									<FaLinkedinIn />
								</a>
							</li>
						</ul>
					</Col>
				</Row>
			</Container>
		</Container>
	);
}

export default Footer;
