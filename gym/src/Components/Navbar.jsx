import React from "react";
import "./Navbar.css"
import { Link } from "react-router-dom";
import Search from "./SearchBar";
import CartCard from "./Prodcard/CartCard";

function NavBar() {
	return (
		<header>
			{/* <Link to="/" className="logoLink"><h3 className="Sedgwick400 lgo">Gymtopia</h3></Link> */}
			<Link to="/" className="logoLink"><img src="https://imgtr.ee/images/2023/10/07/0b0a65b6aa3aec013a518d3137e3961c.png" width="100" height="100" className="d-inline-block align-top" alt="Muscleblaze" /></Link>
			<Search/>
			<nav>
				<Link to="/">Home</Link>
                <Link to="/Categories">Products</Link>
				<Link to="/DietCalc">Diet Plan</Link>
				<Link to="/About">About</Link>
				<CartCard/>
			</nav>
		</header>
	);
}

export default NavBar;