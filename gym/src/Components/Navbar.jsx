import React from "react";
import "./Navbar.css"
import { Link } from "react-router-dom";

function NavBar() {
	return (
		<header>
			<Link to="/" className="logoLink"><h3 className="Sedgwick400 lgo">Gymtopia</h3></Link>
			{/* <img src=".gym-app/public/MuscleBlaze.png" width="30" height="30" className="d-inline-block align-top" alt="Muscleblaze" /> */}
			<nav>
				<Link to="/">Home</Link>
                <Link to="/Product">Products</Link>
				<Link to="/DietCalc">Diet Plan</Link>
				<Link to="/About">About</Link>
			</nav>
		</header>
	);
}

export default NavBar;