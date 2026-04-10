import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';

import { updateUserProfile } from '../redux/reducers/UserReducer'; 

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const form = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Email không đúng định dạng!')
        .required('Email không được để trống!'),
      password: Yup.string()
        .min(6, 'Mật khẩu phải từ 6 ký tự')
        .required('Mật khẩu không được để trống!'),
    }),
    onSubmit: (values) => {
      
      dispatch(updateUserProfile(values));
      navigate('/ProductFeature');
    },
  });

  return (
    <div className="container my-5" style={{ minHeight: '60vh' }}>
      <h2 className="mb-4 display-6">Login</h2>
      <hr />
      <div className="row justify-content-center mt-5">
        <div className="col-md-5">
          <form onSubmit={form.handleSubmit}>
            <div className="mb-3">
              <label className="form-label text-secondary">Email</label>
              <input
                type="email"
                name="email"
                className="form-control bg-light border-0 p-3"
                placeholder="email"
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                value={form.values.email}
              />
              {form.touched.email && form.errors.email ? (
                <small className="text-danger">{form.errors.email}</small>
              ) : null}
            </div>

            <div className="mb-3">
              <label className="form-label text-secondary">Password</label>
              <div className="input-group">
                <input
                  type="password"
                  name="password"
                  className="form-control bg-light border-0 p-3"
                  placeholder="password"
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  value={form.values.password}
                />
                <span className="input-group-text bg-light border-0">
                  <i className="fa fa-eye"></i>
                </span>
              </div>
              {form.touched.password && form.errors.password ? (
                <small className="text-danger d-block">{form.errors.password}</small>
              ) : null}
            </div>

            <div className="d-flex justify-content-between align-items-center mt-4">
              <span 
                className="text-decoration-none" 
                style={{ color: '#7200e6', cursor: 'pointer' }}
                onClick={() => navigate('/profile')}
              >
                Register now ?
              </span>

              <button
                type="submit"
                className="btn text-white px-4 py-2 rounded-pill"
                style={{ backgroundColor: '#7200e6', border: 'none' }}
              >
                LOGIN
              </button>
            </div>
          </form>
        </div>
      </div>
      <footer className="footer-custom mt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h5>GET HELP</h5>
              <ul className="list-unstyled">
                <li>Home</li>
                <li>Nike</li>
                <li>Adidas</li>
                <li>Contact</li>
              </ul>
            </div>
            <div className="col-md-4">
              <h5>SUPPORT</h5>
              <ul className="list-unstyled">
                <li>About</li>
                <li>Contact</li>
                <li>Help</li>
                <li>Phone</li>
              </ul>
            </div>
            <div className="col-md-4">
              <h5>REGISTER</h5>
              <ul className="list-unstyled">
                <li>Register</li>
                <li>Login</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="text-center py-3 bg-secondary text-white mt-4">
          © 2022 Cybersoft All Rights Reserved | Design Theme by Trương Tấn Khải.
        </div>
      </footer>
    </div>
  );
}