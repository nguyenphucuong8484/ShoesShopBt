import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProductFeature = () => {
   
    const [products, setProducts] = useState([]);

   
    const getProductApi = async () => {
        try {
            const res = await axios({
                url: 'https://shop.cyberlearn.vn/api/Product',
                method: 'GET'
            });
           
            setProducts(res.data.content);
        } catch (err) {
            console.log(err);
        }
    };

    
    useEffect(() => {
        getProductApi();
    }, []);

    return (
        <div className="container py-5">
            <h2 className="mb-4 text-center py-2" style={{ background: 'linear-gradient(to right, #6a11cb, #2575fc)', color: 'white' }}>
                Product Feature
            </h2>
            <div className="row g-4">
              
                {products.map((item) => {
                    return (
                        <div className="col-md-4" key={item.id}>
                            <div className="card h-100 border-0 shadow-sm rounded-0 bg-light">
                                <div className="position-relative p-3">
                                    <img src={item.image} className="card-img-top mx-auto" alt={item.name} style={{ width: '80%' }} />
                                    <i className="fa fa-heart position-absolute top-0 end-0 m-3 text-danger" style={{ cursor: 'pointer' }}></i>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title text-dark">{item.name}</h5>
                                    <p className="card-text text-secondary text-truncate" style={{ fontSize: '0.9rem' }}>
                                        {item.shortDescription}
                                    </p>
                                </div>
                                <div className="d-flex w-100">
                                    <button className="btn w-50 rounded-0" style={{ backgroundColor: '#DEB887' }}>
                                        Buy now
                                    </button>
                                    <div className="btn w-50 rounded-0 bg-light fw-bold">
                                        {item.price}$
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
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
};

export default ProductFeature;