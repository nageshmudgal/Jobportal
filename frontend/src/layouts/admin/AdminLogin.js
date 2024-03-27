import React, { useState } from 'react'
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

export const AdminLogin = () => {
    const [adminEmail, setAdminEmail] = useState("")
    const [adminPassword, setAdminPassword] = useState("")
    const data = { adminEmail, adminPassword }

    const Login = async () => {
        const res = await axios.post(`${host}/api/v1/admin/login`, data)
        if (res.data.message === "Login Successfull") {
            localStorage.setItem("adminToken", res.data.token);
            window.location.href = "/admin";
            alert("Login Successfull");
        }
        else
        {
            alert(res.data.message);
            setAdminEmail("");
            setAdminPassword("");
        }
        console.log(res.data.message)
    }
    return (
        <>
            <form className='w-25 p-3 mx-auto mt-5'>
                <h1 className='text-center'>Admin Login</h1>
                <MDBInput className='mb-4' type='email' id='form2Example1' label='Email address' required value={adminEmail} onChange={(e) => { setAdminEmail(e.target.value) }} />
                <MDBInput className='mb-4' type='password' id='form2Example2' label='Password' required value={adminPassword} onChange={(e) => { setAdminPassword(e.target.value) }} />

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
                        Not a member? <a href='#!'>Register</a>
                    </p>
                </div>
            </form>
        </>
    )
}
