import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

import Layout from './Layout'
import {Home ,About,Contact,User,Github,apiCall} from './components'

// const router=new createBrowserRouter([
//   {
//     path:'/',
//     element:<Layout/>,
//     children:[
//       {
//         path:"",
//         element:<Home/>
//       }
//       ,{
//         path:'about',
//         element:<About/>      }
//     ]
//   }
// ])

const router =new createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout/>}>
    <Route path='' element={<Home/>}/>
    <Route path='about' element={<About/>}/>
    <Route path="contact" element={<Contact/>}/>
    <Route path="user/:userId" element={<User/>}/>
    <Route path="github" element={<Github/>} loader={apiCall}/>
  </Route>
));

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
