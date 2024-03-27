import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import axios from 'axios';
import {host} from './../components/host';

const UserReg = ()=>{
    const [userName,setUserName] = useState("")
    const [userEmail,setUserEmail] = useState("")
    const [userMobile,setUserMobile] = useState("")
    const [userPassword,setUserPassword] = useState("")
    const [userRPassword,setUserRPassword] = useState("")
    const [res,setRes] = useState("")
    const data = {userName,userEmail,userMobile,userPassword,userRPassword}
    const InsertData = async()=>{
        const result = await axios.post(`${host}/api/v1/user/register`,data)
        console.log(data)
        setRes(result)
    }
    return (
    <>
    {res}
    <div className="mx-auto" style={{width: "200"}}>
      <InputGroup className="mb-3">
        <Form.Control aria-label="first" placeholder='Enter UserName' value={userName} onChange={(e)=>{
          setUserName(e.target.value)
        }} />
      </InputGroup>
      <InputGroup className="mb-3">
        <Form.Control aria-label="first" placeholder='Enter UserEmail' value={userEmail} onChange={(e)=>{
          setUserEmail(e.target.value)
        }} />
      </InputGroup>
      <InputGroup className="mb-3">
        <Form.Control aria-label="first" placeholder='Enter UserMobile' value={userMobile} onChange={(e)=>{
          setUserMobile(e.target.value)
        }} />
      </InputGroup>
      <InputGroup className="mb-3">
        <Form.Control aria-label="first" placeholder='Enter Password' value={userPassword} onChange={(e)=>{
          setUserPassword(e.target.value)
        }} />
      </InputGroup>
      <InputGroup className="mb-3">
        <Form.Control aria-label="first" placeholder='Enter R Password' value={userRPassword} onChange={(e)=>{
          setUserRPassword(e.target.value)
        }} />
      </InputGroup>

      <Button variant="primary" onClick={()=>{InsertData()}}>InsertData</Button>
      </div>

    </>
    );
}

export default UserReg;