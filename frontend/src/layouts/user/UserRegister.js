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

export const UserRegister = () => {
    const [userName, setUserName] = useState("")
    const [userEmail, setUserEmail] = useState("")
    const [userMobile, setUserMobile] = useState("")
    const [userPassword, setUserPassword] = useState("")
    const [userRPassword, setUserRPassword] = useState("")

    const data = { userName, userEmail, userMobile, userPassword, userRPassword }
    const navigate = useNavigate();
    const InsertData = async () => {
        const res = await axios.post(`${host}/api/v1/user/register`, data)
        console.log(data)
        navigate('/user/login', { replace: true });
        alert(res.data.message);
    }
    return (
        <>
            <form className='w-25 p-3 mx-auto mt-5' >

                <h1 className='text-center'>User Sign up</h1>

                <MDBInput className='mb-4' type='text' id='form3Example1' label='User name' value={userName} onChange={(e) => {
                    setUserName(e.target.value)}} />

                <MDBInput className='mb-4' type='email' id='form3Example2' label='Email address' value={userEmail} onChange={(e) => {
                    setUserEmail(e.target.value)}} />

                <MDBInput className='mb-4' type='number' id='form3Example3' label='Mobile' value={userMobile} onChange={(e) => {
                    setUserMobile(e.target.value)}} />

                <MDBInput className='mb-4' type='password' id='form3Example4' label='Password' value={userPassword} onChange={(e) => {
                        setUserPassword(e.target.value)}} />
                
                <MDBInput className='mb-4' type='password' id='form3Example5' label='Re-Password' value={userRPassword} onChange={(e) => {
                        setUserRPassword(e.target.value)}} />

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
