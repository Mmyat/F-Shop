import React from 'react'
import { Navigate } from 'react-router';
const AdminDashboard = () => {
     if (localStorage.getItem("token")){
          return (
               <div>AdminDashboard</div>)}
     else{
          return(<Navigate to={-1}/>)
     }
}

export default AdminDashboard