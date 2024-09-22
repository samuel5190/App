import React, { useEffect,useState } from "react";
import "./Account.css";
import useLocalStorage from "use-local-storage";
import About from "../../components/About/About";
import Security from "../../components/Security/Security";
import Verification from "../../components/Verification/Verification";

const Account = () => {
  const [presentComponent, setPresentComponent] = useLocalStorage("A");
  const [Account, setAccount] = useLocalStorage("A");
  useEffect(() => {
    if (presentComponent === "B") {
      setPresentComponent("B");
    } else if (presentComponent === "C") {
      setPresentComponent("C");
    } else {
      setPresentComponent("A");
    }
  }, []);

  const renderComponent = () => {
    switch (presentComponent) {
      case "A":
        return <About />;
      case "B":
        return <Security />;
      case "C":
        return <Verification />;
      default:
        return <About />;
    }
  };

  const content =()=>{
    setAccount('A')
    setPresentComponent('A')
  }
  const goal =()=>{
    setAccount('B')
    setPresentComponent('B')
  }
  const sharing =()=>{
    setAccount('C')
    setPresentComponent('C')
  }

  return (
    <div className="accountBody">
      <h2 className="pageName">Account</h2>
      <div className="createContent">
        <div className="createHead">
          <div className="createSmallHeader">
            <div onClick={content} className={presentComponent==="A"? "active" : "notActive"}>About</div>
            <div onClick={goal} className={presentComponent==="B"? "active" : "notActive"}>Security</div>
            <div onClick={sharing} className={presentComponent==="C"? "active" : "notActive"}>Verification</div>
          </div>
          {/* <div>hello</div> */}
        </div>

        <div className="create">
        {renderComponent()}
        </div>
      </div>
    </div>
  );
};

export default Account;
