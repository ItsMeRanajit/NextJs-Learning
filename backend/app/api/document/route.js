import { NextResponse } from "next/server";

export async function GET(req) {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts",{
        headers: {
          'Content-Type' : 'application/json',
        }})
    const posts = await res.json()
    return NextResponse.json({"data" : posts})
    
}

export async function POST(params) {
  const res = params.json();
  const comment = {
    id : 7598435,
    body : res.body,
    title : res.title
  }
  return NextResponse.json({"msg" : "post success"}, {status: 201})// setting the status code
}