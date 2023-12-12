import React from 'react';
import { Button } from 'react-bootstrap';

const Contact = () => {
  return (
    <div style={{ backgroundColor: "#862634" }} className='p-5 text-center text-white'>
      <h3>Subscribe to our newsletter</h3>
      <div className="container">
        <div className="row mt-5">
          <div className="col-sm-12 col-md-4">
            <input type="text" className="form-control" id="exampleInputfirstname" placeholder="First name" />
          </div>
          <div className="col-sm-12 col-md-4 mt-3 mt-md-0">
            <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter email Address" />
          </div>
          <div className="col-sm-12 col-md-4 mt-3 mt-md-0">
            <Button variant="light" className='' size="lg">
              Subscribe Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
