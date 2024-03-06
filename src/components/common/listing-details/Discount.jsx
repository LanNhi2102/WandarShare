import React, { useState } from 'react';

function Discount() {
  const [formData, setFormData] = useState({
    Code: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Xử lý dữ liệu đầu vào ở đây, ví dụ: gửi dữ liệu đến máy chủ
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        
        <input type="text" name="" value={formData.firstName} onChange={handleChange} />
      </label>
      </form>
      );
}

export default Discount;