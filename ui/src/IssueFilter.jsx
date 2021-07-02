
/* eslint "react/prefer-stateless-function": "off" */

/* eslint "react/prefer-stateless-function": "off" */
import React from 'react';

export default class IssueFilter extends React.Component {
  render() {
    return (
      <div>
        <a href="/#/issues" style={{ color: 'white' }}>All Issues</a>
        {' | '}
        <a href="/#/issues?status=New" style={{ color: 'white' }}>New Issues</a>
        {' | '}
        <a href="/#/issues?status=Assigned" style={{ color: 'white' }}>Assigned Issues</a>
      </div>
    );
  }
}