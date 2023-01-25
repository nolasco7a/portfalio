import React from 'react'
import CardProject from '../components/CardProject'
import projects from '../json/projects.json'


export const MyWork = () => {
  return (
     <div className="main_container">
      <div className='view-margin'>
        <h1 className='title'>My Work</h1>
        <p className='information'>Below are some of the last projects in which I have worked focused on solving the problem or challenge posed, throughout my career I have been exposed to various environments or types of industry and ultimately focused on the area of e-commerce.</p>
        {
         projects.map((project, i) =>
          (i+1)%2===0
          ?<CardProject project={project} sideInformation='left' key={i}/>
          :<CardProject project={project} sideInformation='right' key={i}/>
         )
        }
      </div>
    </div>
  )
}

export default MyWork