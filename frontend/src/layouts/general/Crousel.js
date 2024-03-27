import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
      <img class="d-block w-100" src="https://xp.enonic.com/site/enonic-homepage/master/enonic-homepage/_/image/ba65fe99-f002-497d-861d-e15a915a0ec8:d57b46836afa15baf8b3b573c24ea43d8e8897fa/block-1200-630/woman-pc-phone-enonic-content-studio.jpg?quality=85" alt="Third slide"/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img class="d-block w-100" src="https://onaircode.com/wp-content/uploads/2017/11/Bootstrap-Carousel-Full-Screen.jpg" alt="Third slide"/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img class="d-block w-100" src="https://onaircode.com/wp-content/uploads/2017/11/Bootstrap-Carousel-Full-Screen.jpg" alt="Third slide"/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;