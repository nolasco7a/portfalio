import React from 'react'

export const CodeTag = (props) => {
  return (
    <div>
      <kbd className='codetag'> &lt;{props.tag}&gt;</kbd>
    </div>
  )
}

export default CodeTag