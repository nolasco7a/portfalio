import React from 'react'
import Navbar from '../components/Navbar'
import vue_icon from '../assets/icons/vue_icon.svg'
import typescript_icon from '../assets/icons/typescript_icon.svg'
import atlassian_icon from '../assets/icons/atlassian_icon.svg'
import docker_icon from '../assets/icons/docker_icon.svg'
import figma_icon from '../assets/icons/figma_icon.svg'
import firebase_icon from '../assets/icons/firebase_icon.svg'
//import git_icon from '../assets/icons/git_icon.svg'
import graphql_icon from '../assets/icons/graphql_icon.svg'
import html5_icon from '../assets/icons/html5_icon.svg'
import jquery_icon from '../assets/icons/jquery_icon.svg'
import js_icon from '../assets/icons/js_icon.svg'
import json_icon from '../assets/icons/json_icon.svg'
import laravel_icon from '../assets/icons/laravel_icon.svg'
import mongo_icon from '../assets/icons/mongo_icon.svg'
import mysql_icon from '../assets/icons/mysql_icon.svg'
import node_icon from '../assets/icons/node_icon.svg'
import php_icon from '../assets/icons/php_icon.svg'
import postman_icon from '../assets/icons/postman_icon.svg'
import python_icon from '../assets/icons/python_icon.svg'
import react_icon from '../assets/icons/react_icon.svg'
import css_icon from '../assets/icons/css_icon.svg'
import sass_icon from '../assets/icons/sass_icon.svg'
import { resume } from '../utils/download'
import me from '../assets/images/me_2.png'

import { Fancy } from '../components/Buttons'
import IveWorked from '../components/IveWorked'

export const About = () => {
  return (
    <div className='main_container'>
      <Navbar />
      <div className='view-margin'>
        <div className='main_information'>
          <div className='about_devimage'>
            <img src={me} alt='dev' />
          </div>
          <div className='about_maininformation'>
            <h1 className='title'>About</h1>
            <p className='introduction'>
              Hi! <strong>Front-end Developer</strong> with 4+ years of experience
            </p>
            <p className='information'>
              Designing and developing multiple web-based applications, incorporating a range of technologies like JavaScript, PHP, React, Vue, React-Native, GraphQL, API Rest, Axios, MySQL and Laravel Focused on delivering exceptional customer experiences and developing efficient and optimized code.
            </p>
            <p className='information'>
               My goal is to find an organization that allows me to apply the knowledge acquired in years of study and work. Being part of a work team and consolidating myself professionally in a company where achievements and personal performance are recognized, in addition to enabling opportunities for personal and professional development.
            </p>
            <Fancy text='Download my resume' download={true} route={resume} />
          </div>
        </div>

        <h2 className='mt-5'>My skills</h2>
        <div className='icons'>
          <img src={html5_icon} alt='html5_icon'/>
          <img src={css_icon} alt='react_icon'/>
          <img src={js_icon} alt='jquery_icon'/>
          <img src={vue_icon} alt="vue_icon" />
          <img src={react_icon} alt='react_icon'/>
          <img src={typescript_icon} alt="vue_icon" />
          <img src={node_icon} alt='node_icon'/>
          <img src={php_icon} alt='php_icon'/>
          <img src={laravel_icon} alt='laravel_icon'/>
          <img src={graphql_icon} alt='graphql_icon'/>
          <img src={json_icon} alt='json_icon'/>
          <img src={python_icon} alt='python_ißcon'/>
          <img src={firebase_icon} alt='firebasse_icon'/>
          <img src={jquery_icon} alt='jquerys_icon'/>
          <img src={mysql_icon} alt='mysql_icon'/>
          <img src={mongo_icon} alt='mongo_icon'/>
          <img src={docker_icon} alt='docker_icon'/>
          <img src={postman_icon} alt='postman_icon'/>
          <img src={atlassian_icon} alt='atlassian_icon'/>
          <img src={figma_icon} alt='figma_icon'/>
          <img src={sass_icon} alt='sass_icon'/>
        </div>

        <h2 className='mt-5'>Where I've working</h2>
        <IveWorked />
      </div>
    </div>
  )
}

export default About