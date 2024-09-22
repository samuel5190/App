import React, { useEffect, useState } from "react";
import "./Goal.css";

const Goal = ({setAmount,setEndDate,sharing }) => {
  const [isChecked, setIsChecked] = useState(false);

  // Handler for the toggle switch change
  // const handleToggle = () => {
  //   setIsChecked(!isChecked); // Toggle the state
  //   console.log(isChecked);
  // };
  
  return (
    <div className="goalBody">
      <div className="goalTitleBox">
        <h3>Goal</h3>
        <div>Add a goal and progress bar to your campaign.</div>
      </div>
      <div className="goalInputBox">
        <div className="goalInput">
          <div>
            Amount<span>*</span>
          </div>
          
          <div className="goalInputContainer">₦<input type="text" onChange={(e)=>setAmount(e.target.value)}/></div>
          <div className="goalFirstText">You keep the money you raise, Regardless of whether you hit your goal.</div>
        </div>
        <div className="goalDateBox">
          <div>
            <h3>End Date</h3>
            <div className="goalDateText">Add an end date/countdown to your page</div>
            {
              <input type="date" onChange={(e)=> setEndDate(e.target.value)} className="dateInput" name="" id="" />
            }
          </div>
          {/* <div>toggle</div> */}
        </div>
        <div className="SaveBtnBox">
          <button className="goalSaveBtn" onClick={sharing}>
            save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Goal;
