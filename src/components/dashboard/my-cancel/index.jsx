import Header from "../../common/header/dashboard/Header";
import SidebarMenu from "../../common/header/dashboard/SidebarMenu";
import MobileMenu from "../../common/header/MobileMenu";
import ChangePassword from "./ChangePassword";
import ProfileInfo from "./ProfileInfo";
import SocialMedia from "./SocialMedia";
import React, { useState } from 'react';

const index = () => {
  const buttonStyle = {
    padding: '10px 15px',
    margin: '5px',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
    fontWeight: 'bold',
  };

  // Styles cho nút "Agree to Cancel" có một số điều chỉnh so với các nút khác
  const agreeButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#4CAF50',
    color: 'white',
  };

  // Styles cho nút "Yes" và "No" trong modal
  const modalButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#007bff',
    color: 'white',
  };

  // Style cho nút "Next" và "Previous"
  const navigationButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#007bff',
    color: 'white',
  };
  const [showModal, setShowModal] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [agreeToRefundPolicy, setAgreeToRefundPolicy] = useState(false);
  const [userInfo, setUserInfo] = useState({ // Khởi tạo trạng thái để lưu thông tin người dùng
    username: '',
    email: '',
    firstName: '',
    lastName: '',
    phoneNumber: '', // Thêm trường số điện thoại
    country: '', // Thêm trường quốc gia
    companyName: '', // Thêm trường tên công ty
    address: '',
    cancellationReason: '',
    // Thêm các trường khác tương tự
  });
  const goToStep = (stepNumber) => {
    if (currentStep === 2 && !agreeToRefundPolicy) {
      alert("You must agree to the refund policy to proceed.");
      return;
    }
    setCurrentStep(stepNumber);
  };
  const modalStyle = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#fff',
    padding: '20px',
    zIndex: 1000,
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  };

  const overlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    zIndex: 1000
  };
  // Inline styles for the progress indicator
  const progressIndicatorStyles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      margin: '20px 0',
    },
    step: {
      width: '60px',
      height: '60px',
      borderRadius: '50%',
      background: '#ddd',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0 10px',
    },
    activeStep: {
      background: 'green',
    },
    line: {
      height: '2px',
      flex: 1,
      background: '#ddd',
      position: 'relative',
      top: '29px',
    },
    activeLine: {
      background: 'green',
    },
  };
  const titleStyle = {
    textAlign: 'center',
    marginBottom: '-150px',
    marginTop: '120px',
    marginLeft: '300px', // Adjusting top margin to bring title closer to progress indicator
    fontSize: '32px', // Size of the title
    fontWeight: 'bold', // Bold text
  };
  const stepContent = {
    1: (
      <>
        <p>Fill in your information</p>
        <ProfileInfo />
      </>
    ),
    2: (
      <>
        <p>Read cancel policy</p>
        <SocialMedia />
      </>
    ),
    3: (
      <>
        <p>Review your info</p>
        <ChangePassword />
      </>
    ),
  };
  const handleModalConfirm = () => {
    alert("Successfully canceled, refund (if any) will be transferred to your wallet, please wait.");
    setShowModal(false);
    // Thêm logic xử lý hủy bỏ tại đây
  };


  return (
    <>
      {/* <!-- Main Header Nav --> */}
      <Header />

      {/* <!--  Mobile Menu --> */}
      <MobileMenu />

      <div className="dashboard_sidebar_menu">
        <div
          className="offcanvas offcanvas-dashboard offcanvas-start"
          tabIndex="-1"
          id="DashboardOffcanvasMenu"
          data-bs-scroll="true"
        >
          <SidebarMenu />
        </div>
      </div>
      {/* End sidebar_menu */}
      <h2 style={titleStyle}>Cancellation and refund process</h2>
      {/* <!-- Our Dashbord --> */}
      <section className="our-dashbord dashbord">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              {/* Progress Indicator */}
              <div style={progressIndicatorStyles.container}>
                {[1, 2, 3].map((step) => (
                  <React.Fragment key={step}>
                    <div
                      style={{
                        ...progressIndicatorStyles.step,
                        ...(currentStep >= step ? progressIndicatorStyles.activeStep : {}),
                      }}
                    >
                      {step}
                    </div>
                    {step < 3 && (
                      <div
                        style={{
                          ...progressIndicatorStyles.line,
                          ...(currentStep > step ? progressIndicatorStyles.activeLine : {}),
                        }}
                      />
                    )}

                  </React.Fragment>
                ))}
              </div>

              {/* Dynamic Content Based on Step */}
              {currentStep === 1 && <ProfileInfo userInfo={userInfo} setUserInfo={setUserInfo} />}
              {currentStep === 2 && (
                <>
                  <SocialMedia />
                  <label>
                    <input type="checkbox" checked={agreeToRefundPolicy} onChange={() => setAgreeToRefundPolicy(!agreeToRefundPolicy)} /> I agree to the refund policy
                  </label>
                </>
              )}
              {currentStep === 3 && (
                <>
                  <ChangePassword userInfo={userInfo} />
                  <button
                    style={agreeButtonStyle}
                    onClick={() => setShowModal(true)}
                  >
                    Agree to Cancel
                  </button>
                </>
              )}

              {/* Navigation Buttons */}
              <div className="navigation-buttons">
                {currentStep > 1 && (
                  <button style={navigationButtonStyle} onClick={() => goToStep(currentStep - 1)}>Previous</button>
                )}
                {currentStep < 3 && (
                  <button style={navigationButtonStyle} onClick={() => goToStep(currentStep + 1)}>Next</button>
                )}
              </div>
            </div>
          </div>
        </div>
        {showModal && (
          <>
            <div style={overlayStyle} onClick={() => setShowModal(false)} />
            <div style={modalStyle}>
              <p>Do you agree with the information above and accept the cancellation?</p>
              <button style={modalButtonStyle} onClick={handleModalConfirm}>Yes</button>
              <button style={modalButtonStyle} onClick={() => setShowModal(false)}>No</button>
            </div>
          </>
        )}
      </section>
    </>
  );
};

export default index;
