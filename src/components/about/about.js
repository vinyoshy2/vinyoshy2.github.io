import React from 'react';
import "./about.css";

export default class About extends React.Component {
    render() {
        return (
	    <div id="about-text">
                <p>I am a sixth year PhD student in computer science at the University of Illinois at Urbana-Champaign (which, suprisingly, is also my hometown). I am fortunate to be advised by Professor Karrie Karahalios as part of the Social Spaces group. Prior to coming here, I completed my BA at the University of California, Berkeley, majoring in computer science.</p>
                <p>I study human-computer interaction (HCI). <b>My research aims to democratize online community governance.</b> I approach this problem in two ways. First, I conduct <b>computational social science</b> research to build models of longitudinal community dynamics. In this work, I develop natural language processing-based approaches to measuring social phenomena. Second, I build new tools to help online community moderators guide and adapt to the norms of the groups they run. I adopt <b>qualitative, user-centered design</b> approaches to inform early prototypes, and larger scale quantitative analyses to evaluate impact.</p>
                
                <p> My work has won multiple paper awards at CHI and CSCW. In the past, I have also worked on designing smart home devices for multi-user environments, and have interned as a software engineer at Salesforce. Non-research interests include crosswords and cat-wrangling.</p>
                <p><b>I am currently on the job market!</b> </p>
	    </div>
	);
    }
}
