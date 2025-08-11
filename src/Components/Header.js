import React from 'react'

export default function Header({props}) {
  return (
    <div>
      <h1 style={{fontSize: '48px'}}>
        {props.name}
      </h1>
      <h3 style={{fontSize: '20px'}}>
        {props.title}
      </h3>
    </div>
  )
}
