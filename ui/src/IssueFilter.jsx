
/* eslint "react/prefer-stateless-function": "off" */

/* eslint "react/prefer-stateless-function": "off" */
/* import React from 'react';

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
} */

/** *** */


import React from 'react';
import URLSearchParams from 'url-search-params';
import { withRouter } from 'react-router-dom';

class IssueFilter extends React.Component {
  constructor({ location: { search } }) {
    super();
    const params = new URLSearchParams(search);
    this.state = {
      status: params.get('status') || '',
      changed: false,
    };
    this.onChangeStatus = this.onChangeStatus.bind(this);
    this.applyFilter = this.applyFilter.bind(this);
    this.showOriginalFilter = this.showOriginalFilter.bind(this);
  }

  componentDidUpdate(prevProps) {
    const { location: { search: prevSearch } } = prevProps;
    const { location: { search } } = this.props;
    if (prevSearch !== search) {
      this.showOriginalFilter();
    }
  }

  onChangeStatus(e) {
    this.setState({ status: e.target.value, changed: true });
  }

  showOriginalFilter() {
    const { location: { search } } = this.props;
    const params = new URLSearchParams(search);
    this.setState({
      status: params.get('status') || '',
      changed: false,
    });
  }

  applyFilter() {
    const { status } = this.state;
    const { history } = this.props;
    history.push({
      pathname: '/issues',
      search: status ? `?status=${status}` : '',
    });
  }

  render() {
    const { status, changed } = this.state;
    return (
      <div>
        Status:
        {' '}
        <select value={status} className="now1" id="now1" onChange={this.onChangeStatus}>
          <option value="">(All)</option>
          <option value="New">New</option>
          <option value="Assigned">Assigned</option>
          <option value="Fixed">Fixed</option>
          <option value="Closed">Closed</option>
        </select>
        {' '}
        <button type="button" id="now" className="now" onClick={this.applyFilter}>Apply</button>
        {' '}
        <button
          className="now"
          type="button"
          onClick={this.showOriginalFilter}
          disabled={!changed}
        >
          Reset
        </button>
      </div>
    );
  }
}
export default withRouter(IssueFilter);