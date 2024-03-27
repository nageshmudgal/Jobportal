import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {host} from './../components/host';

const ShowJobs2 = () => {
  const [Jobs, setJobs] = useState([]);
  const [Filtered,setfiltered] = useState([]);
  const jobsData = async () => {
    const data = await axios.get(`${host}/api/v1/guest/jobs`);
    setJobs(data.data.data);
    setfiltered(data.data.data);
    console.log(Jobs)
  }
  const [companies, setCompanies] = useState([]);
  const companiesData = async () => {
    const data = await axios.get(`${host}/api/v1/admin/displayemployers`);
    setCompanies(data.data.data);
    console.log(data)
  }
  useEffect(() => {
    jobsData();
    companiesData();
  }, []);



  const CompFil = async (id) => {
    console.log(Jobs);
    console.log("id", id);
    console.log("jobepid", Jobs[0].empid._id);
    const filtered = Jobs.filter((item) => item.empid._id === id)
    setfiltered(filtered);
    console.log(filtered);
  }
  const TypeFil = async (jtype) => {
    console.log(Jobs);
    console.log("id", jtype);
    
    const filtered = Jobs.filter((item) => item.mode === jtype)

    const result = Filtered.filter(i => {
      let arr = filtered.filter(j => j._id === i._id)
      return !(arr.length === 0)
    });

    setfiltered(result);
    console.log(Jobs);
  }

  return (
    <div className='mx-5'>

      <div className='mt-5 text-center'><h1>Jobs</h1></div>


      <Row xs={1} md={4} className="g-4">
        <Col xs={5} md={3}>
          <Card>
            <Card.Body>
              <Card.Title className='mb-4'>Filter</Card.Title>

              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>

              <DropdownButton id="dropdown-item-button" title="Company" className='my-3'>
                {
                  companies.map((d, i) => {
                    return <>
                    <Form.Check type="checkbox" onChange={() => { CompFil(d._id) }} label={d.company}/>
                    </>
                  })
                }

              </DropdownButton>

              <DropdownButton id="dropdown-item-button" title="Mode" className='my-3'>
              <Form.Check type="checkbox" onClick={() => { TypeFil('WFO') }} label='Work From Office'/>
              <Form.Check type="checkbox" onClick={() => { TypeFil('WFH') }} label='Work From Home'/>
              </DropdownButton>

              <DropdownButton id="dropdown-item-button" title="Department" className='my-3'>
                <Dropdown.Item as="button">Information Tecnology</Dropdown.Item>
                <Dropdown.Item as="button">Management</Dropdown.Item>
                <Dropdown.Item as="button">Marketing</Dropdown.Item>
              </DropdownButton>

              <DropdownButton id="dropdown-item-button" title="Experince" className='my-3'>
                <Dropdown.Item as="button">Freasher(0-1)</Dropdown.Item>
                <Dropdown.Item as="button">2-5 years</Dropdown.Item>
                <Dropdown.Item as="button">5+ years</Dropdown.Item>
              </DropdownButton>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={13} md={9}>
          <Row>
            {
              Filtered.map((d, i) => {
                return <Col > <Card style={{ width: '18rem' }} border="info">
                  <Card.Body>
                    <Card.Title>{d.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{d.empid.company}</Card.Subtitle>
                    <Card.Text>
                      Salary:{d.salary}
                    </Card.Text>
                    <Card.Link href="../user/login">Apply</Card.Link>
                  </Card.Body>
                </Card>
                </Col>
              })
            }
          </Row>
        </Col>

      </Row>

    </div>

  )
}

export default ShowJobs2