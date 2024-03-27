import React from 'react'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

export const Contact = () => {

  return (
    <>
      <div className='mt-5 text-center'><h1>Contact</h1></div>
      <div className='mx-auto mt-4' style={{width:'50%'}}>
      <Form>
        <Row>
          <Col>
            <Form.Control placeholder="First name" />
          </Col>
          <Col>
            <Form.Control placeholder="Last name" />
          </Col>
        </Row>
        <Form.Group className="mb-3 mt-3" controlId="formGroupEmail">
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <FloatingLabel controlId="floatingTextarea2" label="Comments">
        <Form.Control
          as="textarea"
          placeholder="Leave a comment here"
          style={{ height: '100px' }}
        />
      </FloatingLabel>
      <Button variant="primary" type="submit" className='mt-3'>
        Submit
      </Button>
      </Form>
      </div>
    </>
  )
}
