import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import properties from "../../../data/properties";

const TableData = () => {
  let theadConent = [
    "Listing Title",
    "Date of request submission",
    "Start Day",
    "End Day",
    "Status",
    "Action",
  ];
  const [showModal, setShowModal] = useState(false); // Trạng thái kiểm soát việc hiển thị modal
  const [selectedPropertyId, setSelectedPropertyId] = useState(null); // Lưu ID của property được chọn để thực hiện exchange

  const handleAcceptClick = (propertyId) => {
    setShowModal(true);
    setSelectedPropertyId(propertyId); // Lưu lại ID của property khi người dùng nhấn Accept
  };
  const handleRefuseClick = () => {
    setShowRefuseModal(true);
  };

  const handleConfirmExchange = () => {
    console.log('Exchange confirmed for property ID:', selectedPropertyId);
    // Thực hiện logic exchange tại đây...
    setShowModal(false); // Đóng modal sau khi đã xác nhận
  };

  let tbodyContent = properties?.slice(0, 4)?.map((item) => (
    <tr key={item.id}>
      <td scope="row">
        <div className="feat_property list favorite_page style2">
          <div className="thumb">
            <img

              className="img-whp cover"
              src={item.img}
              alt="fp1.jpg"
            />
            <div className="thmb_cntnt">
              <ul className="tag mb0">
                <li className="list-inline-item">
                  <a href="#">Exchange</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="details">
            <div className="tc_content">
              <h4>{item.title}</h4>
              <p>
                <span className="flaticon-placeholder"></span>
                {item.location}
              </p>
              <a className="fp_price text-thm" href="#">
                {item.price} VND
                <small>/week</small>
              </a>
            </div>
          </div>
        </div>
      </td>
      {/* End td */}

      <td>30 December, 2020</td>
      <td>30 December, 2020</td>
      <td>30 December, 2020</td>
      {/* End td */}

      <td>
        <span className="status_tag badge">Pending</span>
      </td>
      {/* End td */}


      {/* End td */}
      <td>
        <ul className="action_list mb0" style={{ listStyle: 'none', padding: 0 }}>
          <li className="list-inline-item" data-toggle="tooltip" data-placement="top" title="Accept" style={{ marginRight: '10px' }}>
            <button
              onClick={() => handleAcceptClick(item.id)}
              style={{
                backgroundColor: '#4CAF50', // Màu xanh lá
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                padding: '12px 24px', // Căn chỉnh padding để nội dung nút căn giữa
                cursor: 'pointer',
                outline: 'none',
                width: '80px', // Cố định chiều rộng
                height: '30px', // Cố định chiều cao
                display: 'flex', // Sử dụng flexbox để căn giữa nội dung
                justifyContent: 'center', // Căn giữa theo chiều ngang
                alignItems: 'center', // Căn giữa theo chiều dọc
              }}
            >
              Accept
            </button>
          </li>
          <li className="list-inline-item" data-toggle="tooltip" data-placement="top" title="Refuse">
            <button
              onClick={handleRefuseClick}
              style={{
                backgroundColor: '#f44336', // Màu đỏ
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                padding: '12px 24px',
                cursor: 'pointer',
                outline: 'none',
                width: '80px', // Cố định chiều rộng
                height: '30px', // Cố định chiều cao
                display: 'flex', // Sử dụng flexbox để căn giữa nội dung
                justifyContent: 'center', // Căn giữa theo chiều ngang
                alignItems: 'center', // Căn giữa theo chiều dọc
              }}
            >
              Refuse
            </button>
          </li>
        </ul>
      </td>


      {/* End td */}
    </tr>
  ));

  return (
    <>
      <table className="table">
        <thead className="thead-light">
          <tr>
            {theadConent.map((value, i) => (
              <th scope="col" key={i}>
                {value}
              </th>
            ))}
          </tr>
        </thead>
        {/* End theaad */}

        <tbody>{tbodyContent}</tbody>
      </table>
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Exchange Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to exchange this Timeshare?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            No
          </Button>
          <Button variant="primary" onClick={handleConfirmExchange}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>

    </>

  );
};

export default TableData;
