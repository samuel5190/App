import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { BiMoney } from "react-icons/bi";
import { BsMegaphone, BsPeople } from "react-icons/bs";
import { AiOutlineExport } from "react-icons/ai";
import School from "../../assets/School.svg";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
// import { myCampaigns } from "../../global/slice.js";
import toast, { Toaster } from "react-hot-toast";
import { myCampaigns } from "../../global/slice";
// import { Bar } from 'rechart';
// import { BarChart, ResponsiveContainer,Bar, XAxis, YAxis, Tooltip } from 'recharts';

const DashBoard = () => {
  // const userData = JSON.parse(localStorage.getItem('userData'))
  // console.log(userData)

  const products = [
    {
      name: "jan",
      donor: 1500,
      receiver: 3000,
      hidden: 900,
    },
    {
      name: "feb",
      donor: 3000,
      receiver: 3500,
      hidden: 1000,
    },
    {
      name: "Mar",
      donor: 4000,
      receiver: 2000,
      hidden: 400,
    },
    {
      name: "Apr",
      donor: 4500,
      receiver: 2500,
      hidden: 700,
    },
    {
      name: "May",
      donor: 3000,
      receiver: 2000,
      hidden: 1200,
    },
    {
      name: "Jun",
      donor: 500,
      receiver: 2800,
      hidden: 1200,
    },
    {
      name: "Jul",
      donor: 2000,
      receiver: 4500,
      hidden: 1200,
    },
    {
      name: "Aug",
      donor: 3000,
      receiver: 2500,
      hidden: 1200,
    },
    {
      name: "Sep",
      donor: 0,
      receiver: 3000,
      hidden: 1200,
    },
    {
      name: "Oct",
      donor: 5000,
      receiver: 4000,
      hidden: 1200,
    },
    {
      name: "Nov",
      donor: 3000,
      receiver: 4500,
      hidden: 1200,
    },
    {
      name: "Dec",
      donor: 5000,
      receiver: 4000,
      hidden: 1200,
    },
  ];
  const token = useSelector((state) => state.kindraise.token);
  
  // console.log("main token", token);

  const [campaign, setCampaign] = useState([]);
  const [loading, setLoading] = useState(false);
  const [test, setTest] = useState(null);
  const [totalRaised, setTotalRaised] = useState(0)

  const fetchAll = async()=>{
      try{
        // setLoading(true);
        const url = "https://kindraise.onrender.com/api/v1/get-NpoallCampaign";
        setLoading(true);
        const headers = {
          Authorization: `Bearer: ${token}`,
        };
        const res = await axios.get(url, { headers })
        setCampaign(res?.data?.allCampaigns)
        // console.log(campaign)
        console.log(res, "res")
        setTotalRaised(res?.data?.totalRaisedFromAllCampaigns)
        // toast.success(res?.data?.message)
        dispatch(myCampaigns(res?.data?.allCampaigns))
        // console.log("The res",res?.data?.allCampaigns);
        setCampaign(res?.data?.allCampaigns);
        const total = res?.data?.allCampaigns.reduce((acc, campaign) => (acc + Number(campaign.totalRaised)), 0)
        setTotalRaised(total)
        console.log(total, "total")
        dispatch(myCampaigns(res?.data?.allCampaigns));
        
        setLoading(false);
      }catch(err){
        // toast.error(err?.response?.data?.message)
        // setLoading(false); // Data has finished loading even on error
      };
  }
  useEffect(() => {
    fetchAll()
    console.log("check")
  }, [totalRaised]);


  // useEffect(() =>{
  //   console.log(totalRaised)
  // },[totalRaised])
  const camp = useSelector((state)=>state.kindraise.myCampaigns)
  // console.log(camp)

  function getFirstTwoObjects(arr) {
    // Check if the input is an array and has at least two objects
    if (Array.isArray(arr)) {
      return arr.slice(0, 2); // Return the first two objects
    } else {
      return []; // Return an empty array if the input is not an array
    }
  }

  function totalSupporters(campaigns) {  
    return campaigns.map(campaign => campaign.supporters) // Extract the number of supporters  
    .reduce((accumulator, current) => accumulator + current, 0); // Sum them up  
 }

 const total = totalSupporters(campaign);

  const firstTwoProducts = getFirstTwoObjects(campaign);
  // console.log(firstTwoProducts, "first two");

  function filterActiveCampaigns(products) {
    return products.filter((product) => product.status === "active");
  }
  const activeCampaigns = filterActiveCampaigns(campaign);

  // calculate total amount
  function calculateTotalAmount(products) {
    return products.reduce((total, product) => total + product.totalRaised, 0);
  }
  const totalAmount = calculateTotalAmount(campaign);
  // console.log("Total: ",totalAmount)
  // console.log("Type: ",typeof totalAmount)

  const [searchTerm, setSearchTerm] = useState(""); // State for search term
  const [selectedPerson, setSelectedPerson] = useState(null); // State for selected person

  const persons = [
    {
      name: "Alice",
      amount: 25,
      date: "22/03/2024",
      campaign: "Save the tree",
      email: "jacksam@gmail.com",
      contribution: "1,000",
      contact_since: "22/03/2024",
    },
    {
      name: "Bob",
      amount: 30,
      date: "22/03/2024",
      campaign: "Save the tree",
      email: "alice@gmail.com",
      contribution: "1,000",
      contact_since: "22/03/2024",
    },
    {
      name: "Charlie",
      amount: 22,
      date: "22/03/2024",
      campaign: "Save the tree",
      email: "joeDoe@gmail.com",
      contribution: "1,000",
      contact_since: "22/03/2024",
    },
  ];
  if (!selectedPerson) {
    setSelectedPerson(persons[0]);
  }

  const [data, setdata] = useState([
    {
      amount: 110000,
      name: "Total Amount",
      icon: "total",
      message: "",
    },
    {
      amount: 11000,
      name: "Total Donation",
      icon: "total",
      message: "",
    },
    {
      amount: 40,
      name: "Total Donors",
      icon: "total",
      message: "",
    },
    {
      amount: 12,
      name: "Active Campaigns",
      icon: "total",
      message: "",
    },
  ]);

  const Nav = useNavigate();

  // const max = 2000;
  // const current = 1000;
  const percentage = (1000 / 2000) * 100;

  const RoundedTopBar = (props) => {
    const { x, y, width, height, radius, fill } = props;

    return (
      <g>
        {/* Top rounded part of the bar */}
        <rect
          x={x}
          y={y}
          width={width}
          height={height}
          fill={fill}
          rx={radius} // Apply rounding to top corners
          ry={radius}
        />
        {/* Bottom straight part of the bar */}
        <rect
          x={x}
          y={y + radius} // Start below the rounded part
          width={width}
          height={height - radius} // Make it shorter to accommodate the rounded corners
          fill={fill}
        />
      </g>
    );
  };

  const filteredPersons = persons.filter((person) =>
    person.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handlePersonClick = (person) => {
    setSelectedPerson(person); // Set the selected person
  };

  return (
    <div className="dashboardBody">
      <div>
        <div className="dashNameBtnHolder">
          <h2 className="pageName">Home</h2>
          <button
            className="campaignBtn dash"
            onClick={() => Nav("/campaign/create-campaign")}
          >
            New Campaign
          </button>
        </div>
        <div className="dashboardContent">
          <div className="dashBoardUpperCard">
            <div className="dashboardSmallCard">
              <div className="dashBoardCardUpper">
                <h2 className="upperCardMainText one">₦{totalRaised}</h2>
                <div className="upperCardSubText">Total Raised</div>
              </div>
              <div className="dashBoardCardLower">
                <div className="cardSmallText"></div>
                <div className="iconCircle">
                  <BiMoney color="rgb(78, 78, 239)" size={20} />
                </div>
              </div>
            </div>
            <div className="dashboardSmallCard">
              <div className="dashBoardCardUpper">
                <h2 className="upperCardMainText two">₦12,000</h2>
                <div className="upperCardSubText">Total Donation</div>
              </div>
              <div className="dashBoardCardLower">
              <div className="cardSmallText"></div>
                {/* <div className="cardSmallText">+2.5% from yesterday</div> */}
                <div className="iconCircle">
                  <BiMoney color="rgb(78, 78, 239)" size={20} />
                </div>
              </div>
            </div>
            <div className="dashboardSmallCard">
              <div className="dashBoardCardUpper">
                <h2 className="upperCardMainText three">{total}</h2>
                <div className="upperCardSubText">Total Donors</div>
              </div>
              <div className="dashBoardCardLower">
              <div className="cardSmallText"></div>
                {/* <div className="cardSmallText">+5 this month</div> */}
                <div className="iconCircleHolder">
                  <div className="iconCircle">
                    <BsPeople color="rgb(78, 78, 239)" size={20} />
                  </div>
                </div>
              </div>
            </div>
            <div className="dashboardSmallCard">
              <div className="dashBoardCardUpper">
                <h2 className="upperCardMainText four">
                  {activeCampaigns.length}
                </h2>
                <div className="upperCardSubText">Active Campaigns</div>
              </div>
              <div className="dashBoardCardLower">
              <div className="cardSmallText"></div>
                {/* <div className="cardSmallText">2 ending this week</div> */}
                <div className="iconCircle">
                  <BsMegaphone color="rgb(78, 78, 239)" size={20} />
                </div>
              </div>
            </div>
            {/* <div className="dashboardSmallCard">hello</div>
            <div className="dashboardSmallCard">hello</div>
            <div className="dashboardSmallCard">hello</div> */}
          </div>

          <div className="dashBoardLowerCard">
            <div className="barChart">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={products}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar
                    shape={(props) => <RoundedTopBar {...props} radius={15} />} // Use the custom shape
                    type="monotone"
                    stroke="#0042d1"
                    fill="#4d77e1"
                    dataKey="donor"
                    barSize={20} // Adjust this value to make bars thinner or thicker
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="fundraisingDashboardBox">
              <div className="fundraiseDashHead">
                <h3>Your Fundraising</h3>
                <div onClick={() => Nav("/campaign")}>
                  <AiOutlineExport size={20} cursor="pointer" />
                </div>
              </div>
              <div className="fundraiseDashBody">
                {
                  // loading ? <div>Fetching campaigns...</div>:
                  firstTwoProducts.map((e, i) => {
                  const percentage = (e.totalRaised / e.Goal) * 100;

                  return (
                    <div className="fundRaiseDashCard">
                      <div className="fundraiseFrameBox">
                        <div className="fundRaiseFrameImgBox">
                          <img src={e.profilePic} alt="" />
                        </div>
                        <div className="fundRaiseFrameText">{e.story}</div>
                      </div>
                      <div className="fundRaiseTrackBox">
                        <div className="trackBoxDash small">
                          <div className="progress-containerDash">
                            <progress
                              className="progBar"
                              max={e.Goal}
                              value={e.totalRaised}
                            ></progress>
                          </div>
                        </div>

                        <div className="fundraiseAmountTrack">
                          <div>
                            ₦{e.totalRaised}/<span>{e.Goal}</span>
                          </div>
                          <div>{percentage}% funded</div>
                        </div>
                      </div>
                    </div>
                  );
                })
                }

                {/* <div className="fundRaiseDashCard">
                  <div className="fundraiseFrameBox">
                    <div className="fundRaiseFrameImgBox">
                      <img src={School} alt="" />
                    </div>
                    <div className="fundRaiseFrameText">
                      Sponsor 5 Children in Nigeria Get Back to School
                    </div>
                  </div>
                  <div className="fundRaiseTrackBox">
                    <div className="trackBoxDash small">
                      <div className="progress-containerDash">
                        <div
                          className="progress-barDash"
                          style={{ width: `${percentage}%` }}
                        ></div>
                      </div>
                    </div>
                    <div className="fundraiseAmountTrack">
                      <div>
                        ₦100,450/<span>150,000</span>
                      </div>
                      <div>69% funded</div>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>

          {/* <div className="recentDonorsHistory">
            <div className="donationHistoryPersonBox">
              <div className="donorHistoryHead">Donation history</div>
              <div className="donorHistoryPeople">
                <div className="donorPeople">hello</div>
                <div className="donorPeople">hello</div>
              </div>
            </div>
            <div className="donationHistoryPersonShow">hello</div>
          </div> */}
          <div className="contacts-container">
            {/* <div className="transactionSearchSide">  
        <div className="searchBox">  
          <BiSearch color="gray" />  
          <input  
            type="text"  
            placeholder="Search by name"  
            value={searchTerm} // Bind input value to searchTerm state  
            onChange={(e) => setSearchTerm(e.target.value)} // Update search term on change  
          />  
        </div>  
      </div>   */}
            <div className="contactBox">
              <div className="contacts-list">
                {filteredPersons.map((person, index) => (
                  <div
                    key={index}
                    className="person-item"
                    onClick={() => handlePersonClick(person)}
                  >
                    {person.name}
                  </div>
                ))}
              </div>
              <div className="details-container">
                {selectedPerson && (
                  <div className="details">
                    <h2>{selectedPerson.name}</h2>
                    <p>
                      <strong>Date:</strong> {selectedPerson.date}
                    </p>
                    <p>
                      <strong>Amount:</strong> {selectedPerson.amount}
                    </p>
                    <p>
                      <strong>Campaign:</strong> {selectedPerson.campaign}
                    </p>
                    <p>
                      <strong>Email:</strong> {selectedPerson.email}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Toaster/>
    </div>
  );
};

export default DashBoard;
