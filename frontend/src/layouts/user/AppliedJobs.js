import axios from 'axios'
import {host} from '../../components/host';
import Card from 'react-bootstrap/Card';
import React, { useEffect, useState } from 'react'
import { useOutletContext } from 'react-router-dom';

const AppliedJobs = () => {
  const [jobs, setJobs] = useState([])
  var [User] = useOutletContext();
  

  const getjobs = async () => {
    const data = { userid: User.user_id}
    var result = await axios.post(`${host}/api/v1/user/appliedjobs`,{ userid: User.user_id}&&{ userid: User.user_id})
    setJobs(result.data.data)
    console.log(result)
    console.log(jobs)
    }

    useEffect(()=>{
        getjobs();
    },[]);
  return (
    <>
    <div>Applied Jobs test</div>

    {
        jobs&&jobs.map((d,i)=>{
                return <Card style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title>{d.jobid.title}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
                  <Card.Text>
                    Salary:{d.jobid.salary}
                  </Card.Text>
                  <Card.Link href="#">Applied</Card.Link>
                </Card.Body>
              </Card>
            })
        }
    
    </>
  )
}

export default AppliedJobs