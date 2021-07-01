/* eslint "react/react-in-jsx-scope": "off" */
/* globals React ReactDOM */
/* eslint "react/jsx-no-undef": "off" */

// import graphQLFetch from './graphQLFetch.js';

import IssueList from './IssueList.jsx';

/* const sampleIssue = {
  status: 'New',
  Owner: 'Pieta',
  title: 'Completion date should be optional',
}; */

// eslint-disable-next-line react/prefer-stateless-function


// eslint-disable-next-line no-empty-pattern


const element = <IssueList />;
ReactDOM.render(element, document.getElementById('content'));