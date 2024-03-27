import axios from "axios";
import React,{useEffect, useState} from "react";
import {host} from './../components/host';

const ShowData = ()=>{
    const [User,setUser]=useState([]);
    const userData = async()=>{
        const data = await axios.get(`${host}/api/v1/user`);
        setUser(data.data.data);
        console.log(User)
    }
    useEffect(()=>{
        userData();
    },[]);

    return<div>
        <h1>User Data</h1>
        <table>
        {
            User.map((d,i)=>{
                return<tbody>
                <tr>
                <td>{i+1}</td>
                <td>{d.userName}</td>
                <td>{d.userEmail}</td>
                </tr>
                </tbody>
            })
        }
        </table>
    </div>;
}

export default ShowData;