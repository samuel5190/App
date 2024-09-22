import React from 'react'
import './PaymentModal.css'
import { MdClose } from 'react-icons/md'

const PayoutModal = ({setModal}) => {
  return (
    <div className='payoutModalBody'>
      <div className='payoutModalWrapper'>
        <div className='payoutModalHead'>
          <h3>Add payout method</h3>
          <div onClick={()=>setModal(false)}><MdClose size={20} cursor="pointer"/></div>
        </div>
        <div className='payoutModalInputHolder'>
          <div className='payoutModalInputBox'>
            <span>Bank</span>
            <select name="banks" id="banks">  
    <option value="">Select a Bank</option>  
    <option value="access_bank">Access Bank</option>  
    <option value="diamond_bank">Diamond Bank</option>  
    <option value="first_bank">First Bank of Nigeria</option>  
    <option value="gtb">Guaranty Trust Bank (GTBank)</option>  
    <option value="fcmb">FCMB (First City Monument Bank)</option>  
    <option value="zenith_bank">Zenith Bank</option>  
    <option value="uba">United Bank for Africa (UBA)</option>  
    <option value="wema_bank">Wema Bank</option>  
    <option value="skye_bank">Skye Bank</option>  
    <option value="heritage_bank">Heritage Bank</option>  
    <option value="polaris_bank">Polaris Bank</option>  
    <option value="eco_bank">Ecobank Nigeria</option>  
    <option value="stanbic_ibtc">Stanbic IBTC Bank</option>  
    <option value="citibank">Citibank Nigeria</option>  
    <option value="jaiz_bank">Jaiz Bank</option>  
    <option value="suntrust_bank">SunTrust Bank</option>  
    <option value="fidelity_bank">Fidelity Bank</option>  
    <option value="keystone_bank">Keystone Bank</option>  
    <option value="remita_bank">Remita Bank</option>  
    <option value="tcf_bank">Trust Capital Financial Services</option>  
    <option value="starling_bank">Starling Bank</option>  
    <option value="parallexbank">Parallex Bank</option>  
    <option value="paycom_bank">Paycom Bank</option>  
    <option value="onelife_bank">One Life Bank</option>  
    <option value="jaiz_bank">Jaiz Bank</option>  
    <option value="savings_bank">Nigeria Savings Bank</option>  
    <option value="newpac_b">Newpac Bank</option>  
</select>
          </div>
          <div className='payoutModalInputBox'>
            <span>Account Number</span>
            <input type="text" />
          </div>
          <div className='payoutModalInputBox'>
            <span>Beneficiary Name</span>
            <input type="text"placeholder='(optional)' />
          </div>
        </div>
        <div className='payoutModalBtnBox'>
          <button>Save</button>
        </div>
      </div>
    </div>
  )
}

export default PayoutModal