import React from 'react';

const ProfileInfo = ({ userInfo, setUserInfo }) => {
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserInfo(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    return (
        <div className="row">
            <div className="col-lg-6 col-xl-6">
                <div className="my_profile_setting_input form-group">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        className="form-control"
                        id="username"
                        name="username"
                        placeholder="Username"
                        value={userInfo.username}
                        onChange={handleInputChange}
                    />
                </div>
            </div>

            <div className="col-lg-6 col-xl-6">
                <div className="my_profile_setting_input form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        placeholder="Email"
                        value={userInfo.email}
                        onChange={handleInputChange}
                    />
                </div>
            </div>

            <div className="col-lg-6 col-xl-6">
                <div className="my_profile_setting_input form-group">
                    <label htmlFor="firstName">First Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="firstName"
                        name="firstName"
                        placeholder="First Name"
                        value={userInfo.firstName}
                        onChange={handleInputChange}
                    />
                </div>
            </div>

            <div className="col-lg-6 col-xl-6">
                <div className="my_profile_setting_input form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="lastName"
                        name="lastName"
                        placeholder="Last Name"
                        value={userInfo.lastName}
                        onChange={handleInputChange}
                    />
                </div>
            </div>

            <div className="col-lg-6 col-xl-6">
                <div className="my_profile_setting_input form-group">
                    <label htmlFor="phoneNumber">Phone Number</label>
                    <input
                        type="text"
                        className="form-control"
                        id="phoneNumber"
                        name="phoneNumber"
                        placeholder="Phone Number"
                        value={userInfo.phoneNumber}
                        onChange={handleInputChange}
                    />
                </div>
            </div>

            <div className="col-lg-6 col-xl-6">
                <div className="my_profile_setting_input form-group">
                    <label htmlFor="country">Country</label>
                    <input
                        type="text"
                        className="form-control"
                        id="country"
                        name="country"
                        placeholder="Country"
                        value={userInfo.country}
                        onChange={handleInputChange}
                    />
                </div>
            </div>

            <div className="col-lg-6 col-xl-6">
                <div className="my_profile_setting_input form-group">
                    <label htmlFor="companyName">Company Name (if any)</label>
                    <input
                        type="text"
                        className="form-control"
                        id="companyName"
                        name="companyName"
                        placeholder="Company Name"
                        value={userInfo.companyName}
                        onChange={handleInputChange}
                    />
                </div>
            </div>

            <div className="col-xl-12">
                <div className="my_profile_setting_input form-group">
                    <label htmlFor="address">Address</label>
                    <input
                        type="text"
                        className="form-control"
                        id="address"
                        name="address"
                        placeholder="Address"
                        value={userInfo.address}
                        onChange={handleInputChange}
                    />
                </div>
            </div>
            <div className="col-xl-12">
                <div className="my_profile_setting_input form-group">
                    <label htmlFor="cancellationReason">Reason for Cancellation</label>
                    <select
                        className="form-control"
                        id="cancellationReason"
                        name="cancellationReason"
                        value={userInfo.cancellationReason}
                        onChange={handleInputChange}
                    >
                        <option value="Change of Plans">Change of Plans</option>
                        <option value="Health issues">Health issues</option>
                        <option value="Work Issues">Work Issues</option>
                        <option value="Change in Financial Situation">Change in Financial Situation</option>
                        <option value="Natural Disaster or Emergency Event">Natural Disaster or Emergency Event</option>
                        <option value="Traffic or Aviation Issues">Traffic or Aviation Issues</option>
                        <option value="Others">Others</option>
                    </select>
                </div>
            </div>

            {/* Conditional rendering for the 'OtherReason' input field */}
            {userInfo.cancellationReason === 'Others' && (
                <div className="col-xl-12">
                    <div className="my_profile_setting_input form-group">
                        <label htmlFor="otherReason">Other Reason</label>
                        <input
                            type="text"
                            className="form-control"
                            id="otherReason"
                            name="otherReason"
                            placeholder="Please specify"
                            value={userInfo.otherReason}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProfileInfo;
