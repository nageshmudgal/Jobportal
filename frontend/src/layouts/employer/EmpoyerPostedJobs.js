import axios from 'axios';
import {host} from '../../components/host';
import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


const EmpoyerPostedJobs = () => {
    const navigate=useNavigate();

    //fetch user by token
    const token = localStorage.getItem("employerToken");
        const [jobs, setJobs] = useState("")
        

        const config = {
            headers:{Authorization:`bearer ${token}`}
        }
        const getjobs = async () => {
            const url = `${host}/api/v1/employer/postedjobs`
            const result = await axios.get(url,config)
            setJobs(result.data.data)
            
            }
    
            useEffect(()=>{
                getjobs();
            },[]);
  return (
    <>
          <div className='mt-5 text-center'><h1>Posted Jobs</h1></div>
        <Row xs={1} md={4} className="g-4"> 
        {
        jobs&&jobs.map((d,i)=>{
                return <Col key={i}> <Card style={{ width: '18rem' }} border="info">
                <Card.Body>
                  <Card.Title>{d.title}</Card.Title>
                  
                  <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
                  <Card.Text>
                    Salary:{d.salary}
                  </Card.Text>
                <Link to={`../applications/${d._id}` }  >Applications</Link>
                </Card.Body>
              </Card>
              </Col>
            })
        }
        </Row>
        
    </>
    )
}

export default EmpoyerPostedJobs