import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import {
  addKeyword,
} from "../../features/properties/propertiesSlice";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";

// eslint-disable-next-line react/prop-types
const ExchangeFilter = ({ className = "" }) => {
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  // submit handler
  const submitExchange = () => {
    navigate("/listing-exchange");
  };

  return (
    <div className={`home1-advnc-search ${className}`}>
      <ul className="h1ads_1st_list mb0">
        <li className="list-inline-item">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Timeshare or Location"
              // eslint-disable-next-line no-undef
              onChange={(e) => dispatch(addKeyword(e.target.value))}
            />
          </div>
        </li>

        <li className="list-inline-item">
          <div className="search_option_two">
            <div className="candidate_revew_select">
              <select className="selectpicker w100 form-select show-tick">
                <option value="">Property Type</option>
                <option>Apartment</option>
                <option>Bungalow</option>
                <option>Condo</option>
                <option>House</option>
                <option>Land</option>
                <option>Single Family</option>
              </select>
            </div>
          </div>
        </li>

        <li className="list-inline-item">
          <div className="form-group">
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              selectsStart
              startDate={startDate}
              endDate={endDate}
              placeholderText="Start Date"
              className="form-control"
            />
          </div>
        </li>

        <li className="list-inline-item">
          <div className="form-group">
            <DatePicker
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              selectsEnd
              startDate={startDate}
              endDate={endDate}
              minDate={startDate}
              placeholderText="End Date"
              className="form-control"
            />
          </div>
        </li>

        <li className="list-inline-item">
          <div className="search_option_button">
            <button
              onClick={submitExchange}
              type="submit"
              className="btn btn-thm"
            >
              Search
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ExchangeFilter;