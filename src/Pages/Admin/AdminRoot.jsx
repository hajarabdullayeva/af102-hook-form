import React from 'react'
import { Outlet } from 'react-router'
import Header from "../../Components/Admin/Header"

const AdminRoot = () => {
  return (
    <>
    <Header/>
      <Outlet/>
    </>
  )
}

export default AdminRoot