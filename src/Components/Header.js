import React from 'react'

export default function Header({props}) {
  return (
    <div style={{}}>
      <h1 style={{fontSize: '48px', margin:'0px'}}>
        {props.name}
      </h1>
      <h3 style={{fontSize: '20px', marginTop:'10px' }}>
        {props.title}
      </h3>
    </div>
  )
}
