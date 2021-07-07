import React from 'react';

import { Link, NavLink, withRouter } from 'react-router-dom';

const IssueRow = withRouter(({
  issue,
  location: { search },
  closeIssue,
  deleteIssue,
  index,
}) => {
  const selectLocation = { pathname: `/issues/${issue.id}`, search };
  return (
    <tr>
      <td>{issue.id}</td>
      <td>{issue.status}</td>
      <td>{issue.Owner}</td>
      <td>{issue.created.toDateString()}</td>
      <td>{issue.effort}</td>
      <td>{issue.due ? issue.due.toDateString() : ' '}</td>
      <td>{issue.title}</td>
      <td>
        <Link to={`/edit/${issue.id}`} style={{ color: 'white' }}>Edit</Link>
        {' | '}
        <NavLink to={selectLocation} style={{ color: 'white' }}>Select</NavLink>
        <button type="button" className="trial" id="trial" onClick={() => { closeIssue(index); }}>
          Close
        </button>
        <button type="button" className="trial" id="trial" onClick={() => { deleteIssue(index); }}>
          Delete
        </button>
      </td>

    </tr>
  );
});

export default function IssueTable({ issues, closeIssue, deleteIssue }) {
  // eslint-disable-next-line no-undef
  const issueRows = issues.map((issue, index) => (
    <IssueRow
      key={issue.id}
      issue={issue}
      closeIssue={closeIssue}
      index={index}
      deleteIssue={deleteIssue}
      index={index}
    />

  ));
  return (
    <div>
      <table className="bordered-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Status</th>
            <th>Owner</th>
            <th>Created</th>
            <th>Effort</th>
            <th>Due Date</th>
            <th>Title</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {issueRows}
        </tbody>
      </table>
    </div>
  );
}