import React from 'react'
import Link from 'next/link'
function Profiles({params}) {
    console.log(params)
  return (
    <div>profiles
        <p>{params.id}</p>
    </div>
  )
}

export default Profiles

//its a dynamic routing 
//means like profile-1,profile-2 all are a separate route and craeted dynamically
//to do this mention the folder name within [] ie [id], and to perform actions based on the dynamic routes , we need to pass {params} object to the function which has the dynamic value in it. the value has the key name same as the folder name. in this case it is id, 
//we can perform actions based on the params values
// the id can be anything a stirng ,number etc