import React, { useState } from 'react'
import './Modal.css'
import Amount from '../Amount/Amount';
import PaymentDetails from '../PaymentDetails/PaymentDetails';
import Bank from '../Bank/Bank';
// import Tree from '../assets/Tree.svg';

const Modal = ({datas,amount,payKorapay,setPay,setMessage,setEmail,setName,setBank,setAmount}) => {

  const [activeComponent, setActiveComponent] = useState('A');

  const renderComponent = () => {  
    switch (activeComponent) {  
        case 'A':  
            return <Amount datas={datas} setActiveComponent={setActiveComponent} setAmount={setAmount} setPay={setPay}/>;  
        case 'B':  
            return <Bank setActiveComponent={setActiveComponent} setPay={setPay}/>;  
        case 'C':  
            return <PaymentDetails payKorapay={payKorapay} setEmail={setEmail} setMessage={setMessage} setName={setName} setPay={setPay}/>;  
        default:  
            return <Amount setActiveComponent={setActiveComponent} setPay={setPay}/>;  
    }  
}; 
  return (
    <div className='modalBody'>
      {renderComponent()}
    </div>
  )
}

export default Modal