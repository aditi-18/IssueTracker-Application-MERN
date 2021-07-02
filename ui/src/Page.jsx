import React from 'react';
import { NavLink } from 'react-router-dom';
import Contents from './Contents.jsx';

function NavBar() {
  return (
    <div>
      <nav>
        <NavLink exact to="/" style={{ color: 'white' }}>Home</NavLink>
        {' | '}
        <NavLink to="/issues" style={{ color: 'white' }}>Issue List</NavLink>
        {' | '}
        <NavLink to="/report" style={{ color: 'white' }}>Report</NavLink>
      </nav>
    </div>
  );
}
export default function Page() {
  return (
    <div>
      <NavBar />
      <Contents />
    </div>
  );
}