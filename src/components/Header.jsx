import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.svg";
import { Container } from "react-bootstrap";
const Header = () => {
	return (
		<Container>
			<header>
				<nav>
					<Link to="/">
						<img src={logo} className="logo img-fluid" alt="logo" />
					</Link>

					<ul className="nav-menu">
						<li className="nav-item">
							<Link to="/" className="nav-link">
								Features
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/" className="nav-link">
								Team
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/" className="nav-link">
								Sign In
							</Link>
						</li>
					</ul>
				</nav>
			</header>
		</Container>
	);
};

export default Header;
