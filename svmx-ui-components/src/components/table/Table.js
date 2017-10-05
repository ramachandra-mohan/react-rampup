
import React, { Component } from 'react';

import './css/style.css';

class Table extends Component {

  render() {

    return (

      <div>
        <table className="table">
          <tbody >
            <tr >
              <th >Table heading</th>
              <th >Table heading</th>
              <th >Table heading</th>
              <th >Table heading</th>
            </tr>
            <tr >
              <td >Table cell</td>
              <td >Table cell wide</td>
              <td >Table cell wide wide</td>
              <td >Table cell wide wide wide</td>
            </tr>
            <tr >
              <td >Table cell</td>
              <td >Table cell</td>
              <td >Table cell</td>
              <td >Table cell</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
