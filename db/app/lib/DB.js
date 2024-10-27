import mongoose, { connect, mongo } from "mongoose";

export default async () => {
    try {
        const DB_OPTIONS = {
            dbname : process.env.DBNAME,
            user : process.env.DBUSERNAME,
            pass : process.env.DBPASSWORD,
            authSource : process.env.DBAUTHSOUCE,
        }
        await mongoose.connect(process.env.DATABASE_URL, DB_OPTIONS)
        console.log("Connected Successfully...")
    }
    catch(error){
        console.log(error)
    }
}

// this is how to connect with the database