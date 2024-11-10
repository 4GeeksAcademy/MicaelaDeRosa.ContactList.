import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Link } from "react-router-dom";


export const Home = () => (
	<div className="text-center mt-5">
		<h1>Hello Rigo!</h1>
		<Link to="/New-Contact" >
			<button className="btn btn-success">Add contact</button>
		</Link>
		<Link to = "/Edit-Contact">
			<button className="btn btn-danger"></button>
		</Link>

	</div>
);
