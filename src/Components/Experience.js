import React from 'react'

export default function Experience({props}) {
  return (
    <div style={{border: 'solid 0px #112233'}}>
      <h1 style={{fontSize: '30px',border: 'solid 0 #84854bff'}}>
        {props.title}
      </h1>
      <h2 style={{fontStyle: 'unset', fontSize: '20px',border: 'solid 0px #00ff00'}}>
        {props.instatutionName}
      </h2>
      <p style={{fontStyle: 'unset', fontSize: '16px',border: 'solid 0px #ff3300ff'}}>
        {props.duration}
      </p>
      <p style={{fontStyle: 'unset', fontSize: '16px', whiteSpace: 'pre-line',border: 'solid 0px #ff3300ff'}}>
        {props.description}
      </p>
    </div>
  )
}
