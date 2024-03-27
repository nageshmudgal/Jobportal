import React, { useEffect } from 'react'

const AdminLogout = () => {
    useEffect(()=>{
        localStorage.clear();
        window.location.href = "/admin/login";
    },[])
  return (
    <div>AdminLogout</div>
  )
}

export default AdminLogout