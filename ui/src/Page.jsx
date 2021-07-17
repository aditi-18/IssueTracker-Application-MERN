/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable no-unused-vars */
import React from 'react';
import {
  Navbar, Nav, NavItem, NavDropdown, Grid,Col,
  MenuItem, Glyphicon, Tooltip, OverlayTrigger,
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Contents from './Contents.jsx';
import IssueAddNavItem from './IssueAddNavItem.jsx';
import Search from './Search.jsx';

function NavBar() {
  return (
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>Issue Tracker</Navbar.Brand>
      </Navbar.Header>
      <Nav>
        <LinkContainer exact to="/">
          <NavItem>Home</NavItem>
        </LinkContainer>
        <LinkContainer to="/issues">
          <NavItem>Issue List</NavItem>
        </LinkContainer>
        <LinkContainer to="/report">
          <NavItem>Report</NavItem>
        </LinkContainer>
      </Nav>
      <Col sm={5}>
 <Navbar.Form>
 <Search />
 </Navbar.Form>
 </Col>
      <Nav pullRight>
        <IssueAddNavItem />
        <NavDropdown
          id="user-dropdown"
          title={<Glyphicon glyph="option-vertical" />}
          noCaret
        >
          <LinkContainer to="/about">
            <MenuItem>About</MenuItem>
          </LinkContainer>
        </NavDropdown>
      </Nav>
    </Navbar>
  );
}
function Footer() {
  return (
    <small>
      <p className="text-center">
        <h6>Created by Aditi Shrivastava. Full source code available at-</h6>
        {' '}
        <a href="https://github.ccs.neu.edu/NEU-CS5610-SU21/Aditi-Book" target="_blank">
          <h6>GitHub repository</h6>
        </a>
      </p>
    </small>
  );
}

export default function Page() {
  return (
    <div>
      <NavBar />
      <Grid>
        <Contents />
      </Grid>
      <Footer />
    </div>
  );
}