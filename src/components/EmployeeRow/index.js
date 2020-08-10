import React from 'react';

function EmployeeRow(props) {
  return (
    <tr>
      <th scope="row">{props.number}</th>
      <td>{props.photo}</td>
      <td>{props.lastName}</td>
      <td>{props.firstName}</td>
      <td>{props.phone}</td>
      <td>{props.cell}</td>
      <td>{props.email}</td>
      <td>{props.city}, {props.stateCode}</td>
    </tr>
  )
}

export default EmployeeRow