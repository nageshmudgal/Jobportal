import axios from "axios";
import React,{useEffect, useState} from "react";
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/esm/Button";
import { useOutletContext } from 'react-router-dom';
import {host} from './../components/host';



const ShowJobs = (props)=>{

    const [User] = useOutletContext();

    
    const Apply = async (id) => {
        var data = {jobid:id,userid:User.user_id}
        const res = await axios.post(`${host}/api/v1/user/apply`, data)
        alert("Applied Successfully");
    }

    const [Jobs,setJobs]=useState([]);
    const [AppliedJobs,setAppliedJobs]=useState([]);
    const jobsData = async()=>{
        var data = await axios.get(`${host}/api/v1/guest/jobs`);
        setJobs(data.data.data);
        console.log(Jobs)
    }
    const AppliedJobsData = async()=>{
      var data = await axios.get(`${host}/api/v1/user/jobs`);
      setAppliedJobs(data.data.data);
      console.log(Jobs)
  }
    useEffect(()=>{
        jobsData();
    },[]);

   
    

    return<div>{User.user_id}
        <h1>Jobs</h1>
        {
        Jobs.map((d,i)=>{
                return <Card style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title>{d.title}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{d.empid.company}</Card.Subtitle>
                  <Card.Text>
                    Salary:{d.salary}
                  </Card.Text>
                  <Button variant="primary" onClick={() => { Apply(d._id) }} size="sm">Apply</Button>
                </Card.Body>
              </Card>
            })
        }
    </div>;
}

export default ShowJobs;