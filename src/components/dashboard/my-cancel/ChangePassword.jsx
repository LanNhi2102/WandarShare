import React from 'react';
import { useProperties } from './PropertiesContext';

const ChangePassword = ({ userInfo }) => {
  const { selectedProperty } = useProperties();
  const calculateRefundDetails = () => {
    if (!selectedProperty) return { cancellationFeePercentage: 0, totalRefund: 0 };

    const today = new Date();
    const startDay = new Date(selectedProperty.startDay);
    const diffDays = Math.ceil((startDay - today) / (1000 * 60 * 60 * 24));

    let cancellationFeePercentage = 0;
    if (diffDays < 1) cancellationFeePercentage = 50;
    else if (diffDays < 3) cancellationFeePercentage = 10;

    const totalRefund = selectedProperty.price - (selectedProperty.price * cancellationFeePercentage / 100);

    return { cancellationFeePercentage, totalRefund };
  };

  const { cancellationFeePercentage, totalRefund } = calculateRefundDetails();
  // Cập nhật styles
  const containerStyle = {
    backgroundColor: '#f0f0f0', // Background cho khung
    padding: '20px', // Padding cho khung
    borderRadius: '8px', // Làm tròn góc của khung
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)', // Bóng đổ để khung nổi bật hơn
    margin: '20px 0', // Margin xung quanh khung
    border: '2px solid black', // Thêm viền đen
  };

  const titleStyle = {
    textAlign: 'center', // Căn giữa tiêu đề
    marginBottom: '20px',
    fontWeight: 'bold',
    fontSize: '24px', // Tăng kích thước chữ
    color: '#000000',  // Khoảng cách giữa tiêu đề và nội dung
  };

  const dividerStyle = {
    borderBottom: '2px solid black', // Thêm viền ngang ngăn cách
    paddingBottom: '10px', // Padding dưới cho tiêu đề
  };

  const boldLabelStyle = {
    fontWeight: 'bold',
    fontSize: '15px', // In đậm label
  };

  return (
    <div style={containerStyle}>
      <div style={{ ...titleStyle, ...dividerStyle }}>Customer Information</div> {/* Cập nhật tiêu đề và thêm viền ngăn cách */}
      <p><span style={boldLabelStyle}>Username:</span> {userInfo.username}</p>
      <p><span style={boldLabelStyle}>Email:</span> {userInfo.email}</p>
      <p><span style={boldLabelStyle}>First Name:</span> {userInfo.firstName}</p>
      <p><span style={boldLabelStyle}>Last Name:</span> {userInfo.lastName}</p>
      <p><span style={boldLabelStyle}>Phone Number:</span> {userInfo.phoneNumber}</p>
      <p><span style={boldLabelStyle}>Country:</span> {userInfo.country}</p>
      <p><span style={boldLabelStyle}>Company Name:</span> {userInfo.companyName}</p>
      <p><span style={boldLabelStyle}>Address:</span> {userInfo.address}</p>
      <p><span style={boldLabelStyle}>Cancellation Reason:</span> {userInfo.cancellationReason}</p>

      {/* Timeshare Information Section */}
      <div style={containerStyle}>
        <h3 style={titleStyle}>Timeshare Information</h3>
        {selectedProperty ? (
          <>
            <p><span style={boldLabelStyle}>Name:</span> {selectedProperty.title}</p>
            <p><span style={boldLabelStyle}>Type:</span> {selectedProperty.type}</p>
            <p><span style={boldLabelStyle}>Price:</span> {selectedProperty.price} VND</p>
            <p><span style={boldLabelStyle}>Cancellation Fee Percentage:</span> {cancellationFeePercentage}%</p>
            <p><span style={boldLabelStyle}>Total Refund:</span> {totalRefund} VND</p>
          </>
        ) : (
          <p>No property selected.</p>
        )}
      </div>
    </div>
  );
};

export default ChangePassword;
