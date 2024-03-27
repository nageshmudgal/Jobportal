import React from 'react'
import ShowJobs2 from '../../components/ShowJobs2'
import Testimonials from './Testimonials'
import Carousel from '../../layouts/general/Crousel'
import Footer from '../../components/Footer'
import im from '../../images/business.jpg'
import EF3 from '../../components/EditedFilter3'

export const HomePage = () => {
    const s={
       
        backgroundImage: `url(${im})`,
        // backgroundColor:'orange',
        minHeight: '420px',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        position:'relative'
          
    }
    const a={
        position:'absolute',
        top:'300px',
        right:'200px'
    }
    // const logo='https://www.shutterstock.com/image-vector/find-job-online-recruitment-platform-260nw-1034887747.jpg'
    const logo=im


    return (
        <>
        {/* <Carousel/> */}
        <div style={s}>
            <div style={a}>
                <h1>We can help you finding jobs</h1>
            </div>
        </div>
        {/* <img src={logo} style={{height:'720px'}} alt="Logo" />; */}
        {/* <ShowJobs2/> */}
        <EF3/>
        <Testimonials/>
        <Footer/>
        </>
    )
}
