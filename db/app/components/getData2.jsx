import React from 'react'
import DB from '../lib/DB.js';
import PostModel from '../models/post.js'
export default async function getData2() {
    DB();
  const allpost = await PostModel.find();
  return (
    <div>{
      allpost.map((post, i)=>(
        <div key={i}>
          <h1>{post.title}</h1>
          <h1>{post.body}</h1>
        </div>
      ))
      }</div>
  )
}
// this is the same code but without using the api. all the working of the api were doing in the same file