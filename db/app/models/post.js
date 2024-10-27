import mongoose from "mongoose";

const schema = new mongoose.Schema({
    title:{type : String, required : true , trim : true},
    body:{type : String, required : true , trim : true},
})
//defining the schema of the db. means every doc should follow this schema has a title and body
// type : string means the title should be string type, reqrire: true means it must be given, trim : true means the value will be trimmed


const post = mongoose.models.post || mongoose.model('post', schema) //compiling schema
// the or is given means mongoose.models.post checks if the model already exists or not. if it is then use that one, and if not then mongoose.model creates a new model of that schema

export default post