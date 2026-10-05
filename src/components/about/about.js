import React from 'react';
import "./about.css";

export default class About extends React.Component {
    render() {
        return (
	    <div id="about-text">
                <p>I am a postdoc at the University of Washington, advised by Amy Zhang. Before that I was a PhD student in computer science at the University of Illinois at Urbana-Champaign (which, suprisingly, is also my hometown). I was fortunate to be advised by Professor Karrie Karahalios as part of the Social Spaces group during that period of time. Prior to arriving in Illinois, I completed my BA at the University of California, Berkeley, majoring in computer science.</p>
                <p>My research explores <b>the design and evaluation of AI systems that can handle task ambiguity</b> in a way that promotes human autonomy and growth. I take the perspective that task formulation and execution are entangled processes: we often learn what it means to do something well by trying it ourselves. Thus, I build and evaluate human-in-the-loop systems where the decision-maker continues to update their understanding and preferences around the task over time. I also pursue a separate line of research in computational social science. In this work, <b>I develop NLP-based approaches to measuring and modeling social phenomena</b>, especially in the context of social dynamics in online communities. 
</p>
                
                <p> My work has won multiple paper awards at CHI and CSCW. In the past, I have also worked on designing smart home devices for multi-user environments, and have interned as a software engineer at Salesforce. Non-research interests include watching movies, cooking, lifting, and playing trivia games.</p>
	    </div>
	);
    }
}
