import React from 'react'
import { LinkOutlined, AndroidOutlined, AppleOutlined } from '@ant-design/icons'


export const CardProject = (props) => {
  const { project, sideInformation } = props
  const { image, title, description, type_application, stack_tech } = project
  console.log(project)
   return (
    <a href={project.url_web?project.url_web:null} className='style-none' rel='noreferrer' target="_blank">
      <div className={sideInformation==='left'?'cardproject information-left':'cardproject information-right'}>
        <div className='cardproject_image'>
          <img src={image} alt={image} />
        </div>
        <div className='cardproject_information_side'>
          <div className='card_information_side'>
            <span className='type-project'>{type_application}</span>
            <h2 className='name-project'>{title}</h2>
            <div className='card_information'>
              {description.map(desc=><p>{desc}</p>)}
            </div>
            <div className='stack_tech_used'>
              {stack_tech.map(tech => <p>{tech}</p>)}
            </div>

            <div className='icon_information_side'>
              {project.url_web?<a href={project.url_web} target="_blank" rel='noreferrer'><LinkOutlined /></a>:null}
              {project.url_googleplay?<a href={project.url_googleplay} target="_blank" rel='noreferrer'><AndroidOutlined /></a>:null}
              {project.url_applestore?<a href={project.url_applestore} target="_blank" rel='noreferrer'><AppleOutlined /></a>:null}
              {project.git?<a href={project.git.backend.url} target="_blank" rel='noreferrer'>Backend <LinkOutlined /></a>:null}
              {project.git?<a href={project.git.frontend.url} target="_blank" rel='noreferrer'>Frontend <LinkOutlined /></a>:null}
            </div>
          </div>
        </div>
      </div>
    </a>
  )
  
}



export default CardProject
