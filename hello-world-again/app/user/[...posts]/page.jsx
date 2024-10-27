import React from 'react'

function Posts() {
  return (
    <div>Posts catching all</div>
  )
}

export default Posts

//mentioning the folder name in [...name] makes the folder catch all
//if we put loclahost:3000/user/posts then itll show this routefile. but if we add anthoer something like user/post/ranajit itll give us an error bcz no folder exists as this name.
// what catch all does is ignores these extra non existant things and whatever we put after /user/posts/ it stays on the post page. if any existing page is added then only the page changes

//if we add [] on top of [...name] ie [[...name]] then it makes the route optional. means we dont have write /post to get this file 