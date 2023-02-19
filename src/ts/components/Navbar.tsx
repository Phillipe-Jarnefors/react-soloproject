import React from "react";
import GlobeIcon from "../../assets/globe_icon.png"

function Navbar() {
	return(
		<header className="navigation">
			<img src={GlobeIcon}/>
			<p>my travel journal.</p>
		</header>
	)
}

export default Navbar