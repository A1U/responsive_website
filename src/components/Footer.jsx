import React from 'react';

const Footer = () => {
  const spanStyle = {
    color: '#862634',
  };

  return (
    <footer className="bg-body-tertiary text-center text-lg-start">
    
      <div className="container p-4">
    
        <div className="row">
    
        
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0 ">
          <img src="https://i0.wp.com/getbakeroo.com/wp-content/uploads/2022/03/bakeroo-final-1-1.png?w=359&ssl=1" alt="logo" width="auto" height="80px" />

            <ul className="list-unstyled mb-0 my-4" style={{ textDecoration: 'none' }}>
              <li>
                <a href="#!" className="text-body my-5" style={{ textDecoration: 'none' }}>
               <img src="https://i0.wp.com/getbakeroo.com/wp-content/uploads/2023/07/googleplay.png?w=331&ssl=1" alt ="" width="auto" height="70px" />
                </a>
                <br/>
                <br/>


              </li>
              <li>
                <a href="#!" className="text-body my-5" style={{ textDecoration: 'none' }}>
                <img src="https://i0.wp.com/getbakeroo.com/wp-content/uploads/2023/07/apple.png?w=332&ssl=1" alt ="" width="auto" height="70px" />
                </a>
              </li>
              <li>
                <a href="#!" className="text-body" style={{ textDecoration: 'none' }}>
                  {/* Link 3 */}
                </a>
              </li>
              <li>
                <a href="#!" className="text-body" style={{ textDecoration: 'none' }}>
                  {/* Link 4 */}
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase " style={spanStyle}>Company</h5>

            <ul className="list-unstyled mb-0">
              <li>
                <a href="#!" className="text-body" style={{ textDecoration: 'none', lineHeight: '40px' }}>
                About
                </a>
              </li>
              <li>
                <a href="#!" className="text-body" style={{ textDecoration: 'none',lineHeight: '40px' }}>
                Pricing
                </a>
              </li>
              <li>
                <a href="#!" className="text-body" style={{ textDecoration: 'none' , lineHeight: '40px' }}>
                Help
                </a>
              </li>
            
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase" style={spanStyle}>Features</h5>

            <ul className="list-unstyled mb-0">
              <li>
                <a href="#!" className="text-body" style={{ textDecoration: 'none', lineHeight: '40px' }} >
                Workforce Management
                </a>
              </li>
              <li>
                <a href="#!" className="text-body" style={{ textDecoration: 'none', lineHeight: '40px' }} >
                Inventory Management
                </a>
              </li>
              <li>
                <a href="#!" className="text-body" style={{ textDecoration: 'none', lineHeight: '40px' }} >
                Order Managements
                </a>
              </li>
              <li>
                <a href="#!" className="text-body" style={{ textDecoration: 'none', lineHeight: '40px' }} >
                Production Sheet
                </a>
              </li>
              <li>
                <a href="#!" className="text-body" style={{ textDecoration: 'none', lineHeight: '40px' }} >
                Work Health Safety
                </a>
              </li>
              <li>
                <a href="#!" className="text-body"  style={{ textDecoration: 'none', lineHeight: '40px' }}>
                Food Safety
                </a>
              </li>
              <li>
                <a href="#!" className="text-body"  style={{ textDecoration: 'none', lineHeight: '40px' }}>
                E-learning
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase" style={spanStyle}>Resources</h5>

            <ul className="list-unstyled mb-0">
              <li>
                <a href="#!" className="text-body" style={{ textDecoration: 'none',lineHeight: '40px' }}>
                Blog
                </a>
              </li>
              <li>
                <a href="#!" className="text-body" style={{ textDecoration: 'none',lineHeight: '40px' }}>
                Academy
                </a>
              </li>
              <li>
                <a href="#!" className="text-body" style={{ textDecoration: 'none',lineHeight: '40px' }}>
                Ultimate Guide
                </a>
              </li>
            
            </ul>
          </div>
        

        </div>
     
      </div>
    
      <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
      © Copyright 2023,
        <a className="text-body" href="#bakeoo" style={{ textDecoration: 'none' ,lineHeight: '40px'}}>
       All Rights Reserved by Bakeroo
        </a>
      </div>
      {/* Copyright */}
    </footer>
  );
};

export default Footer;
