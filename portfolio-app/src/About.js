import React, { useState } from 'react';
import './About.css';
import firebase from './firebase.png'
import js from './js.png'
import html from './html.png'
import mongo from './mongodb.png'
import node from './nodejs.png'
import rails from './rails.png'
import swift from './swift.png'
import react from './react.png'
import express from './ExpressJS.png'
import ruby from './ruby.png'
function About() {

	const [about, setAbout] = useState(false)

	const handleScroll = () => {
		if (window.scrollY >= 0.1) {
			setAbout(true);
		} else {
			setAbout(false);
		}
	};
	window.addEventListener('scroll', handleScroll);

	return (
		<div className="about">
			<div className= "about__title" >
				<h1 className={about?"about__me active" : "about__me" }>A Little About Me</h1>
			</div>
			<div className="about__intro">
				<p className={about?"about__p active" : "about__p" }>
					<strong>
						Im a Software Engineer Based in Houston,TX. Aside from coding than im probably listening or
						reading up on advances in neuroscience, physics, engineering, space, and physical wellbeing. Im
						just fascinated in the direction Mankind is heading towards and as we venture further into the
						relm of software I can only imagine the all the possitiblites that can one day become realities.
						Everyday im just sharping my tools
					</strong>
				</p>
					<div className={about?"about__skills active" : "about__skills" }>

						<img src={js} alt="javascript"/>
						<img src={html} alt="javascript"/>
						<img src={react} alt="javascript"/>
						<img src={ruby} alt="javascript"/>
						<img src={rails} alt="javascript"/>
						<img src={node} alt="javascript"/>
						<img src={mongo} alt="javascript"/>
						<img src={express} alt="javascript"/>
						<img src={firebase} alt="javascript"/>
						<img src={swift} alt="javascript"/>
					</div>
					<p className={about?"about__p active" : "about__p" }>
					<strong>
						and looking to add more the the arsenal. As you naviagte through my website. If you like what
						you see feel free to reach out to me and if you dont I welcome honest feedback.{' '}
					</strong>
				</p>
			</div>
		</div>
	);
}

export default About;
