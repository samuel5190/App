import React from 'react';  
import './Table.css'; // Import the CSS file 
import { useTable } from 'react-table'; 

const CampaignTable = () => {  
  const data = React.useMemo(  
    () => [  
      {  
        campaign: 'hello',  
        created: 'hello',  
        raised: 'hello',  
        supporters: 'hello',  
        status: 'hello',  
      },  
      {  
        campaign: 'hello',  
        created: 'hello',  
        raised: 'hello',  
        supporters: 'hello',  
        status: 'hello',  
      },  
      
    ],  
    []  
  );  

  const columns = React.useMemo(  
    () => [  
      {  
        Header: 'Campaign',  
        accessor: 'campaign',  
      },  
      {  
        Header: 'Created',  
        accessor: 'created',  
      },  
      {  
        Header: 'Raised',  
        accessor: 'raised',  
      },  
      {  
        Header: 'Supporters',  
        accessor: 'supporters',  
      },  
      {  
        Header: 'Status',  
        accessor: 'status',  
      },  
    ],  
    []  
  );  

  const {  
    getTableProps,  
    getTableBodyProps,  
    headerGroups,  
    rows,  
    prepareRow,  
  } = useTable({ columns, data });  

  return (  
    <div className="table-container">  
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
              <tr {...row.getRowProps()} className="table-row">  
                {row.cells.map(cell => (  
                  <td {...cell.getCellProps()} className="table-cell">  
                    {cell.render('Cell')}  
                  </td>  
                ))}  
              </tr>  
            );  
          })}  
        </tbody>  
      </table>  
    </div>  
  );  
};  

export default CampaignTable;


// import React from 'react';  
// import './Table.css'; // Import the CSS file   
// import { useTable } from 'react-table';   

// const CampaignTable = () => {  

//   const persons = [  
//     { name: "Alice", age: 25, gender: "Female" },  
//     { name: "Bob", age: 30, gender: "Male" },  
//     { name: "Charlie", age: 22, gender: "Male" },  
//   ]; 

//   const columns = React.useMemo(  
//     () => [  
//       {  
//         Header: 'Name',  
//         accessor: 'name',  
//       },  
//       {  
//         Header: 'Age',  
//         accessor: 'age',  
//       },  
//       {  
//         Header: 'Gender',  
//         accessor: 'gender',  
//       }  
//     ],  
//     []  
//   );  

//   const {  
//     getTableProps,  
//     getTableBodyProps,  
//     headerGroups,  
//     rows,  
//     prepareRow,  
//   } = useTable({ columns, persons });  

//   return (  
//     <div className="table-container">  
//       <table {...getTableProps()} className="campaign-table">  
//         <thead>  
//           {headerGroups.map(headerGroup => (  
//             <tr {...headerGroup.getHeaderGroupProps()} className="table-header">  
//               {headerGroup.headers.map(column => (  
//                 <th {...column.getHeaderProps()} className="table-header-cell">  
//                   {column.render('Header')}  
//                 </th>  
//               ))}  
//             </tr>  
//           ))}  
//         </thead>  
//         <tbody {...getTableBodyProps()}>  
//           {rows.map(row => {  
//             prepareRow(row);  
//             return (  
//               <tr {...row.getRowProps()} className="table-row">  
//                 {row.cells.map(cell => (  
//                   <td {...cell.getCellProps()} className="table-cell">  
//                     {cell.render('Cell')}  
//                   </td>  
//                 ))}  
//               </tr>  
//             );  
//           })}  
//         </tbody>  
//       </table>  
//     </div>  
//   );  
// };     

// export default CampaignTable;