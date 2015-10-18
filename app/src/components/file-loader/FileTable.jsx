'use strict';

import React from 'react';
import ReactCSS from 'reactcss';
import { Link } from 'react-router';

//Table
import {Table, TableHeader, TableRow, TableRowColumn, TableBody, TableHeaderColumn } from 'mat-lib/table';

export default class FileTable extends ReactCSS.Component {
  constructor() {
    super();
    this.state = {
      fixedHeader: false,
      selectable: true,
      enableSelectAll: false,
      displaySelectAll: false,
      adjustForCheckbox: false,
      displayRowCheckbox: false,
      showRowHover: true,
    };
  }

  _handleClick(event, rowNumber) {
    console.log(this.props.rows[event].name);
    console.log(rowNumber);
    console.log("sup")

    // this.context.router.transitionTo('/browser/' + rowName);

    // window.location.assign("/browser/" + rowName);
  }

  render() {
    return (
      <Table
          fixedHeader={this.state.fixedHeader}
          selectable={this.state.selectable}
          
          >
          <TableHeader
            enableSelectAll={this.state.enableSelectAll}
            displaySelectAll={this.state.displaySelectAll}
            adjustForCheckbox={this.state.adjustForCheckbox}>
            <TableRow
              displayRowCheckbox={this.state.displayRowCheckbox}
              selectable={false}>
              <TableHeaderColumn>Filename</TableHeaderColumn>
              <TableHeaderColumn>Experiment</TableHeaderColumn>
              <TableHeaderColumn>Date created</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody
            showRowHover={this.state.showRowHover}
            displayRowCheckbox={this.state.displayRowCheckbox}>
            {this.props.rows.map(function(row) {
              return (
                <TableRow
                  selectable={this.state.selectable}
                  key={row.name}>
                  <TableRowColumn>{row.name}</TableRowColumn>
                  <TableRowColumn>{row.experiment}</TableRowColumn>
                  <TableRowColumn>{row.created}</TableRowColumn>
                </TableRow>
              );
            }, this)} // you can pass an arg to define 'this' in the callback!
          </TableBody>
        </Table>
    );
  }
}
