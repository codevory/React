import React from 'react'

const ReactHOC = (ChildComponent) => {
  return function NewComponent(props){
    return (
        <div style={{border:'2px solid blue', padding:'10px', background:'darkblue'}}>
            <ChildComponent {...props} />
        </div>
    )
  }
}

export default ReactHOC
