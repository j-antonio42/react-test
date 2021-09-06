import React from 'react';
import { Table } from 'reactstrap';

const DataTable = (props) => {
    const {data} = props
  return (
    <Table>
    <thead>
      <tr>
        <th>#</th>
        <th>Nombre</th>
        <th>Correo</th>
      </tr>
    </thead>
    <tbody>
      {
        data.map((data, index) => {
        return   <tr>
          <td>{index + 1}</td>
          <td>{data.name}</td>
          <td>{data.email}</td>
          </tr>
          })
        
      }
    </tbody>
  </Table>
  );
}

export default DataTable;