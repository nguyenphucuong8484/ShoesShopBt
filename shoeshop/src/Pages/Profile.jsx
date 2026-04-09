import React from 'react'

const Profile = () => {
  return (
 <div>
  <style dangerouslySetInnerHTML={{__html: "\n        .header-gradient {\n            background: linear-gradient(to right, #6a11cb, #2575fc);\n            color: white;\n            padding: 10px 20px;\n        }\n        .profile-img {\n            width: 150px;\n            height: 150px;\n            border-radius: 50%;\n            background-color: #ddd;\n        }\n        .nav-tabs .nav-link {\n            color: #333;\n            font-size: 1.2rem;\n        }\n        .nav-tabs .nav-link.active {\n            color: #e83e8c;\n            border: none;\n            border-bottom: 2px solid #e83e8c;\n        }\n        .order-date {\n            color: #e83e8c;\n            font-weight: bold;\n            margin-top: 20px;\n        }\n        .footer-custom {\n            background-color: #f8f9fa;\n            padding: 40px 0;\n            border-top: 1px solid #dee2e6;\n        }\n        .btn-update {\n            background-color: #6f42c1;\n            color: white;\n            border-radius: 20px;\n            padding: 5px 30px;\n        }\n    " }} />
  <div className="container mt-4">
    <div className="header-gradient mb-4">
      <h2>Profile</h2>
    </div>
    <div className="row mb-5">
      <div className="col-md-3 text-center">
        <img src="/img/imgprofile.png" className="profile-img" alt="Avatar" />
      </div>
      <div className="col-md-9">
        <div className="row g-3">
          <div className="col-md-6">
            <label className="form-label">Email</label>
            <input type="email" className="form-control bg-light" placeholder="email" />
          </div>
          <div className="col-md-6">
            <label className="form-label">Name</label>
            <input type="text" className="form-control bg-light" placeholder="name" />
          </div>
          <div className="col-md-6">
            <label className="form-label">Phone</label>
            <input type="text" className="form-control bg-light" placeholder="phone" />
          </div>
          <div className="col-md-6">
            <label className="form-label">Password</label>
            <input type="password" className="form-control bg-light" />
          </div>
          <div className="col-md-6">
            <label className="form-label d-block">Gender</label>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="gender" id="male" defaultChecked />
              <label className="form-check-label" htmlFor="male">Male</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="gender" id="female" />
              <label className="form-check-label" htmlFor="female">Female</label>
            </div>
          </div>
          <div className="col-md-6 text-end">
            <button className="btn btn-update">Update</button>
          </div>
        </div>
      </div>
    </div>
    <hr />
    <ul className="nav nav-tabs border-0 mb-3">
      <li className="nav-item">
        <a className="nav-link active" href="#">Order history</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Favourite</a>
      </li>
    </ul>
    <p className="order-date">+ Orders have been placed on 09 - 19 - 2020</p>
    <table className="table table-borderless align-middle">
      <thead className="table-light">
        <tr>
          <th>id</th>
          <th>img</th>
          <th>name</th>
          <th>price</th>
          <th>quantity</th>
          <th>total</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td><img src="anh.png" width={50} alt="product" /></td>
          <td>Product 1</td>
          <td>1000</td>
          <td><span className="badge bg-secondary px-3">1</span></td>
          <td>1000</td>
        </tr>
      </tbody>
    </table>
    <nav aria-label="Page navigation" className="mt-4">
      <ul className="pagination justify-content-end">
        <li className="page-item disabled"><a className="page-link" href="#">«</a></li>
        <li className="page-item active"><a className="page-link" href="#">1</a></li>
        <li className="page-item"><a className="page-link" href="#">2</a></li>
        <li className="page-item"><a className="page-link" href="#">...</a></li>
        <li className="page-item"><a className="page-link" href="#">10</a></li>
        <li className="page-item"><a className="page-link" href="#">»</a></li>
      </ul>
    </nav>
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

  )
}

export default Profile