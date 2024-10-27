import React from 'react'

function page() {
  return (
    <div>{postId}</div>
  )
}

export default page
// the folder is named in [] , means its used for dynamic pages/ router. means localhost:300/user/post-1, localhost:3000/user/post-2, a link for each page which changes dynamically
