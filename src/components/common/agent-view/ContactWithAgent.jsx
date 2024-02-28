import { Calendar } from "react-check-in-out-calendar";

const ContactWithAgent = () => {
  return (
    <form action="#">
      <ul className="sasw_list mb0">
        {/* End li */}
        <li className="search_area">
          <div className="form-group mb-3">
          </div>
          <CalendarComponent/>
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
