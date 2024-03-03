

import { useState } from "react";

const ProfileInfo = () => {
    const [profile, setProfile] = useState(null);
    const [cancellationReason, setCancellationReason] = useState('');
    const [otherReason, setOtherReason] = useState('');

    // upload profile
    const uploadProfile = (e) => {
        setProfile(e.target.files[0]);
    };
    const handleCancellationReasonChange = (event) => {
        const selectedReason = event.target.value;
        if (selectedReason !== 'Others') {
            // Clear otherReason state if the selected reason is not "Others"
            setOtherReason('');
        }
        setCancellationReason(selectedReason);
    };

    return (
        <div className="row">

            {/* End .col */}

            <div className="col-lg-6 col-xl-6">
                <div className="my_profile_setting_input form-group">
                    <label htmlFor="formGroupExampleInput1">Username</label>
                    <input
                        type="text"
                        className="form-control"
                        id="formGroupExampleInput1"
                        placeholder="alitfn"
                    />
                </div>
            </div>
            {/* End .col */}

            <div className="col-lg-6 col-xl-6">
                <div className="my_profile_setting_input form-group">
                    <label htmlFor="formGroupExampleEmail">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        id="formGroupExampleEmail"
                        placeholder="creativelayers@gmail.com"
                    />
                </div>
            </div>
            {/* End .col */}

            <div className="col-lg-6 col-xl-6">
                <div className="my_profile_setting_input form-group">
                    <label htmlFor="formGroupExampleInput3">First Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="formGroupExampleInput3"
                    />
                </div>
            </div>
            {/* End .col */}

            <div className="col-lg-6 col-xl-6">
                <div className="my_profile_setting_input form-group">
                    <label htmlFor="formGroupExampleInput4">Last Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="formGroupExampleInput4"
                    />
                </div>
            </div>
            {/* End .col */}



            <div className="col-lg-6 col-xl-6">
                <div className="my_profile_setting_input form-group">
                    <label htmlFor="formGroupExampleInput8">Phone Number</label>
                    <input
                        type="text"
                        className="form-control"
                        id="formGroupExampleInput8"
                    />
                </div>
            </div>
            {/* End .col */}



            <div className="col-lg-6 col-xl-6">
                <div className="my_profile_setting_input form-group">
                    <label htmlFor="formGroupExampleInput11">Country</label>
                    <input
                        type="text"
                        className="form-control"
                        id="formGroupExampleInput11"
                    />
                </div>
            </div>
            {/* End .col */}

            <div className="col-lg-6 col-xl-6">
                <div className="my_profile_setting_input form-group">
                    <label htmlFor="formGroupExampleInput12">
                        Company Name (if have)
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="formGroupExampleInput12"
                    />
                </div>
            </div>
            {/* End .col */}

            <div className="col-xl-12">
                <div className="my_profile_setting_input form-group">
                    <label htmlFor="formGroupExampleInput13">Address</label>
                    <input
                        type="text"
                        className="form-control"
                        id="formGroupExampleInput13"
                    />
                </div>
            </div>
            {/* End .col */}

            {/* Reason for cancellation */}
            <div className="col-xl-12">
                <div className="my_profile_setting_input form-group">
                    <label htmlFor="cancellationReason">Reason for cancellation</label>
                    <select
                        className="form-control"
                        id="cancellationReason"
                        value={cancellationReason}
                        onChange={handleCancellationReasonChange}
                    >
                        <option value="Change of Plans">Change of Plans</option>
                        <option value="Health issues">Health issues</option>
                        <option value="Work Issues">Work Issues</option>
                        <option value="Change in Financial Situation">Change in Financial Situation</option>
                        <option value="Natural Disaster or Emergency Event">Natural Disaster or Emergency Event</option>
                        <option value="Traffic or Aviation Issues">Traffic or Aviation Issues</option>
                        <option value="Others">Others</option>
                    </select>
                    {/* Show input field only if "Others" is selected */}

                </div>
            </div>
            {/* End Reason for cancellation */}

        </div>
    );
};

export default ProfileInfo;
