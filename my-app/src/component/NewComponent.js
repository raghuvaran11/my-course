import React from 'react'
const NewComponent = (props) => {
  return (
    <>
    <div>newCompnent</div>
    <h1>{props.name}</h1>
    <h1>{props.age}</h1>
    <h>{props.data}</h>
    </>
  )

}

export default NewComponent;
