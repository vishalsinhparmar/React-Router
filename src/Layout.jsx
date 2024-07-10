import React from 'react'
import NavbarApp from './components/NavbarApp'
import Home from './components/Home'
import Customer from './components/Customer'
import Services from './components/Services'
import Team from './components/Team'
import Contact from './components/Contact'
import { Outlet } from 'react-router-dom'




export default function Layout() {
  return (
   <>

     <NavbarApp/>
     <Outlet/>
     <Contact/>
   
 
  
   </>
  )
}
