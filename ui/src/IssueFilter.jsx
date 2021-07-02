
/* eslint "react/prefer-stateless-function": "off" */

/* eslint "react/prefer-stateless-function": "off" */
import React from 'react';

import { Link } from 'react-router-dom';

export default class IssueFilter extends React.Component {
  render() {
    return (
      <div>
        <Link to="/issues" style={{ color: 'white' }}>All Issues</Link>
        {' | '}
        <Link to={{ pathname: '/issues', search: '?status=New' }} style={{ color: 'white' }}>
          New Issues
        </Link>
        {' | '}
        <Link to={{ pathname: '/issues', search: '?status=Assigned' }} style={{ color: 'white' }}>
          Assigned Issues
        </Link>
      </div>
    );
  }
}