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
    filter: "",
    count: 50
  }
  filterTo = (event) => {
    this.setState({filter: event.target.value});
  }
  setCount = (count) => {
    this.setState({count: count});
  }
  renderCountButton(count) {
    return (
      <button 
        key={count}
        type="button" 
        className={`btn btn-outline-secondary ${this.state.count === count? "active": ""}`}
        onClick={() => this.setCount(count)}
      >{count}</button>
    )
  }
  render() {
    return (
      <div>
        <div className="jumbotron jumbotron-fluid" style={styles.jumbotron}>
          <h1 className="text-dark" style={styles.jumboHeader}>Employee Directory</h1>
        </div>
        <div className="container">
          <div className="d-flex justify-content-end mb-3">
            <EmployeeSearch onChange={this.filterTo} />
          </div>
          <div className="d-flex justify-content-end mb-3">
            <span>Display 
            <div className="btn-group mx-2">
              {[25,50,100,200].map((count) => this.renderCountButton(count))}
            </div>
             results</span>
          </div>
          <div className="row">
            <div className="col-12">
              <EmployeeTable filter={this.state.filter} count={this.state.count} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}