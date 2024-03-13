import React, { useState } from 'react';

function Bill() {
  const [stayData, setStayData] = useState({
    checkInDate: '',
    checkOutDate: '',
    numberOfGuests: '',
    roomType: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStayData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, e.g., send data to server
    console.log(stayData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Check-in Date:
        <input type="date" name="checkInDate" value={stayData.checkInDate} onChange={handleChange} />
      </label>
      <br />
      <label>
        Check-out Date:
        <input type="date" name="checkOutDate" value={stayData.checkOutDate} onChange={handleChange} />
      </label>
      <br />
      <label>
        Number of Guests:
        <select name="numberOfGuests" value={stayData.numberOfGuests} onChange={handleChange}>
          <option value="">Select</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>  
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
        </select>
      </label>
      <br />
      <label>
        Room Type:
        <select name="roomType" value={stayData.roomType} onChange={handleChange}>
          <option value="">Select</option>
          <option value="Apartment">Apartment</option>
          <option value="standard">Standard</option>
          <option value="deluxe">Deluxe</option>
          <option value="suite">Suite</option>
        </select>
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Bill;
