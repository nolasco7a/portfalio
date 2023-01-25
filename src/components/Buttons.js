import React from 'react'

export const Fancy = (props) => {
  const {text, route, download} = props
  return (
      <a href={route?route:null} target={download?'_blank':null} rel="noreferrer" download={download} className='mr-4'>
      <div className="buttons_fancy">
        <span className="top-key"></span>
        <span className="text">{text}</span>
        <span className="bottom-key-1"></span>
        <span className="bottom-key-2"></span>
      </div>
    </a>
  )
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { Fancy }
