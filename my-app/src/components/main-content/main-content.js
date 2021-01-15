import React from 'react';
import Navbar from '../navbar/navbar.js';
import About from '../about/about.js';
import "./main-content.css";

export default class MainContent extends React.Component {
    constructor(props) {
        super(props);
	this.state = {cur: 0}
    }
    render() {
        return (
	    <div class="main">
		<Navbar />
		<About />
            </div>
	)
    }
}
