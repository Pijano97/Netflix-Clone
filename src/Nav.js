import React, { useEffect, useState } from "react";
import "./Nav.css";

function Nav() {
	const [show, handleShow] = useState(false);

	useEffect(() => {
		window.addEventListener("scroll", () => {
			if (window.scrollY > 100) {
				handleShow(true);
			} else handleShow(false);
		});
		return () => {
			window.removeEventListener("scroll");
		};
	}, []);

	return (
		<div className={`nav ${show && "nav__black"}`}>
			<img
				className="nav__logo"
				src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Logo_Netflix.png"
				alt="netflix Logo"
			/>
			<img
				className="nav__avatar"
				// src="https://pbs.twimg.com/profile_images/12401199904155"
				alt="netflix Logo"
			/>
		</div>
	);
}

export default Nav;
