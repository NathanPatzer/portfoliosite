import React from 'react'

const Experience = (props) => {
  const {list} = props
  return (
    <div className='info'>
       <h3>{props.name}</h3>
       <h3>{props.year}</h3>
       <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
       </ul>
    </div>
  )
}

export default Experience
