import React from 'react'
import './Work.css'
import landing from './Landing.png'
import main from './main.png'
import main_2 from './main_2.png'
import note from './note.png'
import payment from './payment.png'
import payment_2 from './payment_2.png'
import react from './react.png'
import express from './ExpressJS.png'
import mongo from './mongodb.png'
import node from './nodejs.png'
import js from './js.png'
import AOS from 'aos'
import 'aos/dist/aos.css'

function Work() {
  return (
    <>
      <h1 className="work__header">Projects</h1>
      <div className="work" data-aos="fade-left">
        <div className="work__stack">
			<div id="work__code">

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="	https://github.com/wyounis25/Note-Exchange-Frontend-MERN"
          >
            <h5>Frontend</h5>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="	https://github.com/wyounis25/Note-Exchange-Backend-MERN"
          >
            <h5>Backend</h5>
          </a>
			</div>
          <img src={js} alt="javascript" />
          <img src={mongo} alt="javascript" />
          <img src={express} alt="javascript" />
          <img src={react} alt="javascript" />
          <img src={node} alt="javascript" />
        </div>
        <div className="work__project">
          <img src={landing} alt="Landing Page" />
          <img src={main} alt="Main Page" />
          <img src={main_2} alt="Main Page" />
          <img src={note} alt="single Note" />
          <img src={payment} alt="Payment" />
          <img src={payment_2} alt="Payment_2" />
        </div>
      </div>
    </>
  )
}

export default Work
