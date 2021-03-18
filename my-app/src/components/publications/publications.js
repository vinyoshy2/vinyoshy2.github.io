import React from 'react';
import "./publications.css";
import pubJSON from "../../data/publications.json";

export default class PublicationsList extends React.Component {
    render() {
        return (
	   <div class="pub-list">
               {pubJSON.publications.map((pub, index) => 
                   <div class="pub-entry">
  		       <p class="num">{"[" + (index + 1) + "] "}</p>
		       <Publication authors={pub.authors} title={pub.title} 
		           conference={pub.conference} year={pub.year} award={pub.award} filename={pub.filename}/>
		   </div>
	       )}
	   </div>
        );
    }
}

class Publication extends React.Component {
    constructor(props) {
        super(props);
	console.log(props)
    }
    render() {
//	        {(index == this.props.authors.length - 1) ? 
//			{item}
//	        : (item == "Vinay Koshy") ?
//	            <b>{item}</b> :
        let auths = this.props.authors.map((item, index) => (
	    <> 
		{ (item == "Vinay Koshy") ?
  	            <b>{item}</b> :
		    <>{item}</>
		}
		{
                    (index == this.props.authors.length - 1) ?
		        <>. </> :
			<>, </>
		}
	    </>
        ));
	return (
            <div class="pub">
    	        <p>
		    <span>
		        {auths}
		    </span>
		    <span>
		        {this.props.title + ". "}
		    </span>
		    <span>
		        {this.props.conference + " "} 
		    </span>
		    <span>
		        {this.props.year + ". "}
		    </span>
		    <span>
		        <b>{this.props.award}</b>.
		    </span>
		    <span>
		        <a href={process.env.PUBLIC_URL + "/papers/" + this.props.filename}> PDF</a>
		    </span>
		</p>
            </div>
	);
    }
}


