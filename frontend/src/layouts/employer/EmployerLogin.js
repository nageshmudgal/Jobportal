import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import {host} from '../../components/host';

// import { useNavigate } from 'react-router-dom'
// import { useAlert } from 'react-alert'
import {
    MDBInput,
    MDBCol,
    MDBRow,
    MDBCheckbox,
    MDBBtn,
    MDBIcon
} from 'mdb-react-ui-kit';

export const EmployerLogin = () => {
    const [employerEmail, setEmployerEmail] = useState("")
    const [employerPassword, setEmployerPassword] = useState("")
    const data = { employerEmail, employerPassword }

    
    const Login = async () => {
        const res = await axios.post(`${host}/api/v1/employer/login`, data)
        console.log(res.data.data)
        if (res.data.message === "Login Successfull") {
            localStorage.setItem("employerToken", res.data.token);
            window.location.href = "/employer";
            console.log("login Success")
        }
        else
        {
            alert(res.data.message);
            setEmployerEmail("");
            setEmployerPassword("");
        }
    }
    return (
        <>
            <form className='w-25 p-3 mx-auto mt-5'>
                <h1 className='text-center'>Employer Sign in</h1>
                <MDBInput className='mb-4' type='email' id='form2Example1' label='Email address' required value={employerEmail} onChange={(e) => { setEmployerEmail(e.target.value) }} />
                <MDBInput className='mb-4' type='password' id='form2Example2' label='Password' required value={employerPassword} onChange={(e) => { setEmployerPassword(e.target.value) }} />

                <MDBRow className='mb-4'>
                    <MDBCol className='d-flex justify-content-center'>
                        <MDBCheckbox id='form2Example3' label='Remember me' defaultChecked />
                    </MDBCol>
                    <MDBCol>
                        <a href='#!'>Forgot password?</a>
                    </MDBCol>
                </MDBRow>
                <MDBRow>
                    <Button variant="primary" onClick={() => { Login() }}> Login </Button>
                </MDBRow>
                

                <div className='text-center'>
                    <p>
                        Not a member? <a href='../employer/register'>Register</a>
                    </p>
                </div>
            </form>
        </>
    )
}
