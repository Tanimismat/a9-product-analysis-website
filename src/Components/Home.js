import React from "react";
import { Link } from "react-router-dom";
import ThreeReviews from "./ThreeReviews";
import image1 from "../images/acer-swift.png";

const Home = () => {
	return (
		<div className="px-3">
			<div className="d-flex align-items-center justify-content-center">
				<div className="col-md-7">
					<h2 className="brand">
						{" "}
						<span className="fst-italic">acer</span>{" "}
						<span className="product-name">Swift X</span>
					</h2>
					<p className="text-secondary">
						Unleash the Swift X on your next project. With extreme performance
						condensed within a thin and light metal chassis, creation becomes
						portable, and so do you. Featuring thermal solutions and a display
						that’s made for makers.
					</p>
					<button className="button ">Live Demo</button>
				</div>
				<div className="col-md-4">
					<img style={{ width: "350px" }} src={image1} alt="Product" />
				</div>
			</div>
			<div>
				<h5 className="my-5">Customer Reviews (3)</h5>
				<ThreeReviews></ThreeReviews>

				<button className="seeAll-button">
					<Link className="seeAll-btn my-5" to="/reviews">
						See All Reviews
					</Link>
				</button>
			</div>
		</div>
	);
};

export default Home;
