import React from 'react'
import CardProject from '../components/CardProject'
import projects from '../json/projects.json'
import { LinkOutlined } from '@ant-design/icons'

export const MyWork = () => {
  return (
     <div className="main_container">
      <div className='view-margin'>
        <h1 className='title'>My Work</h1>
        <p className='information'>Below are some of the most outstanding projects I have worked on, representing only a sample of my work. It is worth mentioning that, in addition to these showcased projects, I have also participated in other complex challenges that are not of a public nature. These additional projects include the implementation of inventory management and/or user management portals, which have been of vital importance for the success of several organizations.</p>

        <p className='information'>
          These aforementioned projects are just a representative sample of my experience and skills in developing complex and customized solutions. Throughout my career, I have worked on a number of private projects that have enabled organizations to optimize their operations and achieve outstanding results. While I cannot disclose specific details due to confidentiality agreements, I am available to discuss my contributions and additional experiences in these fields in a more private setting or during a personal interview.
        </p>

        <p>

        </p>
        {
         projects.map((project, i) =>
          (i+1)%2===0
          ?<CardProject project={project} sideInformation='left' key={i}/>
          :<CardProject project={project} sideInformation='right' key={i}/>
         )
        }

        <div className='another-projects'>
          <p className='introduction color-white'>Another small projects</p>
          <ul>
            <li>
              <a href='https://weather-eight-flax.vercel.app/' target='_blank' rel='noreferrer'>
               <LinkOutlined /> Weather web application <br/>
              </a>
              <div className='stack-tech'>react</div>
            </li>
            <li>
              <a href='https://seacrh-images.vercel.app/' target='_blank' rel='noreferrer'>
               <LinkOutlined /> Search images web application<br/>
              </a>
              <div className='stack-tech'>react</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default MyWork