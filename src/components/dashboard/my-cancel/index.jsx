import Header from "../../common/header/dashboard/Header";
import SidebarMenu from "../../common/header/dashboard/SidebarMenu";
import MobileMenu from "../../common/header/MobileMenu";
import ChangePassword from "./ChangePassword";
import ProfileInfo from "./ProfileInfo";
import SocialMedia from "./SocialMedia";
import React, { useState } from 'react';

const index = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [agreeToRefundPolicy, setAgreeToRefundPolicy] = useState(false);
  const goToStep = (stepNumber) => {
    if (currentStep === 2 && !agreeToRefundPolicy) {
      alert("You must agree to the refund policy to proceed.");
      return;
    }
    setCurrentStep(stepNumber);
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
              {currentStep === 1 && <ProfileInfo />}
              {currentStep === 2 && (
                <>
                  <SocialMedia />
                  <label>
                    <input type="checkbox" checked={agreeToRefundPolicy} onChange={() => setAgreeToRefundPolicy(!agreeToRefundPolicy)} /> I agree to the refund policy
                  </label>
                </>
              )}
              {currentStep === 3 && <ChangePassword />}

              {/* Navigation Buttons */}
              <div className="navigation-buttons">
                {currentStep > 1 && (
                  <button onClick={() => goToStep(currentStep - 1)}>Previous</button>
                )}
                {currentStep < 3 && (
                  <button onClick={() => goToStep(currentStep + 1)}>Next</button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default index;
