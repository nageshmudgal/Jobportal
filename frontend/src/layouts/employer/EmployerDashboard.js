import React, { useEffect, useState } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Outlet } from 'react-router-dom'
import axios from 'axios'
import {host} from '../../components/host';


export const EmployerDashboard = () => {
    const Links = [{ link: "../employer", linkdis: "Dashboard" }, { link: "../employer/postedjobs", linkdis: "Jobs Posted" }, { link: "../employer/jobpost", linkdis: "Postjob" }, { link: "../employer/logout", linkdis: "Logout" }]
    const token = localStorage.getItem("employerToken");
        // alert("Login Successfull");
        const [Employer,setEmployer]=useState([]);
        const config = {
            headers:{Authorization:`bearer ${token}`}
        }
        
        const getUser = async () => {
        const url = `${host}/api/v1/employer/`
        const result = await axios.get(url,config)
        setEmployer(result.data.data)
        console.log("user name is",result.data.data.name)
        }
        useEffect(()=>{
            getUser();
        },[]);
    
    return (
        <>
            <Header Links={Links} />
            <Outlet context={[Employer]}/>
            <Footer />
        </>
    )
}

