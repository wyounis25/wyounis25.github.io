import React, { useState } from 'react';
import './Contact.css';
import { useHistory } from 'react-router-dom';
function Contact() {
	const history = useHistory();

	const handleClick = () => {
		let path = '/resume';
		history.push(path);
	};

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
		>
			<h1>CONTACT ME</h1>
			<div className="contact">
				<form>
					<div className="contact__name">
						<label>
							<strong>Name</strong>
						</label>
						<input />
					</div>
					<div className="contact__email">
						<label>
							<strong>Email</strong>
						</label>
						<input type="email" />
					</div>
					<div className="contact__message">
						<label>
							<strong>Message</strong>
						</label>
						<textarea />
					</div>
					<button onClick={handleClick} className="contact__button">
						SEND MESSAGE
					</button>
				</form>
			</div>
		</div>
	);
}

export default Contact;
