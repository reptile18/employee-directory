import React from 'react';
import './style.css';

const styles = {
  sortedColumn: {
    fontDecoration: "underline"
  },
  unsortedColumn: {
    fontDecoration: "none"
  },
  extremeLightText: {
    color: "#CCC"
  }
}

export default class EmployeeSortableColumn extends React.Component {
  sortIcon() {
    if (this.props.sorted) {
      return <i className={`fas fa-sort-${this.props.sortDir}`}></i>
    }
    else {
      return <i style={styles.extremeLightText} className="fas fa-sort"></i>
    }
  }
  render() {
    return (
      <th
        scope="col"
        onClick={() => {this.props.onSort(this.props.columnKey)}}
        onMouseOver={this.onHover}
        onMouseOut={this.onUnhover  }
      >
        <span 
          className="sortableColumn"
          style={styles.unsortedColumn}
        >{this.props.label}&nbsp;{this.sortIcon()}</span>
      </th>
    )
  }
}