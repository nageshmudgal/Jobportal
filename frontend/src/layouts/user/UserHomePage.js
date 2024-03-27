import React, { useEffect, useState } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Outlet } from 'react-router-dom'
import axios from 'axios'
import {host} from '../../components/host';

export const UserHomePage = () => {
    const Links = [{ link: "../user", linkdis: "Home" }, { link: "../user/jobs", linkdis: "Jobs" }, { link: "../user/companies", linkdis: "Companies" }, { link: "../user/appliedjobs", linkdis: "Applied Jobs Status" }, { link: "#", linkdis: "Profile" },{ link: "../user/logout", linkdis: "Log out" }]

        const token = localStorage.getItem("userToken");
        // console.log("Token is ", token)
        const [User,setUser]=useState([]);
        const config = {
            headers:{Authorization:`bearer ${token}`}
        }
        
        const getUser = async () => {
        const url = `${host}/api/v1/user/`
        const result = await axios.get(url,config)
        setUser(result.data.data)
        // console.log("user name is",result.data.data.userName)
        // console.log("user id is",result.data.data.user_id)
        }
        useEffect(()=>{
            getUser();
        },[]);


    

    
    return (
        <>
            <Header Links={Links} />
            Hello {User.userName}
            
            <Outlet context={[User]}/>
            <Footer />
        </>
    )
    }