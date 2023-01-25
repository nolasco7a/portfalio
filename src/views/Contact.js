import React from 'react'
import { Fancy } from '../components/Buttons'
import { resume } from '../utils/download'

export const Contact = () => {
  return (
    <div className="main_container">
      <div className='view-margin contact_container'>
        <h1 className='title'>Contact</h1>
        <p className='information'>I'm looking for opportunities to collaborate with companies/agencies/individuals, not just work for them. I want to bring my experience where we can work together to solve real business problems in a way that optimizes all our respective experiences and expertise.</p>
        <p className='information'>If the above sounds good to you, please get in touch with me, I am confident that I have the skills and knowledge to play a good role and meet the client's expectations.</p>
        <Fancy text='Contact me' download={false} route={'mailto:nolasco7a@gmail.com'}/>
        <Fancy text='Download my resume' download={true} route={resume} />
      </div>
    </div>
  )
}

export default Contact