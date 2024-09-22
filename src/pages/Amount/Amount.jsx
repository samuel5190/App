import React from 'react'
import './Amount.css'
import { useNavigate } from 'react-router-dom'
import Tree from '../../assets/Tree.svg'

const Amount = ({datas,setActiveComponent,setPay,setAmount}) => {
  const Nav = useNavigate()
  
  return (
    <div className='amountBody'>
      <div className='amountHeader'>
        <h3>Enter an amount</h3>
        <div onClick={()=>setPay(false)}>X</div>
      </div>
      <div className='amountWrapper'>
        <div className='amountAmount'>
          <div className='inputBox'>
            ₦ <input type="number" onChange={(e)=>setAmount(e.target.value)}/>
          </div>
          <button onClick={()=>setActiveComponent("B")}>continue</button>
        </div>
        <div className='amountDetailsBox'>
          <div>
            <img src={datas?.profilePic} alt="" />
          </div>
          <h3>{datas?.title}</h3>
          <p>{datas?.subtitle}</p>
        </div>
      </div>
        {/* <button onClick={()=>setActiveComponent("B")}>amount</button> */}
    </div>
  )
}

export default Amount