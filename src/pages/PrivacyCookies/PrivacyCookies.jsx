import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import './PrivacyCookies.css'

const PrivacyCookies = () => {
  return (
   <>
   <Header/>
   <div className='privacy-container'>
    <p><strong>Last Updated: 09/09/2024</strong></p>
    
    <p>At KindRaise, we value your privacy and are committed to being transparent about how we collect, use, and protect your personal information. This Privacy and Cookies Policy explains how we handle your data and the use of cookies when you use our services.</p>
    
    <h2>1. Information We Collect</h2>
    <p>We collect the following information to provide and improve our services:</p>
    <ul>
        <li><strong>Personal Information:</strong> This includes your name, email address, contact details, payment information, and any other data you provide when registering, creating a fundraiser, or making a donation.</li>
        <li><strong>Non-Personal Information:</strong> This includes data about your use of our platform, such as browser type, IP address, and usage statistics. This data helps us improve our services.</li>
        <li><strong>Payment Information:</strong> While we facilitate payments through third-party providers, we do not store your payment details on our servers.</li>
    </ul>
    
    <h2>2. How We Use Your Information</h2>
    <p>We use the data collected to:</p>
    <ul>
        <li>Facilitate your fundraising activities, process donations, and manage accounts.</li>
        <li>Communicate with you about your fundraisers, donations, and updates to our platform.</li>
        <li>Ensure legal compliance and protect the security of our platform.</li>
        <li>Improve our platform through analytics and user feedback.</li>
    </ul>
    
    <h2>3. Cookies</h2>
    <p><strong>What Are Cookies?</strong></p>
    <p>Cookies are small text files stored on your device that help us improve your experience by remembering certain actions and preferences (such as login details).</p>
    
    <p><strong>Types of Cookies We Use:</strong></p>
    <ul>
        <li><strong>Essential Cookies:</strong> Necessary for basic functionalities, such as secure login and session management.</li>
        <li><strong>Analytics Cookies:</strong> Used to gather data about how users interact with our platform, helping us improve its functionality.</li>
        <li><strong>Preference Cookies:</strong> Help us remember your preferences and settings to provide a more personalized experience.</li>
    </ul>
    
    <h2>4. Managing Cookies</h2>
    <p>You can control the use of cookies through your browser settings. However, please note that disabling cookies may impact your ability to use certain features of our platform.</p>
    
    <h2>5. Data Sharing</h2>
    <p>We may share your data in the following situations:</p>
    <ul>
        <li><strong>Service Providers:</strong> With third-party services (e.g., payment processors) that assist us in running our platform.</li>
        <li><strong>Legal Requirements:</strong> To comply with legal obligations or respond to valid requests from public authorities.</li>
    </ul>
    
    <h2>6. Your Rights</h2>
    <p>Depending on your location, you may have certain rights regarding your personal data, such as:</p>
    <ul>
        <li>Access to the personal information we hold about you.</li>
        <li>Requesting corrections to incorrect or incomplete data.</li>
        <li>Requesting deletion of your personal data under certain conditions.</li>
    </ul>
    <p>To exercise any of these rights, contact us at [email/contact form].</p>
    
    <h2>7. Security</h2>
    <p>We take appropriate security measures to protect your personal data. However, no online service is entirely secure, so we cannot guarantee absolute security.</p>
    
    <h2>8. Changes to This Policy</h2>
    <p>We may update this Privacy and Cookies Policy periodically to reflect changes to our practices or for other operational, legal, or regulatory reasons. You are encouraged to review this page regularly.</p>
    
    <p>If you have any questions or concerns about this policy, please contact us at [email/contact form].</p>
   </div>
    <Footer/>
   </>
  )
}

export default PrivacyCookies