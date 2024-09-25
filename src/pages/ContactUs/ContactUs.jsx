import React, { useEffect } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './ContactUs.css';
import Mail from '../../assets/mail-icon.png';
import Faq from '../../assets/faq.png';
import { FaArrowRightLong } from "react-icons/fa6";


const ContactUs = () => {
    const sendMail = () => {
        window.location.href = 'mailto:contact@kindraise.com';
    };

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
        <>
            <Header/>
            <div className='contact-container'>
                <h1>Get in touch</h1>
                <p>We are happy to help. Please contact us if you need help or have any questions.</p>

                <div className='container-inner'>
                    <img src={Mail} alt="Mail Icon" />
                    <h1>Send a mail</h1>
                    <p>Do you have general questions or need assistance? Please send us a quick email.</p>
                    <div className="contact-button-container">
                        <button onClick={sendMail} className="contact-button"><span>Send Email</span><FaArrowRightLong /></button>
                    </div>
                </div>
            </div>
            <div className='help-container'>
                    <h1>Need more help?</h1>
                    <p>Find answers to your questions. Explore our docs to learn everything you need to know about KindRaise.</p>

                    <div className='faq-container'>
                    <img src={Faq} alt="FAQ Icon" />
                    <div className='text-content'>
                        <h1>Frequently Asked Questions</h1>
                        <p>Get answers to some of the most commonly asked questions and feedback.</p>
                    </div>
</div>

                </div>
            <Footer/>
        </>
    );
};

export default ContactUs;
