import React from 'react';
import './Membership.css'; // Import file CSS

function Membership() {
  return (
    <div className="membership-comparison">
      <div className="membership-option">
        <h2>Basic</h2>
        <p>$5/month</p>
        <p>You Have 10 Posts </p>
        <button>Subscribe</button>
      </div>
      <div className="membership-option">
        <h2>Pro</h2>
        <p>$10/month</p>
        <p>You Have 20 Posts </p>
        <button>Subscribe</button>
      </div>
      <div className="membership-option">
        <h2>Premium</h2>
        <p>$15/month</p>
        <p>You Have 30 Posts </p>
        <button>Subscribe</button>
      </div>
    </div>
  );
}

export default Membership;
