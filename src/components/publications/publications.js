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
		           conference={pub.conference} year={pub.year} award={pub.award} filename={pub.filename} supplement={pub.supplement} data_code={pub.data_code}/>
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
		{ (item == "Vinay Koshy" || item == "Vinay Koshy*") ?
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
		        {this.props.conference ? 
				this.props.conference + " " :
				""} 
		    </span>
		    <span>
		        {this.props.year ? 
				this.props.year + ". " : 
				""}
		    </span>
		    <span>
		        { this.props.award ?
  			        <b>{this.props.award + "."}</b> : 
			        <>{""}</>
			}
		    </span>
		    <span>
		        { this.props.filename ? 
	  		        <a href={process.env.PUBLIC_URL + "/papers/" + this.props.filename}> [PDF]</a> : 
				<>{""}</>
		        }
		    </span>
		    <span>
		        { this.props.supplement ? 
	  		        <a href={process.env.PUBLIC_URL + "/papers/" + this.props.supplement}> [Supplement] </a> : 
				<>{""}</>
		        }
		    </span>
		    <span>
		        { this.props.data_code ? 
				(this.props.data_code) == "Coming Soon!" ? 
					<>[Data and code coming soon!]</> :
					<a href={this.props.data_code}> [Data and Code] </a> :

				<>{""}</>
		        }
		    </span>
		</p>
            </div>
	);
    }
}


