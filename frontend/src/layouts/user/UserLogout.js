import React, { useEffect } from 'react'

const UserLogout = () => {

    useEffect(()=>{
        localStorage.clear();
        window.location.href = "/user/login";
    },[])
  return (
    <div>Hello UserLogout</div>
  )
}

export default UserLogout