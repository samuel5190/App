import React, { useEffect } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './TermsOfUse.css';

const TermsOfUse = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <div className='terms-content'>
        <p className='topic'><strong>Last Updated: 09/09/2024</strong></p>

        <p>Please read these Terms of Use ("Terms", "Terms of Use") carefully before using the KindRaise website and fundraising platform (the "Service") operated by KindRaise Inc. ("us", "we", or "our").</p>

        <p>Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users, and others who access or use the Service.</p>

        <p>By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the Service.</p>

        <h2>1. Definitions</h2>

        <p><strong>"Platform"</strong> refers to the KindRaise fundraising website and associated services.</p>
        <p><strong>"User"</strong> refers to donors, individual fundraisers, and non-profit organizations using the Platform.</p>
        <p><strong>"Campaign"</strong> refers to any fundraising initiative created on the Platform.</p>

        <h2>2. Eligibility and Account Registration</h2>

        <p><strong>2.1.</strong> The Platform is available for use by individuals who are of legal adult age in Nigeria and registered non-profit organizations.</p>

        <p><strong>2.2.</strong> To access certain features of the Platform, you must register for an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.</p>

        <p><strong>2.3.</strong> You are responsible for safeguarding the password you use to access the Platform and for any activities or actions under your password.</p>

        <h2>3. User Types and Verification</h2>

        <p><strong>3.1.</strong> The Platform serves three types of users: donors, individual fundraisers, and non-profit organizations.</p>

        <p><strong>3.2. Verification Process:</strong></p>
        <p>Non-profit organizations must provide their registration number and supporting documents such as registration certificates.</p>
        <p>Individual fundraisers must provide a government-issued ID such as a voter's card, National Identification Number (NIN), passport, or other acceptable forms of identification.</p>

        <p><strong>3.3.</strong> We reserve the right to reject or revoke access to any user who fails to meet our verification requirements.</p>

        <h2>4. Acceptable Use</h2>

        <p><strong>4.1.</strong> You may use the Platform only for lawful purposes and in accordance with these Terms.</p>

        <p><strong>4.2.</strong> You agree not to use the Platform:</p>
        <ul>
          <li>For any illegal purpose or to solicit the performance of any illegal activity.</li>
          <li>To conduct fundraising campaigns for political purposes.</li>
          <li>To impersonate or attempt to impersonate another person or entity.</li>
          <li>To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the Platform, or which, as determined by us, may harm us or users of the Platform or expose them to liability.</li>
        </ul>

        <h2>5. Campaigns</h2>

        <p><strong>5.1.</strong> All campaigns are subject to review and approval by KindRaise.</p>

        <p><strong>5.2.</strong> We reserve the right to remove or suspend any campaign that violates these Terms or that we deem inappropriate for any reason.</p>

        <p><strong>5.3.</strong> Fundraisers are responsible for the accuracy and truthfulness of all information provided in their campaigns.</p>

        <h2>6. Payments and Fees</h2>

        <p><strong>6.1.</strong> All payments are processed through our third-party payment processor, Korapay.</p>

        <p><strong>6.2.</strong> By using the Platform, you agree to Korapay's terms of service and privacy policy.</p>

        <p><strong>6.3. Fees:</strong></p>
        <ul>
          <li>A transaction fee of 1.5% will be deducted from each donation.</li>
          <li>A platform fee of 3% will be charged on the total amount raised.</li>
        </ul>

        <p><strong>6.4.</strong> These fees are subject to change with notice to users.</p>

        <h2>7. Fund Distribution</h2>

        <p><strong>7.1.</strong> Funds are distributed to campaign creators when:</p>
        <ul>
          <li>The campaign goal has been reached, or</li>
          <li>The campaign creator ends the campaign, even if the goal has not been reached.</li>
        </ul>

        <p><strong>7.2.</strong> Funds will be sent to the beneficiary's account after submission and verification of bank details.</p>

        <p><strong>7.3.</strong> If an account isn't verified, beneficiaries won't receive funds.</p>

        <h2>8. Refunds and Cancellations</h2>

        <p><strong>8.1.</strong> Generally, donations are non-refundable. However, if we determine that a campaign is fraudulent or in violation of our Terms, we reserve the right to refund all donations to the respective donors.</p>

        <p><strong>8.2.</strong> We reserve the right to cancel, discontinue, or suspend any campaign at our discretion without notice.</p>

        <h2>9. Intellectual Property</h2>

        <p><strong>9.1.</strong> The Platform and its original content, features, and functionality are and will remain the exclusive property of KindRaise and its licensors.</p>

        <p><strong>9.2.</strong> By posting content on the Platform, you grant us a non-exclusive, worldwide, royalty-free license to use, reproduce, modify, and distribute that content for the purpose of operating and promoting the Platform.</p>

        <h2>10. Privacy</h2>

        <p><strong>10.1.</strong> Your privacy is important to us. Please review our Privacy Policy, which explains how we collect, use, and disclose information about you.</p>

        <h2>11. Limitation of Liability</h2>

        <p><strong>11.1.</strong> KindRaise Inc shall not be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Platform.</p>

        <h2>12. Governing Law</h2>

        <p><strong>12.1.</strong> These Terms shall be governed and construed in accordance with the laws of Nigeria, without regard to its conflict of law provisions.</p>

        <h2>13. Changes to Terms</h2>

        <p><strong>13.1.</strong> We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will provide notice of any significant changes.</p>

        <h2>14. Contact Us</h2>

        <p>If you have any questions about these Terms, please contact us at <a href="mailto:contact@kindraise.com">contact@kindraise.com</a>.</p>

        <p>By using the Platform, you acknowledge that you have read and understood these Terms of Use and agree to be bound by them.</p>
      </div>
      <Footer />
    </>
  );
};

export default TermsOfUse;
