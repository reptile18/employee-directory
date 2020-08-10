import React from 'react';
import axios from 'axios';

import EmployeeRow from '../EmployeeRow';

export default class EmployeeTable extends React.Component {
  state = {
    employees: []
  }
  componentDidMount() {
    axios.get('https://randomuser.me/api/?results=200&nat=us').then(res => {
      this.setState({ employees: res.data.results });
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
  renderRows() {
    console.log("employees", typeof this.state.employees, typeof this.state.employees)
    return this.state.employees.map((employee,index) => {
      console.log(employee);
      return (
        <EmployeeRow
          number={index+1}
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
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Photo</th>
              <th scope="col">Last Name</th>
              <th scope="col">First Name</th>
              <th scope="col">Phone</th>
              <th scope="col">Cell</th>
              <th scope="col">Email</th>
              <th scope="col">City</th>
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