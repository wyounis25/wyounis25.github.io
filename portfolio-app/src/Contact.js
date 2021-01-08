import React, { useState } from 'react';
import './Contact.css';
import { useHistory } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
function Contact() {
	const history = useHistory();



	const [contact, setContact] = useState(false)

	const handleScroll = () => {
		if (window.scrollY >= 200) {
			setContact(true);
		} else {
			setContact(false);
		}
	};
	window.addEventListener('scroll', handleScroll);

	return (
		<div className={contact ? 'contact__container active' : 'contact__container'}
		data-aos="fade-right">
			<h1>CONTACT ME</h1>
			<div className="contact">
				<form action="https://formspree.io/f/mwkwaopy" method="POST">
					<div className="contact__name">
						<label>
							<strong>Name</strong>
						</label>
						<input  type="text" name="name"/>
					</div>
					<div className="contact__email">
						<label>
							<strong>Email</strong>
						</label>
						<input type="email" name="_replyto"/>
					</div>
					<div className="contact__message">
						<label type="text" name="message" >
							<strong>Message</strong>
						</label>
						<textarea />
					</div>
					<div className="contact__button">
					<button type="submit" value="Send">
						SEND MESSAGE
					</button>

					</div>
				</form>
			</div>
		</div>
	);
}

export default Contact;
