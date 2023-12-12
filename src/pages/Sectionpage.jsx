import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Sectionpage = () => {
  const spanStyle = {
    color: '#862634',
  };
  const my_5={
    fontSize: '48px',
    fontWeight: '340',
    marginRight: '80px'
  }
  const discription={
    fontSize: '20px',
    fontFamily: 'sans-serif'
  }
    const data = [
        {
          id: 1,
          title: 'Workforce Management',
          description: 'Manage staff with the ultimate ease! Bakeroo is an all-in-one workforce management system with HR, and payroll software that combines all the tools you need to hire, onboard, schedule, control, and pay employees.',
          imageUrl: 'https://i0.wp.com/getbakeroo.com/wp-content/uploads/2023/08/home1.jpg?w=1190&ssl=1',
          imageAlt: 'Workforce Image 1',
        },
        {
          id: 2,
          title: 'Inventory Management',
          description: 'It’s easier to keep track of all your inventories, sort them with multiple filter and manage them from a single platform.',
          imageUrl: 'https://i0.wp.com/getbakeroo.com/wp-content/uploads/2023/08/home2.jpg?w=1190&ssl=1',
          imageAlt: 'Workforce Image 1',
        },
       
        {
          id: 3,
          title: 'Production Management',
          description: 'Take the hassle out of the production planning. Whether it is fast-paced production or complicated recipes, our production tool lets you plan the production with the least amount of waste and efficient use of ingredients.',
          imageUrl: 'https://i0.wp.com/getbakeroo.com/wp-content/uploads/2023/08/home3.jpg?w=1200&ssl=1',
          imageAlt: 'Workforce Image 1',
        },
        {
          id: 4,
          title: 'WHS',
          description: 'Don’t fall an inch behind when it comes to building safer workplaces with a resilient safety culture. You can report events in your bakery – from near-misses to injuries and incidents – from any device.',
          imageUrl: 'https://i0.wp.com/getbakeroo.com/wp-content/uploads/2023/08/home4.jpg?w=1154&ssl=1',
          imageAlt: 'Workforce Image 1',
        },
        {
          id: 5,
          title: 'Food Safety',
          description: 'Bakeroo knows the nitty-gritty of food safety in the bakery business and allows your brand to improve the efficiency, accuracy, and effectiveness of a food safety management system.',
          imageUrl: 'https://i0.wp.com/getbakeroo.com/wp-content/uploads/2023/08/home6.jpg?w=1150&ssl=1',
          imageAlt: 'Workforce Image 1',
        },
        {
          id: 6,
          title: 'E-Learning',
          description: 'Grow your bakery business while you grow your people with an e-learning feature. Let your staff complete the course they need in the comfort of their time and place.',
          imageUrl: 'https://i0.wp.com/getbakeroo.com/wp-content/uploads/2023/08/home7.jpg?w=1130&ssl=1',
          imageAlt: 'Workforce Image 1',
        },
        {
          id: 7,
          title: 'Order Management',
          description: 'From taking regular orders from your loyal customer to tracking and managing them, its a whole lot easier with Bakeroo.',
          imageUrl: 'https://i0.wp.com/getbakeroo.com/wp-content/uploads/2023/08/home5.jpg?w=1138&ssl=1',
          imageAlt: 'Workforce Image 1',
        },
       
      ];
  return (
   <>
    <Container>
      <div className='text-center '>
        <p className='display-5 my-5' style={my_5}><b>Donut worry about managing your bakery, <span style={spanStyle}>Bakeroo</span> has all the right ingredients You Need</b></p>
      </div>
      {data.map((item, index) => (
        <Row key={index} className={`my-5 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
          <Col md={6}>
            <img src={item.imageUrl} alt={item.imageAlt} width="auto" height="440px" />
          </Col>
          <Col md={6} className='flex justify-content-center align-items-center mt-5'>
            <div className='mt-5 text-center'>
              <h2>{item.title}</h2>
            </div>
            <p className="mt-3 text-center" style={discription}>{item.description} </p>
          </Col>
        </Row>
      ))}
    </Container>
   </>
  )
}

export default Sectionpage