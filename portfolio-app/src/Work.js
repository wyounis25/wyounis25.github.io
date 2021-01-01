import React from 'react';
import './Work.css';
import note from './NoteExchange.png';
import mern from './mern.png';
//import react from './react.png';
// import netflix from './netflix.png';

function Work() {
	return (
		<div className="work">
			<div className="work__1">
				<div className="work__project">
					<img src={note} alt="Note Exchange" />
				</div>
				<div className="work__stack">
					<img src={mern} alt="mern" />
				</div>
			</div>
			{/* <div className="work__2">
				<div className="work__project">
					<img src={netflix} alt="Note Exchange" />
				</div>
				<div className="work__stack">
					<img src={react} alt="mern" />
				</div>
			</div> */}
		</div>
	);
}

export default Work;
