import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from '../../assets/marsh.png';

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