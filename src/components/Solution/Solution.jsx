import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Solution.css';

const Solution = () => {
  const navigate = useNavigate();

  return (
    <div className='fundraising-solution-section'>
      <div className='fundraising-solution-header'>
        <div className='fundraising-solution-content'>
            <h1>A Fundraising <span>Solution</span> For All</h1>
            <p>No cause is big or small. From heartfelt personal missions to grand community projects, we empower you to turn dreams into reality.</p>
        </div>
      </div>

      <div className='fundraising-steps-header'>
        <h1>Raise Funds In 3 Easy Steps</h1>
      </div>

      <div className='fundraising-steps-container'>
        <div className='fundraising-step'>
          <div className='step-number'>1</div>
          <h1 className='step-title'>Start your fundraiser</h1>
          <p>Tell your story, set a target, add pictures and videos</p>
        </div>

        <div className='fundraising-step'>
          <div className='step-number'>2</div>
          <h1 className='step-title'>Share with friends</h1>
          <p>Send emails, share on social media</p>
        </div>

        <div className='fundraising-step'>
          <div className='step-number'>3</div>
          <h1 className='step-title'>Manage donations</h1>
          <p>Receive donations, thank donors, money goes to your bank account</p>
        </div>
      </div>

      <div className="fundraising-action-container">
        <button onClick={() => navigate('/signup')} className="action-button" data-aos="zoom-in">Get Started</button>
      </div>
    </div>
  );
};

export default Solution;
