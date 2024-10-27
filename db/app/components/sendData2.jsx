import DB from "../lib/DB.js"
import PostModel from "../models/post.js"
const create = async (formData) => {
    'use server'
    await DB();
    const result = await PostModel.create({
        title : formData.get('title'), // this will get the content of the tag named as title
        body :  formData.get('body')
    },
)
console.log("result added")
}
function sendData() {
  
  return (
    <form  action = {create} className="max-w-md p-6 mt-10 bg-white rounded-lg shadow-md">
      <div className="mb-4">
        <label className="block font-bold text-gray-700">Title:</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          placeholder="Enter title"
          className="w-full px-4 py-2 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 font-bold text-gray-700">Body:</label>
        <textarea
          name="body"
          value={formData.body}
          placeholder="Enter body"
          className="w-full h-32 px-4 py-2 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <button type="submit" className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-md hover:bg-blue-600">
        Submit
      </button>
    </form>
  )
}

export default sendData