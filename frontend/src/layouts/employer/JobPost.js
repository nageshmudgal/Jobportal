import React, { useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import axios from 'axios';
import {host} from '../../components/host';
import {
    MDBInput,
    MDBRow,
    MDBCheckbox,
    MDBBtn,
    MDBIcon
  } from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom'

export const JobPost = () => {

//fetch user data
        const token = localStorage.getItem("employerToken");
        const [empid, setempid] = useState("")
        console.log("Token is ", token)

        const config = {
            headers:{Authorization:`bearer ${token}`}
        }
        
        const getUser = async () => {
        const url = `${host}/api/v1/employer/`
        const result = await axios.get(url,config)
        setempid(result.data.data.id)
        }

        useEffect(()=>{
            getUser();
        },[]);

    
    
    const [title, settitle] = useState("")
    const [salary, setsalary] = useState("")
    const [mode, setmode] = useState("")
    const [skills, setskills] = useState("")

    const data = {empid, title, salary, mode,skills}
    const navigate = useNavigate();
    const InsertData = async () => {
        const res = await axios.post(`${host}/api/v1/employer/jobpost`, data)
        console.log(res.data.message)
        settitle("");
        setsalary("");
        setmode("");
        setskills("");
        alert(res.data.message);
    }
    return (
        <>
            <form className='w-25 p-3 mx-auto mt-5' >

                <h1 className='text-center'>Post Job</h1>

                <MDBInput className='mb-4' type='text' id='form3Example1' label='Title' value={title} onChange={(e) => {
                    settitle(e.target.value)}} />
                <MDBInput className='mb-4' type='text' id='form3Example2' label='salary' value={salary} onChange={(e) => {
                    setsalary(e.target.value)}} />
                <MDBInput className='mb-4' type='text' id='form3Example3' label='Mode' value={mode} onChange={(e) => {
                    setmode(e.target.value)}} />
                <MDBInput className='mb-4' type='text' id='form3Example4' label='Skill' value={skills} onChange={(e) => {
                    setskills(e.target.value)}} />

                <MDBRow>
                    <Button variant="primary" onClick={() => { InsertData() }}>Post</Button>
                </MDBRow>
            </form>
        
        </>
    )
}
