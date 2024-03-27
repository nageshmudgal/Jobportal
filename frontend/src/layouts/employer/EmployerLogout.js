import React, { useEffect } from 'react'

const EmployerLogout = () => {
    useEffect(()=>{
        localStorage.clear();
        window.location.href = "/employer/login";
    },[])

  return (
    <div>EmployerLogout</div>
  )
}

export default EmployerLogout