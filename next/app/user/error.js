// this file is for some errors during the running
'use client'// error file must be client comp to recongnize the errors


import { useEffect } from "react"

const Error = ({error, reset}) => {
    useEffect(()=>{
        console.log(error);
    },[error]);

    return (
        <div>
            <h1>error</h1>
            <button onClick={() => reset()}> try again</button>
            {/* trying to go back and load again  */}
        </div>
    )
}
export default Error