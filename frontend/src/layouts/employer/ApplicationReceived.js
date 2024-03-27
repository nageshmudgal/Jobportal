import axios from 'axios';
import {host} from '../../components/host';
import React, { useEffect, useState } from 'react'
import { Link, useOutletContext, useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

const ApplicationReceived = ({route}) => {
  const [applications,setApplications] = useState();
  const [Employer] = useOutletContext();
  // const { id } = route.params;
  // console.log(id)  JSON.stringify(
  const { id } = useParams();
  const getapplications = async () => {
    var url = `${host}/api/v1/employer/applications/`
    url = url+id
    const result = await axios.get(url)
    setApplications(result.data.data)
    }

    useEffect(()=>{
        getapplications();
    },[]);
  return (
    <>
    <div className='mt-5 text-center'><h1>Applications Received</h1></div>

    {
        applications&&applications.map((d,i)=>{
                return <Card style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title>{d.userid.userName}</Card.Title>
                  
                  <Card.Subtitle className="mb-2 text-muted">Mobile:{d.userid.userMobile}</Card.Subtitle>
                  <Card.Text>
                    {d.status}
                  </Card.Text>
                  
                <Link to={`../userprofile/${d.userid._id}` } >View user Profile</Link>
                </Card.Body>
              </Card>
            })
        }
    </>
  )
}

export default ApplicationReceived