/* eslint-disable import/extensions */
import { mustBeSignedIn } from './auth.js';

let aboutMessage = 'Issue Tracker API v1.0';

function setMessage(_, { message }) {
  aboutMessage = message;
  return aboutMessage;
}

function getMessage() {
  return aboutMessage;
}

export default { getMessage, setMessage: mustBeSignedIn(setMessage) };