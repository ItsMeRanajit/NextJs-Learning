import React from 'react'

const getData = async () => {
    const res = fetch("http://localhost:3000/api/post",
        {
            headers : {
                "Content-Type" : "application/json",
            }
        }
    )
        const post = (await res).json();
        return post
}
export default async function getData1() {
  const allpost = await getData();
  return (
    <div>{
      allpost.result.map((post, i)=>(
        <div key={i}>
          <h1>{post.title}</h1>
          <h1>{post.body}</h1>
        </div>
      ))
      }</div>
  )
}
