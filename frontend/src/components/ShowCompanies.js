import axios from "axios";
import React,{useEffect, useState} from "react";
import CompanyCard from "./CompanyCard";
import {host} from './../components/host';

const ShowCompanies = ()=>{
    const [Emps,setEmps]=useState([]);
    const empsData = async()=>{
        const data = await axios.get(`${host}/api/v1/guest/companies`);
        setEmps(data.data.data);
        console.log(Emps)
    }
    useEffect(()=>{
        empsData();
    },[]);

    return<>
        <div className='mt-5 text-center'><h1>Companies</h1></div>
        <div className='d-flex justify-content-around'>
        {
        Emps.map((d,i)=>{
                return <CompanyCard Links={d}/>
            })
        }
        </div>
    </>;
}

export default ShowCompanies;