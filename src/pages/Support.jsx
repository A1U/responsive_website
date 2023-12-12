import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Support = () => {
    const spanStyle = {
        color: '#862634',
      };
       const display_3 = {
        fontSize: '50px',
        fontWeight: '340',
        marginRight: '250px',
        marginLeft: '190px',
        lineHeight: '70px'

       }
        
       const manage_client={
        fontSize:'20px',
        fontFamily:'sans-serif'
       }
  return (
   <>
    <Container className=''>
        <Row>
            <Col className='text-center my-5'>
            <h2 className='display-3'  style={display_3}><b>Growing And Managing Your <span style={spanStyle}>Bakery</span> Has Never Been This Easy…</b></h2>
            <h4>Manage client relationships - all in one place</h4>
            <p style={manage_client}>Manage client relationships - all in one place</p>
           </Col>
        </Row>
        <Row>
            <Col className=''>
                <img src="https://i0.wp.com/getbakeroo.com/wp-content/uploads/2023/07/Group-1000006697-min-scaled.jpg?w=1200&ssl=1" alt="" width="auto" height="auto" />
            </Col>
        </Row>
    </Container>
   </>
  )
}

export default Support