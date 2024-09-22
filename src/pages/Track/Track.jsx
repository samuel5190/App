import React, { useState } from 'react'
import './Track.css'
import useLocalStorage from 'use-local-storage'
// import Transaction from '../DonorsComponents/Transaction'
// import Contacts from '../DonorsComponents/Contacts'
import { BiFilter, BiSearch } from 'react-icons/bi'
import Transaction from '../../components/Transaction/Transaction'
import Contacts from '../../components/Contacts/Contacts'
// import ProgressBar from '../components/ProgressBar/ProgressBar'

const Track = () => {
  const [presentComponent, setPresentComponent] = useLocalStorage("A");
  const [Account, setAccount] = useLocalStorage("A");

  const [filterToggle, setFilterToggle] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all"); // Filter state
  // console.log(search);

  const renderComponent = () => {
    switch (presentComponent) {
      case "A":
        return <Transaction />;
      case "B":
        return <Contacts />;
      default:
        return <Transaction />;
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

  const products = [
    {
      id: 1,
      name: "Apple iPhone 13",
      category: "Electronics",
      status: "active",
    },
    {
      id: 2,
      name: "Samsung Galaxy S21",
      category: "Electronics",
      status: "active",
    },
    { id: 3, name: "Sony WH-1000XM4", category: "Audio", status: "active" },
    { id: 4, name: "Dell XPS 13", category: "Computers", status: "inactive" },
    {
      id: 5,
      name: "Apple MacBook Pro",
      category: "Computers",
      status: "inactive",
    },
  ];

  const getFilteredProducts = () => {
    return products.filter((product) => {
      const matchesStatus = filterStatus === "all" || product.status === filterStatus;
      const matchesSearchTerm = product.name.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesStatus && matchesSearchTerm;
    });
  };

  // filteredProducts = getFilteredProducts();

  return (
    <div className='donorBody'>
      <h2 className="pageName">Donor</h2>
      <div className="createContent">
        <div className="createHeadDonor">
          <div className="createSmallHeader">
            <div onClick={content} className={presentComponent==="A"? "active" : "notActive"}>Transactions</div>
            <div onClick={goal} className={presentComponent==="B"? "active" : "notActive"}>Contacts</div>
            {/* <div onClick={sharing} className={presentComponent==="C"? "active" : "notActive"}>Verification</div> */}
          </div>
          {/* <div className="campaignSearchSide">
            <div className="SearchSide">
              <div className="searchBox">
                <BiSearch color="gray" />
                <input
                  type="text"
                  placeholder="Search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          </div> */}
        </div>

        <div className="create">
        {renderComponent()}
        </div>
      </div>
    </div>
  )
}

export default Track