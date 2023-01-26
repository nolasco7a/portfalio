import React from 'react'
import { useState } from 'react';
import CodeTag from '../components/CodeTag';
import NavMenu from '../components/NavMenu';
import { Fancy } from '../components/Buttons'
import About from './About'
import Contact from './Contact'
import Mywork from './MyWork'

export const Home = () => {
  const [menu, setMenu] = useState(false)

  const toggleVisibleMenu = () =>{
    setMenu(!menu)
  }
  
  return(
    <div>
      <div className="mainpage_grid" >
        <div className="header"></div>
        <div className="mainpage_container">
            <div 
              onClick={()=>toggleVisibleMenu()}
              onMouseOver={()=>setMenu(true)}
              onMouseLeave={()=>setMenu(false)}
            >
              <NavMenu visible={menu} />
              <CodeTag tag="p"/>
              <p className="profession">Front-end Developer</p>
              <CodeTag tag="/p"/>
              <Fancy text='Contact me' download={false} route={'mailto:nolasco7a@gmail.com'}/>
            </div>
        </div>
        <div className='photo' onClick={()=>toggleVisibleMenu()}>
         
        </div>
        <div className="footer" onClick={()=>toggleVisibleMenu()}>
          <p>Touch anywhere</p>
        </div>
      </div>  
      <section id='about'>
        <About/>  
      </section> 
      <section id="mywork">
        <Mywork/>
      </section>
      <section id='contact'>
        <Contact/>
      </section>
    </div>
  )
}

export default Home