import { Col } from "react-bootstrap";

function StackCard({ icon, stackName }) {
	return (
		<Col xs={4} md={2} className="tech-icons">
			<div style={{ marginBottom: "-70px" }}>{icon}</div>
			<span style={{ fontSize: 13 }}>{stackName}</span>
		</Col>
	);
}

export default StackCard;
