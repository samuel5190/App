import React, { useState } from 'react';  
import './Contacts.css';  
import { useTable } from 'react-table';  
import { BsArrowDown } from 'react-icons/bs';  
import { BiSearch } from 'react-icons/bi';  
import { useNavigate } from 'react-router-dom';  

const Contacts = ({persons}) => {  
  const [selectedPerson, setSelectedPerson] = useState(null);  
  const [searchTerm, setSearchTerm] = useState(""); // State for search term  
  const Nav = useNavigate();  

  // const persons = [  
  //   { name: "Alice", amount: 25, date: "22/03/2024", campaign: "Save the tree",   
  //     message: "I’m so proud to be a changemaker. #Love", email: "alice@gmail.com",   
  //     contribution: "1,000", contact_since: "22/03/2024" },  
  //   { name: "Bob", amount: 30, date: "22/03/2024", campaign: "Save the tree",   
  //     message: "I’m so proud to be a changemaker. #Love", email: "bobby@gmail.com",   
  //     contribution: "1,000", contact_since: "22/03/2024" },  
  //   { name: "Charlie", amount: 22, date: "22/03/2024", campaign: "Save the tree",   
  //     message: "I’m so proud to be a changemaker. #Love", email: "charles@gmail.com",   
  //     contribution: "1,000", contact_since: "22/03/2024" },  
  //   { name: "john", amount: 22, date: "22/03/2024", campaign: "Save the tree",   
  //     message: "I’m so proud to be a changemaker. #Love", email: "joeDoe@gmail.com",   
  //     contribution: "1,000", contact_since: "22/03/2024" },  
  // ];  

  // Filter the persons based on the search term  
  const filteredPersons = persons.filter(person =>  
    person.name.toLowerCase().includes(searchTerm.toLowerCase())  
  );  
  

  const columns = React.useMemo(  
    () => [  
      {  
        Header: 'Name',  
        accessor: 'name',  
      },  
      {  
        Header: 'Email',  
        accessor: 'email',  
      },  
      {  
        Header: 'Contribution',  
        accessor: 'amount',  
      },  
      {  
        Header: 'Contact since',  
        accessor: 'donationDate',  
      }  
    ],  
    []  
  );  

  const handleRowClick = (person) => {  
    console.log(person);  
    // Navigate to the donor details page  
    Nav('/track/details', { state: { person } }); // Pass person data as state  
  };  

  const {  
    getTableProps,  
    getTableBodyProps,  
    headerGroups,  
    rows,  
    prepareRow,  
  } = useTable({ columns, data: filteredPersons }); // Use filtered data  

  return (  
    <>  
      <div className="transactionSearchSide">  
        <div className="SearchSideTransaction">  
          <div className="searchBox">  
            <BiSearch color="gray" />  
            <input  
              type="text"  
              placeholder="Search by name"  
              value={searchTerm} // Bind input value to searchTerm state  
              onChange={(e) => setSearchTerm(e.target.value)} // Update search term on change  
            />  
          </div>  
        </div>  
      </div>  
      <div className='tableWrapperTransaction'>  
        <div className="table-containerTransaction">  
          <table {...getTableProps()} className="campaign-table">  
            <thead>  
              {headerGroups.map(headerGroup => (  
                <tr {...headerGroup.getHeaderGroupProps()} className="table-header">  
                  {headerGroup.headers.map(column => (  
                    <th {...column.getHeaderProps()} className="table-header-cell">  
                      {column.render('Header')}  
                    </th>  
                  ))}  
                </tr>  
              ))}  
            </thead>  
            <tbody {...getTableBodyProps()}>  
              {rows.map(row => {  
                prepareRow(row);  
                return (  
                  <tr {...row.getRowProps()} onClick={() => handleRowClick(row.original)} className="table-row">  
                    {row.cells.map(cell => (  
                      <td {...cell.getCellProps()} className="table-cellNow">  
                        {cell.render('Cell')}  
                      </td>  
                    ))}  
                  </tr>  
                );  
              })}  
            </tbody>  
          </table>  
        </div>  
        <div className='tableFooterPagination'>  
          <div>hello</div>  
          <div>hello</div>  
          <div>10 per page <BsArrowDown/></div>  
        </div>  
      </div>  
    </>  
  );  
}  

export default Contacts;