import React from 'react'

function left() {
  return (
    <div>left</div>
  )
}

export default left

//mentioning the @before the file name helps to implement parallel routes. which can be rendered conditionally. from the layout.js of colorBox


//these files cannot be rendered by mentioning paths. it have to be used as children from the layout.js of colorbox, from there we can use them 