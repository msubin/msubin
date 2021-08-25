import React, { useState } from 'react';
import { db } from '../server/firebase';

const ContactMe = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const [loader, setLoader] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoader(true);

        db.collection("contacts").add({
            name: name,
            email: email,
            message: message
        })
            .then(() => {
                alert("Message sent 👍");
                setLoader(false);
            })
            .catch((error) => {
                alert(error.message);
                setLoader(false);
            })

        setName("");
        setEmail("");
        setMessage("");
    }

    const submitButton = () => {
        document.getElementById("contact-form").submit();
    }

    return (
        <>
            <h2 className="section__title">Contact Me</h2>
            <span className="section__subtitle">Get in touch</span>

            <div className="contact__container container grid">
                <div>
                    <div className="contact__information">
                        <i className="fas fa-envelope contact__icon"></i>

                        <div>
                            <h3 className="contact__title">Email Me</h3>
                            <span className="contact__subtitle">smoon44@my.bcit.ca</span>
                        </div>
                    </div>

                    <div className="contact__information">
                        <i className="fab fa-instagram contact__icon"></i>

                        <div>
                            <h3 className="contact__title">DM Me</h3>
                            <span className="contact__subtitle">@proj__joy</span>
                        </div>
                    </div>

                    <div className="contact__information">
                        <i className="fas fa-map-marker-alt contact__icon"></i>

                        <div>
                            <h3 className="contact__title">Location</h3>
                            <span className="contact__subtitle">Vancouver, Canada</span>
                        </div>
                    </div>
                </div>

                <form id="contact-form" className="contact__form grid" onSubmit={handleSubmit}>
                    <div className="contact__inputs grid">
                        <div className="contact__content">
                            <label htmlFor="name" className="contact__label">Name</label>
                            <input type="text" className="contact__input" value={name} onChange={(e) => setName(e.target.value)} required />
                        </div>
                        <div className="contact__content">
                            <label htmlFor="email" className="contact__label">Email</label>
                            <input type="email" className="contact__input" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        </div>
                        <div className="contact__content">
                            <label htmlFor="message" className="contact__label">Message</label>
                            <textarea name="" id="" cols="0" rows="7" className="contact__input" value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
                        </div>

                        <div>
                            <button type="submit" className="button button--flex" style={{ background: loader ? "#ccc" : "var(--first-color)" }}>
                                Send Message
                                <i className="fas fa-paper-plane button__icon"></i>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}


export default ContactMe;

