import React from 'react'
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

export const EmployerRegister = () => {
    const [name, setname] = useState("")
    const [company, setcompany] = useState("")
    const [email, setemail] = useState("")
    const [mobile, setmobile] = useState("")
    const [password, setpassword] = useState("")
    const [rpassword, setrpassword] = useState("")

    const data = { name, email, mobile,company ,password, rpassword }
    const navigate = useNavigate();
    const InsertData = async () => {
        const res = await axios.post(`${host}/api/v1/employer/register`, data)
        console.log(res.data.message)
        alert(res.data.message);
        setname("");
        setcompany("")
        setemail("")
        setmobile("")
        setpassword("")
        setrpassword("")
    }
    return (
        <>
            <form className='w-25 p-3 mx-auto mt-5' >

                <h1 className='text-center'>Employer Sign up</h1>

                <MDBInput className='mb-4' type='text' id='form3Example1' label='User name' value={name} onChange={(e) => {
                    setname(e.target.value)}} />

                <MDBInput className='mb-4' type='email' id='form3Example2' label='Email address' value={email} onChange={(e) => {
                    setemail(e.target.value)}} />

                <MDBInput className='mb-4' type='number' id='form3Example3' label='Mobile' value={mobile} onChange={(e) => {
                    setmobile(e.target.value)}} />
                <MDBInput className='mb-4' type='text' id='form3Example4' label='company' value={company} onChange={(e) => {
                    setcompany(e.target.value)}} />

                <MDBInput className='mb-4' type='password' id='form3Example4' label='Password' value={password} onChange={(e) => {
                        setpassword(e.target.value)}} />
                
                <MDBInput className='mb-4' type='password' id='form3Example5' label='Re-Password' value={rpassword} onChange={(e) => {
                        setrpassword(e.target.value)}} />

                <MDBCheckbox
                    wrapperClass='d-flex justify-content-center mb-4'
                    id='form3Example5'
                    label='Subscribe to our newsletter'
                    defaultChecked
                />

                <MDBRow>
                    <Button variant="primary" onClick={() => { InsertData() }}>Sign up</Button>
                </MDBRow>

                <div className='text-center'>
                    <p>or sign up with:</p>

                    <MDBBtn floating color="secondary" className='mx-1'>
                        <MDBIcon fab icon='facebook-f' />
                    </MDBBtn>

                    <MDBBtn floating color="secondary" className='mx-1'>
                        <MDBIcon fab icon='google' />
                    </MDBBtn>

                    <MDBBtn floating color="secondary" className='mx-1'>
                        <MDBIcon fab icon='twitter' />
                    </MDBBtn>

                    <MDBBtn floating color="secondary" className='mx-1'>
                        <MDBIcon fab icon='github' />
                    </MDBBtn>
                </div>
            </form>
        
        </>
    )
}
