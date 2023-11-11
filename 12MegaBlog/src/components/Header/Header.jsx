import React from 'react'
import {Container,LoginBtn,Logo,LogoutBtn} from './../index'
import { Link, useNavigate } from 'react-router-dom'
import { logout,login } from '../../store/authSlice'
import { useSelector } from 'react-redux'


function Header() {
  const authStatus=useSelector((state)=>state.auth.status)
  const navigate=useNavigate()
  const navItems=[
    {
      name:"Home",
      slug:"/",
      active:true
    },
    {
      name:"Login",
      slug:"/login",
      active:!authStatus
    },
    {
      name:"Log out",
      slug:"/logout",
      active:authStatus
    },
    
    {
      name:"Add-Post",
      slug:"/add-post",
      active:authStatus
    },
    {
      name:"All Posts",
      slug:"/all-posts",
      active:authStatus
    }
  ]
  return (
    <header className="shadow sticky z-50 top-0 w-full">
            
      <Container>
        <nav className="w-full bg-white border-gray-200 px-4 lg:px-6 py-2.5">     
          <div className="flex justify-between items-center mx-auto max-w-screen-xl">
            <Link to='/'>
              <Logo width='70px'   />
            </Link>
            <div
                className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                id="mobile-menu-2"
            >
              <ul className='flex ml-auto'>
                {navItems.map((item) => 
                item.active ? (
                  <li key={item.name}>
                    <button
                    onClick={() => navigate(item.slug)}
                    className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
                    >{item.name}</button>
                  </li>
                ) : null
                )}
                {/* {authStatus && (
                  <li>
                    <LogoutBtn />
                  </li>
                )} */}
              </ul>
            </div>
          </div>
        </nav>  
      </Container>
    </header>
  )
}

export default Header