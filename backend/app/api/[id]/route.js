import { NextResponse } from "next/server"

// export const GET = async (req, context) => {
//     console.log("Context :" , context);
//     console.log("Context params :" , context.params.id);
//     return NextResponse.json({"msg": "success"},{status : 200})
// }
//or
export const GET = async (req, {params}) => {
    console.log("Context params :" , params.id);
    return NextResponse.json({"msg": "success"},{status : 200})
}
