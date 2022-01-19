import React from 'react';

const tableStyle = {
    border: '1px solid black',
    borderCollapse: 'collapse',
    textAlign: 'center',
    width: '100%'
}

const tdStyle = {
    border: '1px solid #85C1E9',
    background: 'white',
    padding: '5px'
};

const thStyle = {
    border: '1px solid #3498DB',
    background: '#3498DB',
    color: 'white',
    padding: '5px'
};

const Table1 = ({ id, columns, data }) => (
  <table style={tableStyle}>
    <tbody>
      <tr>
        {columns.map(({ path, name }) => (
          <th style={thStyle} key={path}>{name}</th>
        ))}
      </tr>
      {data.map((rowData) => (
        <tr key={rowData[id]}>
          {columns.map(({ path }) => (
            <td style={tdStyle} key={path}>
              {rowData[path]}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
);

// Example use --------------------

const Table = () => {
  const columns = [
    { path: "id",   name: "Order ID" },
    { path: "parkcode", name: "Parking Area Code" },
    { path: "assetid",  name: "Asset ID" },
    { path: "assareacode",  name: "Assembly Area Code " },
    { path: "pickupstatus",  name: "Pickup Status" },
    { path: "deliverystatus",  name: "Delivery Status" }
    
  ];
  const data = [
    { id: 1, assetinf: 'Kate',  placetimestamp: '10-04-19 12:00:17', acktimestamp: '10-04-19 12:00:17',delivtimestamp:'10-04-19 12:00:17' },
    { id: 2, assetinf: 'Kate',  placetimestamp: '10-04-19 12:00:17', acktimestamp: '10-04-19 12:00:17',delivtimestamp:'10-04-19 12:00:17' },
    { id: 3, assetinf: 'Kate',  placetimestamp: '10-04-19 12:00:17', acktimestamp: '10-04-19 12:00:17',delivtimestamp:'10-04-19 12:00:17' },
    { id: 4, assetinf: 'Kate',  placetimestamp: '10-04-19 12:00:17', acktimestamp: '10-04-19 12:00:17',delivtimestamp:'10-04-19 12:00:17' }
  ];

  return (
    <div>
      <Table1 id="id" columns={columns} data={data} />
    </div>
  );
};

export default Table;