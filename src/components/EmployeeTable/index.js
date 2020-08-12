import React, {useState, useEffect} from 'react';
import axios from 'axios';

import EmployeeRow from '../EmployeeRow';
import EmployeeSortableColumn from '../EmployeeSortableColumn';

function EmployeeTable(props) {
  const [employees, setEmployees] = useState([]);
  const [sortBy, setSortBy] = useState("");
  const [sortDir, setSortDir] = useState("up");

  useEffect(() => {
    axios.get(`https://randomuser.me/api/?results=${props.count}&nat=us`).then(res => {
      setEmployees(res.data.results.map((employee, index) => {
          return { ...employee, index }
        }))
    })
  }, [props.count])
  function stateToStateCode(state) {
    switch (state) {
      case 'Alabama':
        return 'AL'
      case 'Alaska':
        return 'AK'
      case 'Arizona':
        return 'AZ'
      case 'Arkansas':
        return 'AR'
      case 'California':
        return 'CA'
      case 'Colorado':
        return 'CO'
      case 'Connecticut':
        return 'CT'
      case 'Delaware':
        return 'DE'
      case 'District of Columbia':
        return 'DC'
      case 'Florida':
        return 'FL'
      case 'Georgia':
        return 'GA'
      case 'Hawaii':
        return 'HI'
      case 'Idaho':
        return 'ID'
      case 'Illinois':
        return 'IL'
      case 'Indiana':
        return 'ID'
      case 'Iowa':
        return 'IA'
      case 'Kansas':
        return 'KS'
      case 'Kentucky':
        return 'KY'
      case 'Louisiana':
        return 'LA'
      case 'Maine':
        return 'ME'
      case 'Maryland':
        return 'MD'
      case 'Massachusetts':
        return 'MA'
      case 'Michigan':
        return 'MI'
      case 'Minnesota':
        return 'MN'
      case 'Mississippi':
        return 'MS'
      case 'Missouri':
        return 'MO'
      case 'Montana':
        return 'MT'
      case 'Nebraska':
        return 'NE'
      case 'Nevada':
        return 'NV'
      case 'New Hampshire':
        return 'NH'
      case 'New Jersey':
        return 'NJ'
      case 'New Mexico':
        return 'NM'
      case 'New York':
        return 'NY'
      case 'North Carolina':
        return 'NC'
      case 'North Dakota':
        return 'ND'
      case 'Ohio':
        return 'OH'
      case 'Oklahoma':
        return 'OK'
      case 'Oregon':
        return 'OR'
      case 'Pennsylvania':
        return 'PA'
      case 'Rhode Island':
        return 'RI'
      case 'South Carolina':
        return 'SC'
      case 'South Dakota':
        return 'SD'
      case 'Tennessee':
        return 'TN'
      case 'Texas':
        return 'TX'
      case 'Utah':
        return 'UT'
      case 'Vermont':
        return 'VT'
      case 'Virginia':
        return 'VA'
      case 'Washington':
        return 'WA'
      case 'West Virginia':
        return 'WV'
      case 'Wisconsin':
        return 'WI'
      case 'Wyoming':
        return 'WY'
      case 'American Samoa':
        return 'AS'
      case 'Guam':
        return 'GU'
      case 'Northern Mariana Islands':
        return 'MP'
      case 'Puerto Rico':
        return 'PR'
      case 'U.S. Virgin Islands':
        return 'VI'
      case 'U.S. Minor Outlying Islands':
        return 'UM'
      default:
        return ''
    }
  }
  function setSort (key) {
    if (sortBy === key) {
      if (sortDir === "down") {
        setSortBy("");
        setSortDir("up");
      }
      else {;
        setSortDir("down")
      }
    }
    else {
      setSortBy(key);
      setSortDir("up");
    }
  }
  function isSortedBy(key) {
    return sortBy === key;
  }
  function sort (firstEmp, secondEmp) {
    const sortKey = sortBy;
    const posDot = sortKey.indexOf('.');
    const firstKey = sortKey.substring(0, posDot);
    const secondKey = sortKey.substring(posDot + 1, sortKey.length);
    if (sortBy === "") {
      return firstEmp.index - secondEmp.index;
    }
    if (sortDir === "up") {
      return firstEmp[firstKey][secondKey].localeCompare(secondEmp[firstKey][secondKey]);
    }
    else {
      return secondEmp[firstKey][secondKey].localeCompare(firstEmp[firstKey][secondKey]);
    }
  }
  function renderRows() {
    return employees.filter(employee => {
      if (employee.name.last.toLowerCase().includes(props.filter.toLowerCase()) ||
        employee.name.first.toLowerCase().includes(props.filter.toLowerCase()) ||
        employee.location.city.toLowerCase().includes(props.filter.toLowerCase()) ||
        employee.location.state.toLowerCase().includes(props.filter.toLowerCase()) ||
        stateToStateCode(employee.location.state).includes(props.filter.toUpperCase())
      ) {
        return true;
      }
      else {
        return false;
      }
    }).sort(sort)
      .map((employee, index) => {
        return (
          <EmployeeRow
            key={index}
            number={employee.index + 1}
            photo={employee.picture.thumbnail}
            lastName={employee.name.last}
            firstName={employee.name.first}
            phone={employee.phone}
            cell={employee.cell}
            email={employee.email}
            city={employee.location.city}
            stateCode={stateToStateCode(employee.location.state)}
          ></EmployeeRow>
        )
      });
  }
  return (
    <div className="container">
      <table className="table table-hover">
        <caption>Showing {props.count} results filtered on '{props.filter}'</caption>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col" className="d-none d-xl-table-cell">Photo</th>
            <EmployeeSortableColumn
              columnKey="name.last"
              label="Last&nbsp;Name"
              sorted={isSortedBy("name.last")}
              sortDir={sortDir}
              onSort={setSort}
            />
            <EmployeeSortableColumn
              columnKey="name.first"
              label="First&nbsp;Name"
              sorted={isSortedBy("name.first")}
              sortDir={sortDir}
              onSort={setSort}
            />
            <th scope="col" className="d-none d-md-table-cell">Phone</th>
            <th scope="col" className="d-none d-lg-table-cell">Cell</th>
            <th scope="col" className="d-none d-xl-table-cell">Email</th>
            <EmployeeSortableColumn
              columnKey="location.city"
              label="City"
              sorted={isSortedBy("location.city")}
              sortDir={sortDir}
              onSort={setSort}
            />
          </tr>
        </thead>
        <tbody>
          {renderRows()}
        </tbody>
      </table>
    </div>
  )
}
export default EmployeeTable