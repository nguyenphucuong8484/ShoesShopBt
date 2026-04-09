import React from 'react';



export default function Login() {
  return (
    <>
    
      <div className="container my-5" style={{ minHeight: '60vh' }}>
        <h2 className="mb-4 display-6">Login</h2>
        <hr />
        
        <div className="row justify-content-center mt-5">
          <div className="col-md-5">
            <form>
       
              <div className="mb-3">
                <label className="form-label text-secondary">Email</label>
                <input type="email" className="form-control bg-light border-0 p-3" placeholder="email" />
                <small className="text-danger">Validation</small>
              </div>

          
              <div className="mb-3">
                <label className="form-label text-secondary">Password</label>
                <div className="input-group">
                  <input type="password" className="form-control bg-light border-0 p-3" placeholder="password" />
                  <span className="input-group-text bg-light border-0">
                    <i className="fa fa-eye"></i>
                  </span>
                </div>
                <small className="text-danger d-block">Validation</small>
              </div>

            
              <div className="d-flex justify-content-between align-items-center mt-4">
                <a href="/register" className="text-decoration-none" style={{ color: '#7200e6' }}>
                  Register now ?
                </a>
                <button 
                  type="submit" 
                  className="btn text-white px-4 py-2 rounded-pill" 
                  style={{ backgroundColor: '#7200e6', border: 'none' }}
                >
                  LOGIN
                </button>
              </div>

            
              <div className="mt-4">
                <button 
                  type="button" 
                  className="btn btn-primary w-100 p-3 d-flex align-items-center justify-content-center" 
                  style={{ borderRadius: '30px', backgroundColor: '#1877f2' }}
                >
                  <i className="fab fa-facebook me-2 fs-4"></i>
                  Continue with Facebook
                </button>
              </div>
            </form>
          </div>
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
    </>
  );
}