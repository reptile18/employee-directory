import React from 'react';

function EmployeeRow(props) {
  return (
    <tr>
      <th scope="row">{props.number}</th>
      <td className="d-none d-xl-table-cell"><img className="thumbnail" src={props.photo} alt={`${props.firstName} ${props.lastName}`}></img></td>
      <td>{props.lastName}</td>
      <td>{props.firstName}</td>
      <td className="d-none d-md-table-cell">{props.phone}</td>
      <td className="d-none d-lg-table-cell">{props.cell}</td>
      <td className="d-none d-xl-table-cell">{props.email}</td>
      <td>{props.city}, {props.stateCode}</td>
    </tr>
  )
}

export default EmployeeRow