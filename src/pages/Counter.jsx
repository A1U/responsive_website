import React from 'react'
import { Container,Row, Col } from 'react-bootstrap'

const Counter = () => {
  const spanStyle = {
    color: '#862634',
  };
  return (
    <>
        <Container className=' flex justify-content-center align-items-center '>
            <Row>
                <Col className='text-center '>
             
                    <h1 className='my-5'>Why Bakeroo?</h1>
                    <div className='text-center'>
                    <p className='fs-5 mx-5'>We all know running a baking business is not an easy as we thought. Minimizing wastage in the food business is a big headache for business owners. So, why not track it as carefully as possible? Unlike other solutions, Bakeroo will help manage your entire operation.</p>
                    </div>
                   <strong > <h4 style={spanStyle} className='fs-4'>Bakeroo is designed by experienced bakers for bakers</h4></strong>
                 
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default Counter