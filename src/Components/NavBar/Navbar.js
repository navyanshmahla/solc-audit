import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from '../../assets/marsh.png';
import {Link} from 'react-router-dom';

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

	return (
		<header>
			<h3><img src= {logo}/></h3>
			<nav ref={navRef}>
				<a href="/#">Home</a>
				<a href="/#">Tools</a>
				<a href="/#">Blog</a>
				<a href="/#">Contact Us</a>
                <Link to="/user" >Hello User!</Link>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button className="nav-btn" onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;