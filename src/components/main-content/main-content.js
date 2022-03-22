import React from 'react';
import Navbar from '../navbar/navbar.js';
import About from '../about/about.js';
import Teaching from '../teaching/teaching.js';
import "./main-content.css";
import PublicationList from "../publications/publications.js"

export default class MainContent extends React.Component {
    constructor(props) {
        super(props);
	this.state = {cur: 0}
	this.set_about = this.set_about.bind(this);
	this.set_pubs = this.set_pubs.bind(this);
	this.set_teaching = this.set_teaching.bind(this);
    }
    
    set_about() {
        this.setState({cur: 0});
    }

    set_pubs() {
        this.setState({cur: 1});
    }

    set_teaching() {
        this.setState({cur: 2});
    }
    render() {
        return (
	    <div class="main">
		<Navbar setters={[this.set_about, this.set_pubs, this.set_teaching]}/>
		{(this.state.cur == 0) ? <About /> : <></>}
		{(this.state.cur == 1) ? <PublicationList /> : <></>}
		{(this.state.cur == 2) ? <Teaching  /> : <></>}
            </div>
	)
    }
}
