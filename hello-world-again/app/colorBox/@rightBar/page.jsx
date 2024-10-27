import React from 'react'

function right() {
  return (
    <div>right</div>
  )
}

export default right

//mentioning the @ before ie @rightBar the file name helps to implement parallel routes. which can be rendered conditionally. from the layout.js of colorBox

//these files cannot be rendered by mentioning paths. it have to be used as children from the layout.js of colorbox, from there we can use them 