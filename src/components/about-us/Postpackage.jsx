import React from 'react';
import './Postpackage.css'; // Import file CSS

function Postpackage() {
  return (
    <div className="Postpackage-comparison">
      <div className="Postpackage-option">
        <h2>Basic</h2>
        <p>100.000VND/month</p>
        <p>You Have 10 Posts </p>

        <button>Subscribe</button>
      </div>
      <div className="Postpackage-option">
        <h2>Pro</h2>
        <p>500.000VND/month</p>
        <p>You Have 20 Posts </p>
        <button>Subscribe</button>
      </div>
      <div className="Postpackage-option">
        <h2>Premium</h2>
        <p>1.000.000VND/month</p>
        <p>You Have 30 Posts </p>
        <button>Subscribe</button>
      </div>
    </div>
  );
}

export default Postpackage;
