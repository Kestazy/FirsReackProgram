import React from 'react'

const Contacts = (props) => {
    console.log(props)
  return (
    <div>
        <h3> Sveikas prisijunges, </h3>
        <p>User name {props.name}</p>
        <p>User email {props.email}</p>
    </div>
  )
}

export default Contacts