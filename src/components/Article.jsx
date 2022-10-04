import React from "react";
import illustration1 from "../images/illustration-1.svg";
import illustration2 from "../images/illustration-2.svg";
import avatar from "../images/avatar-testimonial.jpg";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaArrowCircleRight } from "react-icons/fa";
import { FaQuoteLeft } from "react-icons/fa";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
const Article = () => {
	return (
		<article>
			<section className="section-1">
				<Container fluid="md">
					<Row>
						<Col md className="m-auto">
							<div className="content-box">
								<h2>
									All your files in one secure location,
									accessible anywhere.
								</h2>
								<p>
									Fylo stores your most important files in one
									secure location, Access them wherever you
									need, share and collaborate with friends,
									family and co-workers.
								</p>
								<form action="#">
									<Row>
										<Col md>
											<input
												className="form-control"
												type="email"
												name="email"
												placeholder="example@email.com"
											/>
										</Col>
										<Col md>
											<Button className="free-btn">
												Get started
											</Button>
										</Col>
									</Row>
								</form>
							</div>
						</Col>
						<Col md className="image-container">
							<img
								src={illustration1}
								className="img-fluid"
								alt=""
							/>
						</Col>
					</Row>
				</Container>
			</section>
			<section className="section-2">
				<Container fluid="md">
					<Row>
						<Col md>
							<div className="content-box">
								<h1>Stay productive, wherever you are</h1>
								<p>
									Never let location be an issue when
									accessing your files. Fylo has you covered
									for all your file storage needs.
								</p>
								<p>
									Securely share files and folders with
									friends, family and colleagues for live
									collaboration. No email attachments
									required!
								</p>
								<Link to="/" className="work">
									See how fylo works{" "}
									<FaArrowCircleRight className="ms-2" />
								</Link>
								<Card className="card-box">
									<Card.Body>
										<p>
											<FaQuoteLeft /> <br />
											Fylo has improved our team
											productivity by an order of
											magnitude. Since making the switch
											our team has become well-oiled
											collaboration machine.
										</p>
										<div className="avatar">
											<img
												style={{
													borderRadius: "5rem",
													height: "50px",
												}}
												src={avatar}
												className="img-fluid"
												alt=""
											/>
											<div>
												<p>
													Kyle Burton{" "}
													<span>
														founder & ceo, huddle
													</span>
												</p>
											</div>
										</div>
									</Card.Body>
								</Card>
							</div>
						</Col>
						<Col md className="image-container">
							<img
								src={illustration2}
								className="img-fluid"
								alt=""
							/>
						</Col>
					</Row>
				</Container>
			</section>
			<section className="section-3">
				<Container fluid="md">
					<Row>
						<Col md>
							<div className="content-box">
								<h1>Get early access today</h1>
								<p>
									It only takes a minute to sign up and our
									free starter tier is extremely generous. If
									you have any questions, our support team
									would be happy to help you.
								</p>
							</div>
						</Col>
						<Col md>
							<form action="#">
								<input
									className="form-control"
									type="email"
									name="email"
									placeholder="example@email.com"
								/>
								<Button
									variant="primary"
									className="free-btn mt-4"
								>
									get started for free
								</Button>
							</form>
						</Col>
					</Row>
				</Container>
			</section>
		</article>
	);
};

export default Article;
