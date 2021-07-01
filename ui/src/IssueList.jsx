/* eslint-disable no-unused-vars */


import React from 'react';

import IssueTable from './IssueTable.jsx';
import IssueAdd from './IssueAdd.jsx';
import graphQLFetch from './graphQLFetch.js';
import IssueFilter from './IssueFilter.jsx';

export default class IssueList extends React.Component {
  constructor() {
    super();
    this.state = { issues: [] };
    this.createIssue = this.createIssue.bind(this);
  }

  componentDidMount() {
    this.loadData();
  }

  async loadData() {
    const query = `query {
              issueList {
              id title status Owner
              created effort due
              }
              }`;
      // eslint-disable-next-line no-use-before-define
    const data = await graphQLFetch(query);
    if (data) {
      this.setState({ issues: data.issueList });
    }
  }


  async createIssue(issue) {
    const query = `mutation issueAdd($issue: IssueInputs!) {
              issueAdd(issue: $issue) {
              id
              }
              }`;
      // eslint-disable-next-line no-use-before-define
    const data = await graphQLFetch(query, { issue });
    if (data) {
      this.loadData();
    }
  }

  render() {
    const { issues } = this.state;
    return (
      <React.Fragment>
        <h1>Issue Tracker</h1>
        <IssueFilter />
        <hr />
        <IssueTable issues={issues} />
        <hr />
        <IssueAdd createIssue={this.createIssue} />
      </React.Fragment>
    );
  }
}