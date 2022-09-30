import React from "react";
import { FaLayerGroup } from "react-icons/fa";
import { BiPhoneCall } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
const Footer = () => {
	return (
		<footer>
			<h1>
				<FaLayerGroup /> Fylo
			</h1>
			<nav className="footer-nav">
				<ul>
					<li>
						<BiPhoneCall /> Phone: +1-543-123-4567
					</li>
					<li>
						<MdEmail /> example@fylo.com
					</li>
				</ul>
				<ul>
					<li className="nav-item">
						<Link to="/about-us" className="nav-link">
							About Us
						</Link>
					</li>
					<li>
						<Link to="/jobs" className="nav-link">
							Jobs
						</Link>
					</li>
					<li>
						<Link to="/press" className="nav-link">
							Press
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/blog">Blog</Link>
					</li>
				</ul>
				<ul>
					<li className="nav-item">
						<Link to="/contact-us" className="nav-link">
							Contact Us
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/terms" className="nav-link">
							Terms
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/privacy" className="nav-link">
							Privacy
						</Link>
					</li>
				</ul>
				<ul className="social-icons">
					<li>
						<Link to="/facebook">
							<FaFacebookF />
						</Link>
					</li>
					<li>
						<Link to="/twitter">
							<FaTwitter />
						</Link>
					</li>
					<li>
						<Link to="/instagram">
							<FaInstagram />
						</Link>
					</li>
				</ul>
			</nav>
		</footer>
	);
};

export default Footer;
