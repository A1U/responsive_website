import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const spanStyle = {
  color: '#862634',
};



const feedbackData = [
  {
    id: 1,
   
   
    name: ' Samuel Arthur',
    feedback: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
 
  },
  {
    id: 2,
   

    name: 'Michael Beick Baffour',
    feedback: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
   
  
  },
  {
    id: 3,
   
  
    name: 'Albert',
    feedback: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. `,
  
  
  },
  {
    id: 4,
   
    
    name: ' Derrick',
    feedback: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
   
   
  },
  {
    id: 5,
    
  
    name: 'Kweku Gyan',
    feedback: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
   
  },
  {
    id: 6,
   
    
    name: 'John',
    feedback: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
   
  },
 
];




const FeedbackSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, 
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

 

  return (
    <div className="container-fluid my-5" >
      <div className=" text-center" style={spanStyle}>
         <h2 >Hear What Our Clients Say…</h2>
      
      </div>
      <Slider {...settings}>
        {feedbackData.map((student) => (
          <div key={student.id} style={{ margin: '0 2px' }}>
            <div className="container py-5">
              <div className="row g-2">
                <div className="col-12">
                  <div className="card border-0 shadow bg-light card1" >
                    <div className="card-body">
                  
                      <h5 className="card-title ">{student.name} </h5>
                      <p className="card-text">{student.feedback}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default FeedbackSlider;
