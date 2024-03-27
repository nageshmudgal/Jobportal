import React from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useOutletContext } from 'react-router-dom';

const EmployerHomepage = () => {
  const [Employer] = useOutletContext();

  return (
    <div>
      
      <div className='mt-5 text-center'><h1>Welcome {Employer.name}</h1></div>
        

        <Row xs={1} md={2} className="g-4 mt-3">
      
        <Col>
        <Card bg='success' text='white' style={{ width: '18rem' }} className="mx-auto">
        <Card.Body>
        <Card.Title>Jobs Posted: 2</Card.Title>
        </Card.Body>
        </Card>
        </Col>

        <Col>
        <Card bg='success' text='white' style={{ width: '18rem' }} className="mx-auto">
        <Card.Body>
        <Card.Title>Applications Received: 3</Card.Title>
        </Card.Body>
        </Card>
        </Col>
        
        </Row>
        {/* <div className='d-flex justify-content-evenly'>
        <Card bg='success' text='white' style={{ width: '18rem' }} className="mx-auto">
        <Card.Body>
        <Card.Title>Jobs Posted: 2</Card.Title>
        </Card.Body>
        </Card>
        <Card bg='success' text='white' style={{ width: '18rem' }}>
        <Card.Body>
        <Card.Title>Applications Received: 3</Card.Title>
        </Card.Body>
        </Card>
        </div> */}

    

    </div>

  )
}

export default EmployerHomepage