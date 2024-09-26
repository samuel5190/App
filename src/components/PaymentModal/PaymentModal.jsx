import React, { useState } from 'react'
import './PaymentModal.css'
import { MdClose } from 'react-icons/md'
import axios from 'axios';
import { useSelector } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';

const PayoutModal = ({setModal}) => {
  const [BankName, setBank] = useState('')
  const [accountNumber, setAccount] = useState(0)
  const [beneficiaryName, setName] = useState('')
  const [amount, setAmount] = useState('')
  const [loading, setLoading] = useState(false)
  const data = {
    BankName,
    accountNumber,
    beneficiaryName,
    amount
  }
  console.log(data)


  const token = useSelector((state) => state.kindraise.token);

  const sendBank = ()=>{
    const url = `https://kindraise.onrender.com/api/v1/payout`
    setLoading(true)
    axios
      .post(url, data, {headers: { Authorization: `Bearer: ${token}` }}) 
      .then((res)=>{
        console.log(res)
       setLoading(false)
       setModal(false)
       toast.success("successfully send")
      })
      .catch((err)=>{
        console.log(err)
        setLoading(false)

      })
    // alert('Error')
  }


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
            <select name="banks" id="banks" onChange={(e)=>setBank(e.target.value)}>  
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
            <input type="text" onChange={(e)=>setAccount(e.target.value)}/>
          </div>
          <div className='payoutModalInputBox'>
            <span>Beneficiary Name</span>
            <input type="text"placeholder='(optional)' onChange={(e)=>setName(e.target.value)}/>
          </div>
          <div className='payoutModalInputBox'>
            <span>Amount</span>
            <input type="text"placeholder='(optional)' onChange={(e)=>setAmount(e.target.value)}/>
          </div>
        </div>
        <div className='payoutModalBtnBox'>
          <button onClick={sendBank}>{loading ? "sending": "save"}</button>
        </div>
      </div>
      <Toaster/>
    </div>
  )
}

export default PayoutModal