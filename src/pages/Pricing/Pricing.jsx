import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './Pricing.css'

const Pricing = () => {
  return (
    <>
      <Header />
      <div className='pricing-container'>
        <div className='pricing-left'>
          {/* Left */}
          <div className='pricing-text'>
            <h1>Simple Pricing For All</h1>
            <p>At KindRaise, we believe in transparent and fair pricing. Our fee structure is designed to keep costs low for fundraisers while maintaining a sustainable platform that serves all Nigerians.</p>
          </div>
        </div>
        <div className='pricing-right'>
          {/* Right */}
          <div className='fee-structure'>
            <h3>Our Fee Structure</h3>
            <h4>Payment Processing Fee: 1.5%</h4>
            <p>This covers the costs associated with securely processing your donation through our trusted payment partner, Korapay.</p>
            <h4>Platform Fee: 3%</h4>
            <p>This small fee helps us maintain and improve KindRaise, ensuring we can continue to provide a reliable, user-friendly platform for all your fundraising needs.</p>
          </div>
        </div>
      </div>
      <div className='figure-container'>
        <div className='figure-left'>
            <h1>For every <span>₦1,000</span> raised</h1>
        </div>
        <div className='figure-right'>
            <h1><span>₦995</span> goes to your mission.</h1>
        </div>
        </div>
        <p className='last-paragraph'>KindRaise doesn't charge donors. When someone makes a donation, they can be confident that their full donation (minus the payment processing fee) will go to the cause they're supporting.</p>

      <Footer />
    </>
  );
};

export default Pricing;
