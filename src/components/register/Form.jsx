import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const initFormValue = {
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
  phone: '',
};
//xu li chuoi rong
const isEmptyValue = (value) => {
  return !value || value.trim().length < 1;
};
//xu li mail
const isUsernameValid = (username) => {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(username);
};
//xu li phone
const isPhoneValid = (phone) => {
  return /^\d{10}$/.test(phone);
};

const Form = () => {
  const [formValue, setFormValue] = useState(initFormValue);
  const [formError, setFormError] = useState({});
  const [registrationSuccess, setRegistrationSuccess] = useState(false); // State for success message
  const [registrationFail, setRegistrationFail] = useState(false); // State for fail message
    const loginUser = async (username, email, password, phone) => {
    try {
      const response = await axios.post(
        'http://localhost:8080/api/v1/auth/register',
        // "http://localhost:3000/users",

        {
          username,
          email,
          password,
          phone,
          // confirmPassword,
        },
      );
      // Lưu thông tin người dùng đã đăng nhập vào localStorage
      if (response.data.statusCodeValue === 200 && response.data.statusCode === 'OK') {
        // Registration is successful
        setRegistrationSuccess(true);
        setRegistrationFail(false); // Reset fail message
        // Nếu phản hồi thành công, điều hướng người dùng đến trang /home
        window.location.href = '/login';
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
      errors.username = 'username is required';
    }
    //-
    if (isEmptyValue(formValue.email)) {
      errors.email = 'Email is required';
    } else if (!isUsernameValid(formValue.email)) {
      errors.email = 'Email is invalid';
    }
    //-
    if (isEmptyValue(formValue.password)) {
      errors.password = 'Password is required';
    }
    //-
    if (isEmptyValue(formValue.confirmPassword)) {
      errors.confirmPassword = 'Confirm password is required';
    } else if (formValue.confirmPassword !== formValue.password) {
      errors.confirmPassword = 'Confirm password is not match';
    }
    if (isEmptyValue(formValue.phone)) {
      errors.phone = 'Phone number is required';
    } else if (!isPhoneValid(formValue.phone)) {
      errors.phone = 'Phone number is invalid';
    }
    setFormError(errors);

    return Object.keys(errors).length === 0;
  };
  // xu li dang nhap
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      loginUser(formValue.username, formValue.email, formValue.password, formValue.phone);
    } else {
      console.log('form invalid');
    }
  };
  const handleChange = (event) => {
    const { value, name } = event.target;
    setFormValue({
      ...formValue,
      [name]: name === 'phone' ? String(value) : value,
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

      <div className="form-group input-group ">
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

      <div className="form-group input-group  ">
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

      <div className="form-group input-group  ">
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

      <div className="form-group input-group  ">
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

      <div className="form-group input-group ">
        <input
          type="text"
          className="form-control"
          value={formValue.phone}
          onChange={handleChange}
          name="phone"
          required
          placeholder="Phone"
        />
        <div className="input-group-prepend">
          <div className="input-group-text">
            <i className="flaticon-user"></i>
          </div>
        </div>
      </div>
      {/* End .form-group */}

      <div className="form-group form-check custom-checkbox mb-3">
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          required

        />
        <label className="form-check-label form-check-label" >
          I have read and accept the Terms and Privacy Policy?
        </label>
      </div>
      {/* End .form-group */}

      <button type="submit" className="btn btn-log w-100 btn-thm">
        Register
      </button>
      {/* login button */}

      <div className="divide">
        <span className="lf_divider">Or</span>
        <hr />
      </div>
      {/* devider */}

      <div className="row mt25">
        <div className="col-lg-6">
          <button
            type="submit"
            className="btn btn-block color-white bgc-fb mb0 w-100"
          >
            <i className="fa fa-facebook float-start mt5"></i> Facebook
          </button>
        </div>
        {/* End .col */}

        <div className="col-lg-6">
          <button
            type="submit"
            className="btn btn-block color-white bgc-gogle mb0 w-100"
          >
            <i className="fa fa-google float-start mt5"></i> Google
          </button>
        </div>
        {/* End .col */}
      </div>
      {/* more signin options */}
    </form>
  );
};

export default Form;
