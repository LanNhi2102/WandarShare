import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const initFormValue = {
  email: '',
  password: '',
};

// Check empty
const isEmptyValue = (value) => {
  return !value || value.trim().length < 1;
};

function parseJwt(token) {
  var base64Url = token.split('.')[1];
  var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  var jsonPayload = decodeURIComponent(
    window
      .atob(base64)
      .split('')
      .map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join(''),
  );

  return JSON.parse(jsonPayload);
}

// Check email
const isEmailValid = (email) => {
  return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
};

const Form = () => {
  const [formValue, setFormValue] = useState(initFormValue);
  const [setFormError] = useState({});
  const [rememberMe, setRememberMe] = useState(false);
  const [setLoginFail] = useState(false);
  // xử lí remember me
  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    const savedRememberMe = localStorage.getItem('rememberMe');

    if (savedUser) {
      try {
        const user = JSON.parse(savedUser);
        setFormValue({
          email: user.email,
          password: '',
        });

        if (savedRememberMe === 'true') {
          setRememberMe(true);
        } else {
          setRememberMe(false);
        }
      } catch (error) {
        console.error(error);
        localStorage.removeItem('user');
        localStorage.removeItem('rememberMe');
      }
    }
  }, []);

  const saveLoginInfo = (user, access_token, refresh_token) => {
    localStorage.setItem('access_token', access_token);
    localStorage.setItem('refresh_token', refresh_token);
  };
  // post api
  const loginUser = async (email, password) => {
    try {
      const response = await axios.post('http://localhost:8080/api/v1/auth/login', {
        email,
        password,
      });

      const { user, access_token, refresh_token } = response.data;

      if (rememberMe) {
        saveLoginInfo(user, access_token, refresh_token);
      }
      if (response.data.statusCodeValue === 200 && response.data.statusCode === 'OK') {
        localStorage.setItem('access_token', response.data.body.access_token);
        localStorage.setItem('refresh_token', response.data.body.refesh_token);
        localStorage.setItem('username', response.data.body.username);
        const token = response.data.body.access_token;
        const role = parseJwt(token).roles[0];
        localStorage.setItem('role', role);
        const id = parseJwt(token).sub;
        localStorage.setItem('id', id);
        if (role == 'USER') {
          window.location.href = '/';
        } else {
          window.location.href = '/admin';
        }
      } else {
        setLoginFail(true);
        // console.log("login fail, your acc not exists");
      }
} catch (error) {
      console.error(error);
    }
  };
  // xử lí validate
  const validateForm = () => {
    const errors = {};
    if (isEmptyValue(formValue.email)) {
      errors.email = 'Email is required';
    } else if (!isEmailValid(formValue.email)) {
      errors.email = 'Email is invalid';
    }
    if (isEmptyValue(formValue.password)) {
      errors.password = 'Password is required';
    }
    setFormError(errors);
    return Object.keys(errors).length === 0;
  };
  //xu li dang nhap
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      loginUser(formValue.email, formValue.password);
    } else {
      console.log('Form invalid');
    }
  };
  // xử lí thay đổi input
  const handleChange = (e) => {
    const { value, name } = e.target;
    setFormValue((prevFormValue) => ({
      ...prevFormValue,
      [name]: value,
    }));
  };
  // lấy trạng thái checked or unchecked
  const handleRememberMeChange = (e) => {
    setRememberMe(e.target.checked);
  };
  return (
    // <div className={styles['form-value']}>
    <form onSubmit={handleSubmit} action="#">
      <div className="heading text-center">
        <h3>Login to your account</h3>
        <p className="text-center">
          Dont have an account?{" "}
          <Link to="/register" className="text-thm">
            Sign Up!
          </Link>
        </p>
      </div>
      {/* End .heading */}

      <div className="input-group mb-2 mr-sm-2">
        <input
          type="text"
          className="form-control"
          name="email" value={formValue.email} onChange={handleChange}
          required
          placeholder="User Name Or Email"
        />
        <div className="input-group-prepend">
          <div className="input-group-text">
            <i className="flaticon-user"></i>
          </div>
        </div>
      </div>
      {/* End .input-group */}

      <div className="input-group form-group">
        <input
          type="password"
          className="form-control"
          name="password"
          value={formValue.password}
          onChange={handleChange}
          required
          placeholder="Password"
        />
        <div className="input-group-prepend">
          <div className="input-group-text">
            <i className="flaticon-password"></i>
          </div>
        </div>
      </div>
      {/* End .input-group */}

      <div className="form-group form-check custom-checkbox mb-3">
        <input
          className="form-check-input"
          type="checkbox"
          value=""

        />
        <label
          className="form-check-label form-check-label"
          checked={rememberMe} onChange={handleRememberMeChange}
        >
          Remember me
        </label>

        <a className="btn-fpswd float-end" href="#">
          Forgot password?
        </a>
      </div>
      {/* End .form-group */}

      <button type="submit" className="btn btn-log w-100 btn-thm">
        Log In
</button>
      {/* login button */}

      <div className="divide">
        <span className="lf_divider">Or</span>
        <hr />
      </div>
      {/* devider */}

      <div className="row mt25">
        <div className="col-lg-12">
        <Link to="https://accounts.google.com/o/oauth2/auth?client_id=YOUR_CLIENT_ID&redirect_uri=YOUR_REDIRECT_URI&response_type=code&scope=openid%20email&access_type=offline" className="btn btn-block color-white bgc-gogle mb0 w-100">
            <i className="fa fa-google float-start mt5"></i> Login with Google
          </Link>
        </div>
        {/* End login with google */}
      </div>
    </form>
    // </div>
  );
};

export default Form;