import DB from "@/app/lib/DB";
import { NextResponse } from "next/server";
import PostModel from "@/app/models/post"
export async function GET(params) {
    try{
        await DB()
        const result = await PostModel.find()
        return NextResponse.json({"result" : result},{status: 200})
    }
    catch(error){
        return NextResponse.json({"msg": "something went wrong"},{status:400})

    }
}
export async function POST(req) {
    const body = await req.json();
    try{
        await DB()
        const result = await PostModel.create(body) //create is equivalent to insertOne and insertMany
        return NextResponse.json({"result" : result},{status: 201})
    }
    catch(error){
        return NextResponse.json({"msg": "something went wrong"})

    }
}