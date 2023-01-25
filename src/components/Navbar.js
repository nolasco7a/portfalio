import React from 'react'
import { useLocation } from 'react-router-dom'

const routes = [
  {
    name:"About",
    path:"/#about",
  },
  {
    name:"Contact",
    path:"/#contact",
  },
  {
    name:"Home",
    path:"/",
  },
  {
    name:"My work",
    path:"/#mywork",
  }
]

export const Navbar = () => {
  const {pathname} = useLocation()
  const routesToShow = routes.filter(route => route.path!==pathname)

  return (
    <div className='navbar_container'>
      {routesToShow.map(route => 
        pathname!==route.path
        ? <a className='navItem hover-underline-animation' href={route.path} key={route.name}>{route.name}</a>
        : ''
      )}
    </div>
  )
}

export default Navbar