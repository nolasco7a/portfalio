import React from 'react'
import CodeTag from './CodeTag'
import {Link} from 'react-router-dom'

export const NavMenu = (props) => {
  const {visible} = props
  return (
    <div>
      {/* hacer otro menu que sera visible desde desktops el cual los navs actuaran por hover */}
      <CodeTag tag={visible?'nav':'ul'}/>
          <ul>
            <li>{visible?<a className='hover-underline-animation' href='#about'>About</a>:'Hi!'}</li>
            <li>{visible?<a className='hover-underline-animation' href='#mywork'>My work</a>:"I'm"}</li> 
            <li>{visible?<a className='hover-underline-animation' href='#contact'>Contact</a>:'Allan'}</li>
          </ul>
      <CodeTag tag={visible?'/nav':'/ul'}/>
    </div>
  )
}

export default NavMenu