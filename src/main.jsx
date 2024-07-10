import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import {BrowserRouter, Routes} from "react-router-dom"
import {Route} from "react-router-dom"

import Layout from './Layout'
import Home from './components/Home'
import Customer from './components/Customer'
import Services from './components/Services'
import Team from './components/Team'
import Contact from './components/Contact'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <BrowserRouter>
  
       <Routes>
       < Route path='/'  element={<Layout/>}>
       < Route index element={<Home/>}/>
       {/* < Route path='/home' element={<Home/>}/> */}
       < Route path='home' element={<Home/>}/>
       
       <Route path="customer" element={<Customer/>}/>
       <Route path="services" element={<Services/>}/>
       <Route path="team" element={<Team/>}/>
       <Route path="contact" element={<Contact/>}/>
     </Route>
       </Routes>    
       
    </BrowserRouter>
  
  </React.StrictMode>
    
)
