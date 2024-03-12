import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { CiStar } from "react-icons/ci";

function AboutCard() {
	return (
		<Card className="quote-card-view">
			<Card.Body>
				<blockquote className="blockquote mb-0">
					<p style={{ textAlign: "justify" }}>
						Hi Everyone! I am <span className="purple">Cris Atanacio </span>
						from <span className="purple"> Manila, Philippines.</span>
						<br />
						I am currently employed as a full-stack developer at Puregold Price Club, Inc.
						<br />
						<br />I have completed{" "}
						<b className="purple">Bachelor of Science in Information Technology (BSIT)</b> at{" "}
						<b className="purple">City of Malabon University</b>.
						<br />
						<br />I started my career using <b className="purple">PHP and Java</b> for creating
						websites and simple apps, but currently I'm enjoying the frontend side with{" "}
						<b className="purple">React and React Native</b>.
						<br />
						<br />
						Apart from coding, some other activities that I love to do!
					</p>
					<ul>
						<li className="about-activity">
							<CiStar /> Playing Video Games
						</li>
						<li className="about-activity">
							<CiStar /> Biking & Basketball
						</li>
						<li className="about-activity">
							<CiStar /> Reading Manga/Manhwa
						</li>
					</ul>
				</blockquote>
			</Card.Body>
		</Card>
	);
}

export default AboutCard;
