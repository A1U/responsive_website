import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import CountUp from 'react-countup';
const Herosection = (props) => {

  const buttonStyle = {
    backgroundColor: '#862634',
    color: '#fff',
     
  };
 
  const spanStyle = {
    color: '#862634',

  };
  const h4_barkery = {
    fontSize: '23px',
    fontWeight: 'bold'
   

  };
   const b_manage={
    fontWeight: 'bold',
    fontSize:  '60px',
   

   }
  return (
    <>
      <Container className="">
        <Row className="">
          <Col md={6} className="my-5 align-items-center">
            <h4 style={h4_barkery}>Bakery everyday hassles – now as easy as pie.</h4>

            <h1 className="display-5">
            <b style={ props.b_manage}>  Manage Your Bakery On The
              <span style={spanStyle}>    Go!</span></b>
            </h1>

            <p className="fs-5">
              Manage your bakery’s people, production, inventory, work health
              safety and food safety from one platform. <span style={spanStyle}>Did we tell you its
              built by bakers?</span>
            </p>
            <Button size="lg" variant="secondary" className="mt-5" style={buttonStyle}>
      Schedule a Demo
    </Button>
           
          </Col>
          <Col md={6}>
            <img
              src="https://i0.wp.com/getbakeroo.com/wp-content/uploads/2023/07/home-banner.png?w=811&ssl=1"
              alt="hero-section"
              width="auto"
              height="690px"
            />
          </Col>
        </Row>
        <Container className="text-center">
              <p className="fs-5">
                Trusted By 30+ bakeries in Australia and internationally.....
              </p>
              <Row>
      <Col>
        <h1>
          <strong>
            <CountUp end={30} duration={2} />+
          </strong>
        </h1>
        <p>Bakeries</p>
      </Col>
      <Col>
        <h1>
          <strong>
            <CountUp end={400}  duration={2} />+
          </strong>
        </h1>
        <p>Users</p>
      </Col>
      <Col>
        <h1>
          <strong>
            <CountUp end={1000} duration={2} />+
          </strong>
        </h1>
        <p>Online Orders</p>
      </Col>
      <Col>
        <h1>
          <strong>
            <CountUp end={5} duration={2} />+
          </strong>
        </h1>
        <p>Countries</p>
      </Col>
    </Row>
            </Container>
      </Container>
    </>
  );
};

export default Herosection;
