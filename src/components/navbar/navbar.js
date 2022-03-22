import React from 'react';
import "./navbar.css";

export default class Navbar extends React.Component {
    constructor(props) {
        super(props)
	this.state = {
            cur_clicked: 0,
	    cur_hover: 0,
	}
	this.mouseOver = this.mouseOver.bind(this);
	this.mouseOff = this.mouseOff.bind(this);
	this.click = this.click.bind(this);
        this.compute_width = this.compute_width.bind(this);

	this.clicks = [...Array(4).keys()].map(num => (() => this.click(num)));
	this.mouseOvers = [...Array(4).keys()].map(num => (() => this.mouseOver(num)));
	this.mouseOffs = [...Array(4).keys()].map(num => (() => this.mouseOff(num)));

	this.mobile = (window.innerWidth <= 800);
    }
    mouseOver(number) {
        this.setState({ cur_hover: number});    
    }
    mouseOff(number) {
        this.setState({ cur_hover: this.state.cur_clicked});    
    }
    click(number) {
        this.setState({ cur_clicked: number});
	this.props.setters[number]();
    }

    compute_width(position) {
        let dist = Math.abs(this.state.cur_hover - position);
  	return 80 - (dist * 12);
    }
    render() {
        return (
	    <div class="navbar">
   		    <nav class="nav-button" id="about"
		        style={{width: this.compute_width(0) + "%"}}
		        onClick={this.clicks[0]} 
		        onMouseOver={this.mouseOvers[0]}
		        onMouseOut={this.mouseOffs[0]}>ABOUT</nav>
		    <nav class="nav-button" id="publications" 
		        style={{width: this.compute_width(1) + "%"}}
		        onClick={this.clicks[1]}
		        onMouseOver={this.mouseOvers[1]}
		        onMouseOut={this.mouseOffs[1]}>PUBLICATIONS</nav>
		    <nav class="nav-button" id="teaching"
		        style={{width: this.compute_width(2) + "%"}}
		        onClick={this.clicks[2]}
			onMouseOver={this.mouseOvers[2]}
			onMouseOut={this.mouseOffs[2]}>TEACHING</nav>
		    <nav class="nav-button" id="CV"
		        style={{width: this.compute_width(3) + "%"}}
		        onMouseOver={this.mouseOvers[3]}
		        onMouseOut={this.mouseOffs[3]}>
		        {
			    (!this.mobile) ?
		            <a target="_blank" rel="noopener noreferrer" href={process.env.PUBLIC_URL + "/koshyCV.pdf"}>CURRICULUM VITAE</a> : 
		            <a target="_blank" rel="noopener noreferrer" href={process.env.PUBLIC_URL + "/koshyCV.pdf"}>CV</a>  
			}
		    </nav>
	    </div>
	);
    }
}

