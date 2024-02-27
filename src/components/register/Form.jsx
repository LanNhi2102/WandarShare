import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const handleGoogleLogin = () => {
  // Redirect the user to Google OAuth URL
  window.location.href =
    "https://accounts.google.com/o/oauth2/auth?client_id=YOUR_CLIENT_ID&redirect_uri=YOUR_REDIRECT_URI&response_type=code&scope=openid%20email&access_type=offline";
};

const initFormValue = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
  phone: "",
};
//xu li chuoi rong
const isEmptyValue = (value) => {
  return !value || value.trim().length < 1;
};
//xu li mail
const isUsernameValid = (username) => {
  return /^[a-zA-Z][a-zA-Z0-9._]{2,15}$/.test(username);
};
//xu li phone
const isPhoneValid = (phone) => {
  return /^\d{10}$/.test(phone);
};

const Form = () => {
  const [formValue, setFormValue] = useState(initFormValue);
  const [setFormError] = useState({});
  const [setRegistrationSuccess] = useState(false); // State for success message
  const [setRegistrationFail] = useState(false); // State for fail message
  const loginUser = async (username, email, password, phone) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/v1/auth/register",
        // "http://localhost:3000/users",

        {
          username,
          email,
          password,
          phone,
          // confirmPassword,
        }
      );
      // Lưu thông tin người dùng đã đăng nhập vào localStorage
      if (
        response.data.statusCodeValue === 200 &&
        response.data.statusCode === "OK"
      ) {
        // Registration is successful
        setRegistrationSuccess(true);
        setRegistrationFail(false); // Reset fail message
        // Nếu phản hồi thành công, điều hướng người dùng đến trang /home
        window.location.href = "/login";
      } else {
        setRegistrationFail(true);
        setRegistrationSuccess(false);
        // Xử lý trường hợp phản hồi không thành công ở đây nếu cần
      }
    } catch (error) {
      // Xử lý lỗi ở đây

      console.error(error.message);
      console.error(error.config);
    }
  };

  // -----------------------------------------
  // xu li thong bao loi
  const validateForm = () => {
    const errors = {};

    if (isEmptyValue(formValue.username)) {
      errors.username = "username is required";
    }
    //-
    if (isEmptyValue(formValue.email)) {
      errors.email = "Email is required";
    } else if (!isUsernameValid(formValue.email)) {
      errors.email = "Email is invalid";
    }
    //-
    if (isEmptyValue(formValue.password)) {
      errors.password = "Password is required";
    }
    //-
    if (isEmptyValue(formValue.confirmPassword)) {
      errors.confirmPassword = "Confirm password is required";
    } else if (formValue.confirmPassword !== formValue.password) {
      errors.confirmPassword = "Confirm password is not match";
    }
    if (isEmptyValue(formValue.phone)) {
      errors.phone = "Phone number is required";
    } else if (!isPhoneValid(formValue.phone)) {
      errors.phone = "Phone number is invalid";
    }
    setFormError(errors);

    return Object.keys(errors).length === 0;
  };
  // xu li dang nhap
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      loginUser(
        formValue.username,
        formValue.email,
        formValue.password,
        formValue.phone
      );
    } else {
      console.log("form invalid");
    }
  };
  const handleChange = (event) => {
    const { value, name } = event.target;
    setFormValue({
      ...formValue,
      [name]: name === "phone" ? String(value) : value,
    });
  };
  return (
    <form onSubmit={handleSubmit} action="#">
      <div className="heading text-center">
        <h3>Register to your account</h3>
        <p className="text-center">
          Already have an account?{" "}
          <Link to="/login" className="text-thm">
            Login
          </Link>
        </p>
      </div>
      {/* End .heading */}

      <div className="form-group input-group mb-2">
        <input
          type="text"
          className="form-control"
          value={formValue.username}
          onChange={handleChange}
          name="username"
          required
          placeholder="User Name"
        />
        <div className="input-group-prepend">
          <div className="input-group-text">
            <i className="flaticon-user"></i>
          </div>
        </div>
      </div>
      {/* End .form-group */}

      <div className="form-group input-group mb-2">
        <input
          type="email"
          className="form-control"
          value={formValue.email}
          onChange={handleChange}
          name="email"
          required
          placeholder="Email"
        />
        <div className="input-group-prepend">
          <div className="input-group-text">
            <i className="fa fa-envelope-o"></i>
          </div>
        </div>
      </div>
      {/* End .form-group */}

      <div className="form-group input-group mb-2">
        <input
          type="phone"
          className="form-control"
          value={formValue.phone}
          onChange={handleChange}
          name="phone"
          required
          placeholder="Phone"
        />
        <div className="input-group-prepend">
          <div className="input-group-text">
            <i className="fa fa-phone"></i>
          </div>
        </div>
      </div>
      {/* End .form-group */}

      <div className="form-group input-group mb-2">
        <input
          type="password"
          className="form-control"
          value={formValue.password}
          onChange={handleChange}
          name="password"
          required
          placeholder="Password"
        />
        <div className="input-group-prepend">
          <div className="input-group-text">
            <i className="flaticon-password"></i>
          </div>
        </div>
      </div>
      {/* End .form-group */}

      <div className="form-group input-group mb-2">
        <input
          type="password"
          className="form-control"
          value={formValue.confirmPassword}
          onChange={handleChange}
          name="confirmPassword"
          required
          placeholder="Re-enter password"
        />
        <div className="input-group-prepend">
          <div className="input-group-text">
            <i className="flaticon-password"></i>
          </div>
        </div>
      </div>
      {/* End .form-group */}

      <div className="form-group form-check custom-checkbox mb-3">
        <input className="form-check-input" type="checkbox" value="" required />
        <label className="form-check-label form-check-label">
          I have read and accept the Terms and Privacy Policy?
        </label>
      </div>
      {/* End .form-group */}

      <button type="submit" className="btn btn-log w-100 btn-thm">
        Register
      </button>
      {/* Register button */}

      <div className="divide">
        <span className="lf_divider">Or</span>
        <hr />
      </div>
      {/* devider */}

      <div className="row mt25">
        <div className="col-lg-12">
        <button className="btn btn-googl w-100" onClick={handleGoogleLogin}>
            <i className="fa fa-google float-start mt5"></i> Login with Google
          </button>
        </div>
        {/* End login with google*/}
      </div>
    </form>
  );
};

export default Form;
