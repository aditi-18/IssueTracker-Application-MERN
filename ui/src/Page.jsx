import React from 'react';
import Contents from './Contents.jsx';

function NavBar() {
  return (
    <div>
      <nav>
        <a href="/" style={{ color: 'white' }}>Home</a>
        {' | '}
        <a href="/#/issues" style={{ color: 'white' }}>Issue List</a>
        {' | '}
        <a href="/#/report" style={{ color: 'white' }}>Report</a>
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