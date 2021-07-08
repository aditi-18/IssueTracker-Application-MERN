import React from 'react';
import PropTypes from 'prop-types';
import {
  Form, FormControl, FormGroup, ControlLabel, Button,
} from 'react-bootstrap';

export default class IssueAdd extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const form = document.forms.issueAdd;
    const issue = {
      owner: form.owner.value,
      title: form.title.value,
      due: new Date(new Date().getTime() + 1000 * 60 * 60 * 24 * 10),
    };
    const { createIssue } = this.props;
    createIssue(issue);
    form.owner.value = ''; form.title.value = '';
  }

  render() {
    return (
      <Form inline name="issueAdd" onSubmit={this.handleSubmit}>
        <FormGroup class ="trial" id="trial">
          <ControlLabel><div class="old" id="old">Owner:</div></ControlLabel>
          {' '}
          <FormControl type="text" name="Owner" />
        </FormGroup>
        {' '}
        <FormGroup>
          <ControlLabel><div class="old" id="old">Title:</div></ControlLabel>
          {' '}
          <FormControl type="text" name="titlee" />
        </FormGroup>
        {' '}
        <Button bsStyle="primary" type="submit" class="btnnew" id="btnew">Add</Button>
      </Form>
    );
  }
}

IssueAdd.propTypes = {
  createIssue: PropTypes.func.isRequired,
};