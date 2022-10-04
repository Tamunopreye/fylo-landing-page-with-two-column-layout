import React from "react";
import { FaLayerGroup } from "react-icons/fa";
import { BiPhoneCall } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { Container, Row, Col } from "react-bootstrap";
const Footer = () => {
	return (
		<footer>
			<Container fluid="md">
				<h1>
					<FaLayerGroup /> Fylo
				</h1>
				<Row className="footer">
					<Col md className="small-container">
						<div className="phone">
							<BiPhoneCall className="icon" /> Phone:
							+1-543-123-4567
						</div>
						<div className="email">
							<MdEmail className="icon" /> example@fylo.com
						</div>
					</Col>
					<Col md className="small-container">
						<div>
							<Link to="/about-us" className="nav-link">
								About Us
							</Link>
						</div>
						<div>
							<Link to="/jobs" className="nav-link">
								Jobs
							</Link>
						</div>
						<div>
							<Link to="/press" className="nav-link">
								Press
							</Link>
						</div>
						<div>
							<Link to="/blog" className="nav-link">
								Blog
							</Link>
						</div>
					</Col>
					<Col md className="small-container">
						<div>
							<Link to="/contact-us" className="nav-link">
								Contact Us
							</Link>
						</div>
						<div>
							<Link to="/terms" className="nav-link">
								Terms
							</Link>
						</div>
						<div>
							<Link to="/privacy" className="nav-link">
								Privacy
							</Link>
						</div>
					</Col>
					<Col md className="social-icons">
						<div>
							<Link className="nav-link" to="/facebook">
								<FaFacebookF />
							</Link>
						</div>
						<div>
							<Link className="nav-link" to="/twitter">
								<FaTwitter />
							</Link>
						</div>
						<div>
							<Link className="nav-link" to="/instagram">
								<FaInstagram />
							</Link>
						</div>
					</Col>
				</Row>
			</Container>
		</footer>
	);
};

export default Footer;
