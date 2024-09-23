import React, { useEffect, useState } from "react";  
import "./Campaign.css"; // Ensure your styles are correctly imported  
import { BiFilter, BiSearch } from "react-icons/bi";  
import { useNavigate } from "react-router-dom";  
import { useDispatch, useSelector } from "react-redux";  
import axios from "axios";  
import { myCampaigns } from "../../global/slice";  
import { useTable } from "react-table";  
import { BsArrowDown } from "react-icons/bs";  
import toast, { Toaster } from "react-hot-toast";
import Loading from "../../components/Loading/Loading";

const Campaign = () => {  
  const Nav = useNavigate();  
  const dispatch = useDispatch();  
  const token = useSelector((state) => state.kindraise.token);  

  const [filterToggle, setFilterToggle] = useState(false);  
  const [searchTerm, setSearchTerm] = useState("");  
  const [loading, setLoading] = useState(false);  
  const [campaigns, setCampaigns] = useState([]); // Original campaign list  
  const [filteredCampaigns, setFilteredCampaigns] = useState([]); // Filtered campaign list  
  const [selectedStatus, setSelectedStatus] = useState(""); // State for selected status  

  // Fetch campaigns from the API  
  useEffect(() => {  
    setLoading(true);  
    const url = "https://kindraise.onrender.com/api/v1/get-NpoallCampaign";  

    axios  
      .get(url, {  
        headers: { Authorization: `Bearer: ${token}` },  
      })  
      .then((res) => {  
        const data = res?.data?.allCampaigns || [];  
        setCampaigns(data);  
        setFilteredCampaigns(data);   
        dispatch(myCampaigns(data));   
        setLoading(false);  
      })  
      .catch((err) => {    
        console.log(err);  
        setLoading(false);  
      });  
  }, [token, dispatch]);  

  // Search function to filter campaigns based on searchTerm and selectedStatus  
  useEffect(() => {  
    const filtered = campaigns.filter((campaign) => {  
      const matchesSearch = campaign.story.toLowerCase().includes(searchTerm.toLowerCase());  
      const matchesStatus = selectedStatus ? campaign.status === selectedStatus : true; // Filter by status if selected  
      return matchesSearch && matchesStatus;  
    });  
    setFilteredCampaigns(filtered); // Set filtered campaigns based on searchTerm and selected status  
  }, [searchTerm, campaigns, selectedStatus]);  

  const [selectedRowIndex, setSelectedRowIndex] = useState(null);
  const [selectedAction, setSelectedAction] = useState("");

  // Configure table columns  
  const columns = React.useMemo(() => [  
    { Header: "Campaign", accessor: "story" },  
    { Header: "Created", accessor: "createdAt" },  
    { Header: "Raised", accessor: "totalRaised" },  
    { Header: "Supporters", accessor: "supporters" },  
    { Header: "Status", accessor: "status" },  
    {
      Header: "Actions",
      Cell: ({ row }) => (
        <div>
          <button
            onClick={() => {
              setSelectedRowIndex(
                selectedRowIndex === row.index ? null : row.index
              );
            }}
          >
            ...
          </button>
          {selectedRowIndex === row.index && (
            <div className="editor"
              // style={{
              //   position: "absolute",
              //   background: "white",
              //   border: "1px solid #ccc",
              //   padding: "10px",
              // }}
            >
              {/* <button onClick={() => handleAction("Edit", row.original.ev)}>
                Edit
              </button> */}
              <button onClick={() => handleAction("View", row.original.ev)}>
                View
              </button>
            </div>
          )}
        </div>
      ),
    },  
  ], [selectedRowIndex]);  

  const handleAction = (action, ev) => {
    setSelectedAction(action);
    setSelectedRowIndex(null); // Close the menu after an action

    // Navigate to the appropriate component based on the action
    if (action === "Edit") {
      alert("true"); 
    } else if (action === "View") {
      Nav(`/fundraising-page/${ev}`); 
    }
  };

  // Set up the table using React Table  
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({  
    columns,  
    data: filteredCampaigns, // Use filtered campaigns for the table  
  });  

  return (  
    <>  
      <div className="campaignBody">  
        <h2 className="pageName">Campaign</h2>  
        <div className="campaignContent">  
          <div className="campaignSearchSide">  
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
              <div className="filterContainer">  
                <div  
                  className="filterIcon"  
                  onClick={() => setFilterToggle(!filterToggle)}  
                >  
                  <BiFilter size={17} />  
                </div>  
                {filterToggle && (  
                  <div className="filterBox">  
                    <div onClick={() => { setSelectedStatus(""); setFilterToggle(false); }}>All</div>  
                    <div onClick={() => { setSelectedStatus("active"); setFilterToggle(false); }}>Active</div>  
                    <div onClick={() => { setSelectedStatus("inactive"); setFilterToggle(false); }}>Inactive</div>  
                    {/* Add other statuses as needed */}  
                  </div>  
                )}  
              </div>  
            </div>  
            <button className="campaignBtn" onClick={() => Nav("/campaign/create-campaign")}>  
              New Campaign  
            </button>  
          </div>  

          <div className="tableWrapperTransaction">  
            <div className="table-containerTransaction">  
              {loading ? (  
                <Loading/> 
              ) : (  
                <table {...getTableProps()} className="campaign-table">  
                  <thead>  
                    {headerGroups.map(headerGroup => (  
                      <tr {...headerGroup.getHeaderGroupProps()} className="table-header">  
                        {headerGroup.headers.map(column => (  
                          <th {...column.getHeaderProps()} className="table-header-cell">  
                            {column.render("Header")}  
                          </th>  
                        ))}  
                      </tr>  
                    ))}  
                  </thead>  
                  <tbody {...getTableBodyProps()}>  
                    {rows.map(row => {  
                      prepareRow(row);  
                      return (  
                        <tr {...row.getRowProps()} className="table-row">  
                          {row.cells.map(cell => (  
                            <td {...cell.getCellProps()} className="table-cellNow">  
                              {cell.render("Cell")}  
                            </td>  
                          ))}  
                        </tr>  
                      );  
                    })}  
                  </tbody>  
                </table>  
              )}  
            </div>  
            <div className="tableFooterPagination">  
              <div>Hello</div>  
              <div>Hello</div>  
              <div>  
                10 per page <BsArrowDown />  
              </div>  
            </div>  
          </div>  
        </div>  
      </div>  
      {/* <Toaster/> */}
    </>  
  );  
};  

export default Campaign;


// import React, { useEffect, useState } from "react";  
// import "./Campaign.css";  
// import { BiFilter, BiSearch } from "react-icons/bi";  
// import { useNavigate } from "react-router-dom";  
// import { useDispatch, useSelector } from "react-redux";  
// import axios from "axios";  
// import { myCampaigns } from "../../Global/slice";  
// import { useTable } from "react-table";  
// import { BsArrowDown } from "react-icons/bs";  
// import toast, { Toaster } from "react-hot-toast";  

// const Campaign = () => {  
//   const Nav = useNavigate();  
//   const dispatch = useDispatch();  
//   const token = useSelector((state) => state.kindraise.token);  

//   const [filterToggle, setFilterToggle] = useState(false);  
//   const [searchTerm, setSearchTerm] = useState("");  
//   const [loading, setLoading] = useState(false);  
//   const [campaigns, setCampaigns] = useState([]);  
//   const [filteredCampaigns, setFilteredCampaigns] = useState([]);  
//   const [selectedStatus, setSelectedStatus] = useState("");  

//   // New state for pagination  
//   const [currentPage, setCurrentPage] = useState(1);  
//   const itemsPerPage = 4;  

//   useEffect(() => {  
//     setLoading(true);  
//     const url = "https://kindraise.onrender.com/api/v1/get-NpoallCampaign";  

//     axios  
//       .get(url, {  
//         headers: { Authorization: `Bearer: ${token}` },  
//       })  
//       .then((res) => {  
//         const data = res?.data?.allCampaigns || [];  
//         setCampaigns(data);  
//         setFilteredCampaigns(data);   
//         dispatch(myCampaigns(data));   
//         setLoading(false);  
//       })  
//       .catch((err) => {    
//         console.log(err);  
//         setLoading(false);  
//       });  
//   }, [token, dispatch]);  

//   useEffect(() => {  
//     const filtered = campaigns.filter((campaign) => {  
//       const matchesSearch = campaign.story.toLowerCase().includes(searchTerm.toLowerCase());  
//       const matchesStatus = selectedStatus ? campaign.status === selectedStatus : true;  
//       return matchesSearch && matchesStatus;  
//     });  
//     setFilteredCampaigns(filtered);  
//   }, [searchTerm, campaigns, selectedStatus]);  

//   const [selectedRowIndex, setSelectedRowIndex] = useState(null);  
//   const [selectedAction, setSelectedAction] = useState("");  

//   const columns = React.useMemo(() => [  
//     { Header: "Campaign", accessor: "story" },  
//     { Header: "Created", accessor: "createdAt" },  
//     { Header: "Raised", accessor: "totalRaised" },  
//     { Header: "Supporters", accessor: "supporters" },  
//     { Header: "Status", accessor: "status" },  
//     {  
//       Header: "Actions",  
//       Cell: ({ row }) => (  
//         <div>  
//           <button  
//             onClick={() => {  
//               setSelectedRowIndex(  
//                 selectedRowIndex === row.index ? null : row.index  
//               );  
//             }}  
//           >  
//             ...  
//           </button>  
//           {selectedRowIndex === row.index && (  
//             <div  
//               style={{  
//                 position: "absolute",  
//                 background: "white",  
//                 border: "1px solid #ccc",  
//                 padding: "10px",  
//               }}  
//             >  
//               <button onClick={() => console.log("Action 1")}>Action 1</button>  
//               <button onClick={() => console.log("Action 2")}>Action 2</button>  
//             </div>  
//           )}  
//         </div>  
//       )  
//     },  
//   ], [selectedRowIndex]);  

//   // Pagination Logic  
//   const indexOfLastCampaign = currentPage * itemsPerPage;  
//   const indexOfFirstCampaign = indexOfLastCampaign - itemsPerPage;  
//   const currentCampaigns = filteredCampaigns.slice(indexOfFirstCampaign, indexOfLastCampaign);  
//   const totalPages = Math.ceil(filteredCampaigns.length / itemsPerPage);  

//   return (  
//     <div className="campaign-container">  
//       <Toaster />  
//       <h1>Campaigns</h1>  
//       <div className="search-filter">  
//         <input  
//           type="text"  
//           placeholder="Search campaigns..."  
//           value={searchTerm}  
//           onChange={(e) => setSearchTerm(e.target.value)}  
//         />  
//         <button onClick={() => setFilterToggle(!filterToggle)}>  
//           <BiFilter />  
//         </button>  
//       </div>  

//       {loading ? (  
//         <p>Loading...</p>  
//       ) : (  
//         <table>  
//           <thead>  
//             <tr>  
//               {columns.map((column) => (  
//                 <th key={column.accessor}>{column.Header}</th>  
//               ))}  
//             </tr>  
//           </thead>  
//           <tbody>  
//             {currentCampaigns.map((campaign, index) => (  
//               <tr key={index}>  
//                 {columns.map((column) => (  
//                   <td key={column.accessor}>{campaign[column.accessor]}</td>  
//                 ))}  
//               </tr>  
//             ))}  
//           </tbody>  
//         </table>  
//       )}  

//       <div className="pagination">  
//         {Array.from({ length: totalPages }, (_, index) => (  
//           <button  
//             key={index + 1}  
//             onClick={() => setCurrentPage(index + 1)}  
//             className={currentPage === index + 1 ? 'active' : ''}  
//           >  
//             {index + 1}  
//           </button>  
//         ))}  
//       </div>  
//     </div>  
//   );  
// };  

// export default Campaign;