import React from 'react';

function EmployeeSearch(props) {
  return (
    <form>
      <div className="input-group">
        <input id="employeeSearch" className="input-group-text" type="text"
          placeholder="Search for employee(s)" onChange={props.onChange}/>
        <div className="input-group-append">
          <button className="btn btn-dark" type="submit"><i className="fas fa-search"></i></button>
        </div>
      </div>
    </form>
  )
}

export default EmployeeSearch