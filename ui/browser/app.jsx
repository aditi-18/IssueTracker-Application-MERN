/* eslint "react/react-in-jsx-scope": "off" */

/* eslint "react/jsx-no-undef": "off" */

// import graphQLFetch from './graphQLFetch.js';


import 'babel-polyfill';
import 'whatwg-fetch';
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';

import Page from '../src/Page.jsx';


/* const sampleIssue = {
  status: 'New',
  Owner: 'Pieta',
  title: 'Completion date should be optional',
}; */

// eslint-disable-next-line react/prefer-stateless-function


// eslint-disable-next-line no-empty-pattern


const element = (
  <Router>
    <Page />
  </Router>
);
ReactDOM.render(element, document.getElementById('content'));
if (module.hot) {
  module.hot.accept();
}