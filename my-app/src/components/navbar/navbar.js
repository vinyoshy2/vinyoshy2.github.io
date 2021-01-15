import React from 'react';
import "./navbar.css";

export default class Navbar extends React.Component {
    render() {
        return (
	    <div class="navbar">
   		    <div class="nav-button" id="about">ABOUT</div>
		    <div class="nav-button" id="publications">PUBLICATIONS</div>
		    <div class="nav-button" id="teaching">TEACHING</div>
		    <div class="nav-button" id="CV">CURRICULUM VITAE</div>
	    </div>
	);
    }
}

