import React from 'react';
import "./about.css";

export default class About extends React.Component {
    render() {
        return (
	    <div id="about-text">
                <p>I am a second year PhD student in computer science at the University of Illinois at Urbana-Champaign (which, suprisingly, is also my hometown). I am fortunate to be advised by Professor Karrie Karahalios as part of the Social Spaces group. Prior to coming here, I completed my BA at the University of California, Berkeley, majoring in computer science.</p>
                <p>I study human-computer interaction (HCI), though my interests within this area are varied. Currently, my research largely revolves around supporting community-based content moderation on line.In particular, I am interested in understanding what factors make a community succesful at moderating itself, and in building transparent, NLP-based tools to assist in moderation efforts. In the past, I have also worked on designing smart home devices for multi-user environments, and have interned as a software engineer at Salesforce.</p>
                <p>Non-research interests include crosswords (both making and solving) and cat-wrangling.</p>
	    </div>
	);
    }
}
