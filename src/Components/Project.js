import React from 'react'

export default function Project({props}) {
  return (
    <div>
      <h4>{props.title}</h4>
      <img height={'300px'} width={'500px'}  src={props.image} alt="No cover photo provided" />
      <p>{props.description}</p>
    </div>
  )
}
