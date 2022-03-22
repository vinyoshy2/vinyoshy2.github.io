import React from 'react';
import "./sidebar.css";

export default class Sidebar extends React.Component {
    render() {
        return (
	    <div class="sidebar">
		<div class="name">
		    <div class="name-text">VINAY</div>
		    <div class="name-text" id="last-name">KOSHY</div>
		</div>
		<div class="sidebar-image">
                    <img src="/veen_square.jpg" id="image"/>
		</div>
	    </div>
	);
    }
}

