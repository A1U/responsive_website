import React from 'react';
import { Row, Col, CardBody, Card, Container } from 'react-bootstrap';

const Cardsec = () => {

  const data = [
    {
      imageUrl: 'https://i0.wp.com/getbakeroo.com/wp-content/uploads/2023/07/bullet-point.jpg?fit=135%2C72&ssl=1',
      title: 'Efficient Paperless Onboarding: Vacancies to New Hires',
      description: 'Comprehensive Digital Onboarding Solution: A Seamless Transition from Job Vacancy Creation to New Team Member Recruitment.',
    },
    {
      imageUrl: 'https://i0.wp.com/getbakeroo.com/wp-content/uploads/2023/07/bullet-point.jpg?fit=135%2C72&ssl=1',
      title: 'Efficient Paperless Onboarding: Vacancies to New Hires',
      description: 'Comprehensive Digital Onboarding Solution: A Seamless Transition from Job Vacancy Creation to New Team Member Recruitment.',
    },
    {
      imageUrl: 'https://i0.wp.com/getbakeroo.com/wp-content/uploads/2023/07/bullet-point.jpg?fit=135%2C72&ssl=1',
      title: 'Efficient Paperless Onboarding: Vacancies to New Hires',
      description: 'Comprehensive Digital Onboarding Solution: A Seamless Transition from Job Vacancy Creation to New Team Member Recruitment.',
    },
  ];

  return (
    <>
      <div style={{ backgroundColor: "#862634" }} className='p-5'>
        <Container className="align-items-center">
          {data.map((item, index) => (
            <Card key={index} className='my-5'>
              <CardBody>
                <Row className="justify-content-center align-items-center my-2 mx-5">
                  <Col md={2} xs={12} className="text-center mb-3 mb-md-0">
                    <img src={item.imageUrl} alt="" />
                  </Col>
                  <Col md={10} xs={12} className="text-center">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          ))}
        </Container>
      </div>
    </>
  );
}

export default Cardsec;
