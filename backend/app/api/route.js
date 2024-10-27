import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(params) {
    // console.log(params) 
    //url query params . (?age=36&query="juba")

    // const reqahead = new Headers(params.headers)
    // getting req headers

    const {search} = new URL(params.url);
    const cookis = params.cookies
    // console.log(cookis)
    // console.log(search)
    return NextResponse.json({"msg" : "this is my api route"})
}
export async function POST(params) {
    const res = await params.json();
    console.log("response",res);
    return NextResponse.json({"msg" : "post success"}, {status: 201})// setting the status code
    //post req


    // const formData = await params.formData()
    // console.log(formData.get("title"))
    // console.log(formData.get("body"));
    //post req using formData
}

