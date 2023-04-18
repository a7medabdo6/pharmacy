import React from 'react'

const PolicyText = ({title,text}) => {
  return (
    <div className='policybox pt-1'>
        <p className="titlepolicy">{title}</p>
        <p className='textpolicy'>{text}</p>
    </div>
  )
}

export default PolicyText