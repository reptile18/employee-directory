import React from 'react';
import axios from 'axios';

import EmployeeRow from '../EmployeeRow';
import EmployeeSortableColumn from '../EmployeeSortableColumn';

export default class EmployeeTable extends React.Component {
  state = {
    employees: [],
    sortBy: "",
    sortDir: "up"
  }
  componentDidMount() {
    this.getEmployees();
    axios.get(`https://randomuser.me/api/?results=${this.props.count}&nat=us`).then(res => {
      this.setState({
        employees: res.data.results.map((employee, index) => {
          return { ...employee, index }
        })
      })
    })
  }
  componentDidUpdate(prevProps) {
    if (prevProps.count !== this.props.count) {
      this.getEmployees();
    }
  }
  getEmployees() {
    console.log("am I in here at all?")
    axios.get(`https://randomuser.me/api/?results=${this.props.count}&nat=us`).then(res => {
      this.setState({
        employees: res.data.results.map((employee, index) => {
          return { ...employee, index }
        })
      })
    })
  }
  stateToStateCode(state) {
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
  setSortBy = (key) => {
    if (this.state.sortBy === key) {
      if (this.state.sortDir === "down") {
        this.setState({ sortDir: "up", sortBy: "" })
      }
      else {
        this.setState({ sortDir: "down" })
      }
    }
    else {
      this.setState({ sortBy: key, sortDir: "up" });
    }
  }
  isSortedBy(key) {
    return this.state.sortBy === key;
  }
  sortBy = (firstEmp, secondEmp) => {
    const sortKey = this.state.sortBy;
    const posDot = sortKey.indexOf('.');
    const firstKey = sortKey.substring(0, posDot);
    const secondKey = sortKey.substring(posDot + 1, sortKey.length);
    if (this.state.sortBy === "") {
      return firstEmp.index - secondEmp.index;
    }
    if (this.state.sortDir === "up") {
      return firstEmp[firstKey][secondKey].localeCompare(secondEmp[firstKey][secondKey]);
    }
    else {
      return secondEmp[firstKey][secondKey].localeCompare(firstEmp[firstKey][secondKey]);
    }
  }
  renderRows() {
    return this.state.employees.filter(employee => {
      if (employee.name.last.includes(this.props.filter) ||
        employee.name.first.includes(this.props.filter) ||
        employee.location.city.includes(this.props.filter) ||
        employee.location.state.includes(this.props.filter) ||
        this.stateToStateCode(employee.location.state).includes(this.props.filter)
      ) {
        return true;
      }
      else {
        return false;
      }
    }).sort(this.sortBy)
      .map((employee, index) => {
        return (
          <EmployeeRow
            key={index}
            number={index + 1}
            photo={employee.picture.thumbnail}
            lastName={employee.name.last}
            firstName={employee.name.first}
            phone={employee.phone}
            cell={employee.cell}
            email={employee.email}
            city={employee.location.city}
            stateCode={this.stateToStateCode(employee.location.state)}
          ></EmployeeRow>
        )
      });
  }
  render() {
    return (
      <div>
        <table className="table table-hover">
          <caption>Showing {this.props.count} results filtered on '{this.props.filter}'</caption>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Photo</th>
              <EmployeeSortableColumn
                columnKey="name.last"
                label="Last Name"
                sorted={this.isSortedBy("name.last")}
                sortDir={this.state.sortDir}
                onSort={this.setSortBy}
              />
              <EmployeeSortableColumn
                columnKey="name.first"
                label="First Name"
                sorted={this.isSortedBy("name.first")}
                sortDir={this.state.sortDir}
                onSort={this.setSortBy}
              />
              <th scope="col">Phone</th>
              <th scope="col">Cell</th>
              <th scope="col">Email</th>
              <EmployeeSortableColumn
                columnKey="location.city"
                label="City"
                sorted={this.isSortedBy("location.city")}
                sortDir={this.state.sortDir}
                onSort={this.setSortBy}
              />
            </tr>
          </thead>
          <tbody>
            {this.renderRows()}
          </tbody>
        </table>
      </div>
    )
  }
}