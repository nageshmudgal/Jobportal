import React from 'react'
import Header from '../../components/MainHeader'
import Footer from '../../components/Footer'
import { Outlet } from 'react-router-dom'

export const GuestModule = () => {
    const Links = [{ link: "/", linkdis: "Home" }, { link: "../jobs", linkdis: "Jobs" }, { link: "../companies", linkdis: "Companies" }, { link: "/contact", linkdis: "Contact" }, { link: "/about", linkdis: "About" }]
    const Dropdown = [{ link: "../user/login", linkdis: "User" }, { link: "../", linkdis: "Jobs" }]
    
    return (
        <>
        

        <Header Links={Links} />

        
            <Outlet/>
        {/* <Footer /> */}
        </>
    )
}