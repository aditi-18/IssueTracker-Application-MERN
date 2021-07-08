
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
import { Button } from 'react-bootstrap';

class IssueFilter extends React.Component {
  constructor({ location: { search } }) {
    super();
    const params = new URLSearchParams(search);
    this.state = {
      status: params.get('status') || '',
      effortMin: params.get('effortMin') || '',
      effortMax: params.get('effortMax') || '',
      changed: false,
    };
    this.onChangeStatus = this.onChangeStatus.bind(this);
    this.onChangeEffortMin = this.onChangeEffortMin.bind(this);
    this.onChangeEffortMax = this.onChangeEffortMax.bind(this);
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

  onChangeEffortMin(e) {
    const effortString = e.target.value;
    if (effortString.match(/^\d*$/)) {
      this.setState({ effortMin: e.target.value, changed: true });
    }
  }

  onChangeEffortMax(e) {
    const effortString = e.target.value;
    if (effortString.match(/^\d*$/)) {
      this.setState({ effortMax: e.target.value, changed: true });
    }
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
    const { status, effortMin, effortMax } = this.state;
    const { history } = this.props;

    const params = new URLSearchParams();
    if (status) params.set('status', status);
    if (effortMin) params.set('effortMin', effortMin);
    if (effortMax) params.set('effortMax', effortMax);
    const search = params.toString() ? `?${params.toString()}` : '';
    history.push({ pathname: '/issues', search });
  }

  render() {
    const { status, changed } = this.state;
    const { effortMin, effortMax } = this.state;
    return (
      <div className="filter" id="filter">
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
        Effort between:
        {' '}
        <input
          id="now2"
          className="now2"
          size={5}
          value={effortMin}
          onChange={this.onChangeEffortMin}
        />
        {' - '}
        <input
          id="now2"
          className="now2"
          size={5}
          value={effortMax}
          onChange={this.onChangeEffortMax}
        />
        {' '}
        <Button bsStyle="primary" className="now" type="button" onClick={this.applyFilter}>
          Apply
        </Button>
        {' '}
        <Button
          className="now"
          type="button"
          onClick={this.showOriginalFilter}
          disabled={!changed}
        >
          Reset

        </Button>
      </div>
    );
  }
}
export default withRouter(IssueFilter);