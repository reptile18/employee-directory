import React from 'react';
import EmployeeTable from '../EmployeeTable';
import EmployeeSearch from '../EmployeeSearch';

const styles = {
  jumbotron: {
    backgroundImage: "url(assets/img/pexels-christina-morillo-1181304-min-halved.brightness100.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundFilter: "blur(1px)"
  },
  jumboHeader: {
    fontWeight: "bolder"
  }
}

export default class EmployeeDirectory extends React.Component {
  state = {
    filter: ""
  }
  filterTo = (event) => {
    this.setState({filter: event.target.value});
  }
  render() {
    return (
      <div>
        <div className="jumbotron" style={styles.jumbotron}>
          <h1 className="text-dark" style={styles.jumboHeader}>Employee Directory</h1>
        </div>
        <div className="container">
          <div className="d-flex justify-content-md-end mb-3">
            <EmployeeSearch onChange={this.filterTo} />
          </div>
          <div className="row">
            <div className="col-12">
              <EmployeeTable filter={this.state.filter}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}