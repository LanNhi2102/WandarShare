import React, { useState } from 'react';

const FloorPlans = () => {
  // State for each input field
  const [planDescription, setPlanDescription] = useState('');
  const [planBedrooms, setPlanBedrooms] = useState('');
  const [planBathrooms, setPlanBathrooms] = useState('');
  const [planPrice, setPlanPrice] = useState('');
  const [planSize, setPlanSize] = useState('');
  const [planImage, setPlanImage] = useState(null);

  // State for modal visibility
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  // Handle input change
  const handleInputChange = (setter) => (e) => {
    setter(e.target.value);
  };

  // Handle file input change for plan image
  const handleFileChange = (e) => {
    setPlanImage(e.target.files[0]);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setShowConfirmModal(true); // Show confirmation modal on form submit
  };

  // Handle accept from confirmation modal
  const handleAccept = () => {
    console.log({
      planDescription,
      planBedrooms,
      planBathrooms,
      planPrice,
      planSize,
      planImage
    });

    // Place for submission logic to API or server

    setShowConfirmModal(false); // Hide confirmation modal
    setShowSuccessModal(true); // Show success message modal

    // Reset form fields (optional)
    setPlanDescription('');
    setPlanBedrooms('');
    setPlanBathrooms('');
    setPlanPrice('');
    setPlanSize('');
    setPlanImage(null);
  };

  // Handle refuse from confirmation modal
  const handleRefuse = () => {
    setShowConfirmModal(false); // Simply hide the confirmation modal
  };

  // Handle close of the success modal
  const handleCloseSuccessModal = () => {
    setShowSuccessModal(false);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="row">
        <div className="col-xl-12">
          <div className="my_profile_setting_input form-group">
            <label htmlFor="planDescription">Plan Description</label>
            <input
              type="text"
              className="form-control"
              id="planDescription"
              value={planDescription}
              onChange={handleInputChange(setPlanDescription)}
            />
          </div>
        </div>
        {/* End .col */}

        <div className="col-lg-6 col-xl-4">
          <div className="my_profile_setting_input form-group">
            <label htmlFor="planBedrooms">Plan Bedrooms</label>
            <input
              type="text"
              className="form-control"
              id="planBedrooms"
              value={planBedrooms}
              onChange={handleInputChange(setPlanBedrooms)}
            />
          </div>
        </div>
        {/* End .col */}

        <div className="col-lg-6 col-xl-4">
          <div className="my_profile_setting_input form-group">
            <label htmlFor="planBathrooms">Plan Bathrooms</label>
            <input
              type="text"
              className="form-control"
              id="planBathrooms"
              value={planBathrooms}
              onChange={handleInputChange(setPlanBathrooms)}
            />
          </div>
        </div>
        {/* End .col */}

        <div className="col-lg-6 col-xl-4">
          <div className="my_profile_setting_input form-group">
            <label htmlFor="planPrice">Plan Price</label>
            <input
              type="text"
              className="form-control"
              id="planPrice"
              value={planPrice}
              onChange={handleInputChange(setPlanPrice)}
            />
          </div>
        </div>
        {/* End .col */}


        <div className="col-lg-6 col-xl-4">
          <div className="my_profile_setting_input form-group">
            <label htmlFor="planSize">Plan Size</label>
            <input
              type="text"
              className="form-control"
              id="planSize"
              value={planSize}
              onChange={handleInputChange(setPlanSize)}
            />
          </div>
        </div>
        {/* End .col */}

        <div className="col-lg-6 col-xl-4">
          <div className="my_profile_setting_input form-group">
            <label>Plan Image</label>
            <div className="avatar-upload">
              <div className="avatar-edit">
                <input
                  type="file"
                  id="imageUpload"
                  accept=".png, .jpg, .jpeg"
                  onChange={handleFileChange}
                />
                <label htmlFor="imageUpload"></label>
              </div>
              <div className="avatar-preview">
                <div id="imagePreview" style={{ backgroundImage: `url(${planImage ? URL.createObjectURL(planImage) : ''})` }}></div>
              </div>
            </div>
          </div>
        </div>
        {/* End .col */}

        <div className="col-xl-12">
          <div className="my_profile_setting_input">
            <button type="button" className="btn btn1 float-start">
              Back
            </button>
            <button type="submit" className="btn btn2 float-end">
              Add New TimeShare
            </button>
          </div>
        </div>
      </form>

      {showConfirmModal && (
        <div className="modal">
          <p>Are you sure to create a new Timeshare with this information?</p>
          <button onClick={handleAccept}>Accept</button>
          <button onClick={handleRefuse}>Refuse</button>
        </div>
      )}

      {showSuccessModal && (
        <div className="modal">
          <p>The request to create a new Timeshare has been sent successfully. Please wait for review.</p>
          <button onClick={handleCloseSuccessModal}>OK</button>
        </div>
      )}
    </>
  );
};

export default FloorPlans;

