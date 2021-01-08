import './App.css';
import React, { useEffect, useState } from 'react';
import Contact from './Contact';
import About from './About';
import Work from './Work';
import Resume from './Resume';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Header from './Header';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

AOS.init();
function App() {
	

	return (
		<Router>
			<Header/>
				<Switch>
					<Route path="/resume">
						<div className= 'App__resume'>
						<Resume />
						</div>
					</Route>
					<Route path="/">
						<div className="App__rest" >
							<About />
							<Work />
							<br/>
							<Contact className="contact__component" />
						</div>
					</Route>
				</Switch>
			
		</Router>
	);
}

export default App;
