import { Calendar } from "react-check-in-out-calendar";

const ContactWithAgent = () => {
  return (
    <form action="#">
      <ul className="sasw_list mb0">
        {/* End li */}
        <li className="search_area">
          <div className="form-group mb-3">
          </div>
          
<div className="col-lg-8 col-xl-8">
        <div className="my_profile_setting_input form-group">
          <input
            type="date"
            className="form-control"
            id="startDay"
          />
          <p>Check in</p>
        </div>
      </div>

      <div className="col-lg-8 col-xl-8">
        <div className="my_profile_setting_input form-group">
          <input
            type="date"
            className="form-control"
            id="endDay"
          />
          <p>Check out</p>
        </div>
      </div>
        </li>{" "}
        {/* End li */}
       
        <li>
          <div className="search_option_button">
            <button type="submit" className="btn btn-block btn-thm w-100">
              Book
            </button>
          </div>
        </li>{" "}
        {/* End li */}
      </ul>
    </form>
  );
};

export default ContactWithAgent;
