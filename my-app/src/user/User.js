import React from 'react'

const User = (props) => {
  return (
    <div>
      <h1>NAME:{props.name1}</h1>
      <h1>AGE:{props.age}</h1>
      <h1>HEIGHT:{props.height}</h1>
      <h1>QUALIFICATION:{props.qualification}</h1>
    </div>
  )
}

export default User;
