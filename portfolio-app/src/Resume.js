import React from 'react';
import walid from './walid.jpg';
import './Resume.css';

function Resume() {
	return (
		<div className="resume__container">
			<img className="resume__img" src={walid} alt="my_resume" />
		</div>
	);
}

export default Resume;
