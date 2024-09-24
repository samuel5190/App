import React, { useEffect, useState } from "react";
import "./Transaction.css";
// import PayoutTable from '../components/PayoutTable/PayoutTable'
import { useTable } from "react-table";
import { BsArrowDown } from "react-icons/bs";
import useLocalStorage from "use-local-storage";
import { BiSearch } from "react-icons/bi";
import TransactionModal from "../../pages/TransactionModal/TransactionModal";
import axios from "axios";
import { useSelector } from "react-redux";

const Transaction = () => {  
  const [modal, setModal] = useLocalStorage(false);  
  const [selectedPerson, setSelectedPerson] = useState(null);  
  const [searchTerm, setSearchTerm] = useState(""); // State for the search term 
  const token = useSelector((state) => state.kindraise.token); 
  const [person, setPerson] = useState()

  const persons = [  
    {  
      name: "Alice",  
      amount: 25,  
      date: "22/03/2024",  
      campaign: "Save the tree",  
      message: "I’m so proud to be a changemaker. #Love",  
      email: "jacksam@gmail.com",  
      contribution: "1,000",  
      contact_since: "22/03/2024",  
    },  
    {  
      name: "Bob",  
      amount: 30,  
      date: "22/03/2024",  
      campaign: "Save the tree",  
      message: "I’m so proud to be a changemaker. #Love",  
      email: "jacksam@gmail.com",  
      contribution: "1,000",  
      contact_since: "22/03/2024",  
    },  
    {  
      name: "Charlie",  
      amount: 22,  
      date: "22/03/2024",  
      campaign: "Save the tree",  
      message: "I’m so proud to be a changemaker. #Love",  
      email: "jacksam@gmail.com",  
      contribution: "1,000",  
      contact_since: "22/03/2024",  
    },  
  ];  



  const getDonors = async() => {
    try {
      const url = "https://kindraise.onrender.com/api/v1/history";
      const headers = {
        Authorization: `Bearer: ${token}`,
      };
      const res = await axios.get(url, { headers });
      console.log(res?.data?.donations)
      setPersons()
    }catch (err) {
      console.log(err, "all donors")
    }
  }

  useEffect(()=>{
    getDonors()
    // getDonors()
  },[])

  // Filter persons based on search term  
  const filteredPersons = persons.filter(person =>  
    person.name.toLowerCase().includes(searchTerm.toLowerCase())  
  );  

  const columns = React.useMemo(  
    () => [  
      {  
        Header: "Name",  
        accessor: "name",  
      },  
      {  
        Header: "Date",  
        accessor: "date",  
      },  
      {  
        Header: "Amount",  
        accessor: "amount",  
      },  
      {  
        Header: "Campaign",  
        accessor: "campaign",  
      },  
    ],  
    []  
  );  

  const handleRowClick = (person) => {  
    setSelectedPerson(person);  
    setModal(true); // Show the modal when clicking a row  
  };  

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =  
    useTable({ columns, data: filteredPersons }); // Use filtered data  

  return (  
    <>  
      <div className="transactionSearchSide">  
        <div className="SearchSideTransaction">  
          <div className="searchBox">  
            <BiSearch color="gray" />  
            <input  
              type="text"  
              placeholder="Search by name"  
              value={searchTerm} // Bind the input value to searchTerm state  
              onChange={(e) => setSearchTerm(e.target.value)} // Update the search term on change  
            />  
          </div>  
        </div>  
      </div>  
      <div className="tableWrapperTransaction">  
        <div className="table-containerTransaction">  
          <table {...getTableProps()} className="campaign-table">  
            <thead>  
              {headerGroups.map((headerGroup) => (  
                <tr  
                  {...headerGroup.getHeaderGroupProps()}  
                  className="table-header"  
                >  
                  {headerGroup.headers.map((column) => (  
                    <th  
                      {...column.getHeaderProps()}  
                      className="table-header-cell"  
                    >  
                      {column.render("Header")}  
                    </th>  
                  ))}  
                </tr>  
              ))}  
            </thead>  
            <tbody {...getTableBodyProps()}>  
              {rows.map((row) => {  
                prepareRow(row);  
                return (  
                  <tr  
                    {...row.getRowProps()}  
                    onClick={() => handleRowClick(row.original)}  
                    className="table-row"  
                  >  
                    {row.cells.map((cell) => (  
                      <td {...cell.getCellProps()} className="table-cellNow">  
                        {cell.render("Cell")}  
                      </td>  
                    ))}  
                  </tr>  
                );  
              })}  
            </tbody>  
          </table>  
        </div>  
        <div className="tableFooterPagination">  
          <div>hello</div>  
          <div>hello</div>  
          <div>  
            10 per page <BsArrowDown />  
          </div>  
        </div>  
        {modal ? (  
          <TransactionModal person={selectedPerson} setModal={setModal} />  
        ) : null}  
      </div>  
    </>  
  );  
};  

export default Transaction;