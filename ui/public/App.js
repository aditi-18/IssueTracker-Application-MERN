/* eslint-disable no-undef */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-use-before-define */
/* eslint-disable import/no-unresolved */


const _IssueList = _interopRequireDefault(require('./IssueList.jsx'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint "react/react-in-jsx-scope": "off" */

/* globals React ReactDOM */

/* eslint "react/jsx-no-undef": "off" */
// import graphQLFetch from './graphQLFetch.js';

/* const sampleIssue = {
  status: 'New',
  Owner: 'Pieta',
  title: 'Completion date should be optional',
}; */
// eslint-disable-next-line react/prefer-stateless-function
// eslint-disable-next-line no-empty-pattern
const element = /* #__PURE__ */React.createElement(_IssueList.default, null);
ReactDOM.render(element, document.getElementById('content'));