// import React from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// // Testimonials data (replace this with actual testimonials)
// const testimonialsData = [
//   {
//     id: 1,
//     author: 'John Doe',
//     position: 'Software Developer',
//     company: 'Tech Solutions',
//     content: 'Using this job portal made my job search much easier. I found my dream job within a few weeks!',
//     image: 'https://th.bing.com/th/id/OIP.esHqgm5Y_fVoXMnTTPsvpAHaHa?w=1024&h=1024&rs=1&pid=ImgDetMain', // Replace with actual image URL or import it
//   },
//   {
//     id: 2,
//     author: 'Jane Smith',
//     position: 'Marketing Specialist',
//     company: 'MarketingPro',
//     content: 'The variety of job listings and the user-friendly interface of this portal helped me land a fantastic job in marketing.',
//     image: 'https://booking.drivenot.com/images/DTS_005-FACES_CIRCLE_L.png', // Replace with actual image URL or import it
//   },
//   // Add more testimonials as needed
// ];

// // Testimonial component to display individual testimonials with picture
// const TestimonialCard = ({ testimonial }) => (
//   <div className="testimonial-card">
//     <div className="testimonial-content">
//       <p>{testimonial.content}</p>
//       <div className="author-info">
//         <strong>{testimonial.author}</strong>
//         <span>{testimonial.position}, {testimonial.company}</span>
//       </div>
//     </div>
//     <div className="author-image">
//       <img src={testimonial.image} alt={testimonial.author} style={{height:100, width:100}} />
//     </div>
//   </div>
// );

// // Testimonials component using the slider
// const TestimonialsSlider = () => {
//   const sliderSettings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   };

//   return (
//     <section className="testimonials-section">
//       <h2>What Our Users Say</h2>
//       <Slider {...sliderSettings}>
//         {testimonialsData.map((testimonial) => (
//           <TestimonialCard key={testimonial.id} testimonial={testimonial} />
//         ))}
//       </Slider>
//     </section>
//   );
// };

// export default TestimonialsSlider;



// import React from "react";
// import {
//   MDBCarousel,
//   MDBCarouselItem,
//   MDBCol,
//   MDBIcon,
//   MDBTypography,
//   MDBContainer,
//   MDBRow,
// } from "mdb-react-ui-kit";

// // Testimonials data (replace this with actual testimonials)
// const testimonialsData = [
//   {
//     id: 1,
//     author: 'Anna Deynah',
//     position: 'UX Designer',
//     content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur quae quaerat ad velit ab hic tenetur.',
//     image: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp',
//   },
//   {
//     id: 2,
//     author: 'John Doe',
//     position: 'Web Developer',
//     content: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid commodi.',
//     image: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp',
//   },
//   // Add more testimonials as needed
// ];

// // Testimonial card component
// const TestimonialCard = ({ testimonial }) => (
//   <MDBCol lg="4" className="mb-5 mb-md-0">
//     <div className="d-flex justify-content-center mb-4">
//       <img
//         src={testimonial.image}
//         className="rounded-circle shadow-1-strong"
//         width="150"
//         height="150"
//         alt={testimonial.author}
//       />
//     </div>
//     <h5 className="mb-3">{testimonial.author}</h5>
//     <h6 className="text-primary mb-3">{testimonial.position}</h6>
//     <p className="px-xl-3">
//       <MDBIcon fas icon="quote-left" className="pe-2" />
//       {testimonial.content}
//     </p>
//     <MDBTypography
//       listUnStyled
//       className="d-flex justify-content-center mb-0"
//     >
//       <li>
//         <MDBIcon
//           fas
//           icon="star"
//           size="sm"
//           className="text-warning"
//         />
//       </li>
//       <li>
//         <MDBIcon
//           fas
//           icon="star"
//           size="sm"
//           className="text-warning"
//         />
//       </li>
//       <li>
//         <MDBIcon
//           fas
//           icon="star"
//           size="sm"
//           className="text-warning"
//         />
//       </li>
//       <li>
//         <MDBIcon
//           fas
//           icon="star"
//           size="sm"
//           className="text-warning"
//         />
//       </li>
//       <li>
//         <MDBIcon
//           fas
//           icon="star"
//           size="sm"
//           className="text-warning"
//         />
//       </li>
//     </MDBTypography>
//   </MDBCol>
// );

// export default function App() {
//   return (
//     <MDBContainer className="py-5">
//       <MDBCarousel showControls dark>
//         {testimonialsData.map((testimonial) => (
//           <MDBCarouselItem key={testimonial.id} className="active">
//             <MDBContainer>
//               <MDBRow className="text-center">
//                 <TestimonialCard testimonial={testimonial} />
//               </MDBRow>
//             </MDBContainer>
//           </MDBCarouselItem>
//         ))}
//       </MDBCarousel>
//     </MDBContainer>
//   );
// }


import React from 'react';
import Card from 'react-bootstrap/Card';
import { Carousel } from 'react-bootstrap';

const TestimonialCarousel = () => {
  const testimonialsData = [
      {
        id: 1,
        author: 'John Doe',
        position: 'Software Developer',
        company: 'Tech Solutions',
        content: 'Using this job portal made my job search much easier. I found my dream job within a few weeks!',
        image: 'https://th.bing.com/th/id/OIP.esHqgm5Y_fVoXMnTTPsvpAHaHa?w=1024&h=1024&rs=1&pid=ImgDetMain', // Replace with actual image URL or import it
      },
      {
        id: 2,
        author: 'Jane Smith',
        position: 'Marketing Specialist',
        company: 'MarketingPro',
        content: 'The variety of job listings and the user-friendly interface of this portal helped me land a fantastic job in marketing.',
        image: 'https://booking.drivenot.com/images/DTS_005-FACES_CIRCLE_L.png', // Replace with actual image URL or import it
      },
      // Add more testimonials as needed
    ];
  return (<>
    <div className='mx-5'>
        <div className='mt-5 mb-3 text-center'><h1>Testimonials</h1></div>
    <Carousel className='d-flex align-items-center  
                        justify-content-center'>
      {
      testimonialsData.map((d,i)=>{
        return <Carousel.Item >
        <Card style={{ width: '18rem' }} className='mx-auto'>
          <Card.Img style={{ height: '12rem',width: '12rem' }} variant="top" src={d.image}  className='rounded-circle mx-auto' />
          <Card.Body>
            <Card.Title>{d.author}</Card.Title>
            <Card.Text>
              {d.content}
            </Card.Text>
          </Card.Body>
        </Card>
      </Carousel.Item>
})
}
      {/* Add more Carousel.Items as needed */}
    </Carousel>
    </div>
  </>
  );
};

export default TestimonialCarousel;
