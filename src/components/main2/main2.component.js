import React, { Component } from 'react'
import Header from '../header/header.component';
class Main2 extends Component {
  constructor(props) {
    super(props);
    this.state ={
      value: '1.59%',
      tableData: [{
        name: 'csxCorp',
        mweight: '7.57',
        weight: '7.57'
      },
      {
        name: 'cumminsInc',
        mweight: '7.57',
        weight: '7.57'
      },
      {
        name: 'Eaton Corp',
        mweight: '7.57',
        weight: '7.57'
      },
      {
        name: 'FedEx Corp',
        mweight: '7.57',
        weight: '7.57'
      },
      {
        name: 'Harris Corp',
        mweight: '7.57',
        weight: '7.57'
      }]
    }
    this.change = this.change.bind(this);
  }
  change(event) {
      this.setState({
        value: event.target.value
      })
  }
  returnTable() {
    const table = this.state.tableData.map((data, index) =>
    <tr key = {index+data.name} >
        <td>{data.name}</td>
        <td>{data.mweight}%</td>
        <td><input type="number" value={data.weight} onChange={this.change}/>(%)</td>
      </tr>
    )
    return table;
  }
  render() {
    return (
      <div>
        <Header />  
        <div className="main2">
        <div className="container">
        <table className="table table-custom">
    <thead>
    <tr>
    <th>Category</th>
    <th>Model Weight (%)</th>
    <th>Weight (100%)</th>
  </tr>
    </thead>
    <tbody>
      {this.returnTable()}
    </tbody>
  </table>
  </div>
      </div>
      </div>
    )
  }
}

export default Main2;
