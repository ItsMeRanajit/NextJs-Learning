'use client'
import { useState } from "react"

function sendData() {
  const [formData, setFormData] = useState({
    title : "",
    body : ""
})

const handleChange = (e) => {
    setFormData({
      ...formData,
      [ e.target.name]:  e.target.value,
    });
  };
const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await fetch ("http://localhost:3000/api/post",{
        method : "POST",
        body : JSON.stringify(formData)
    })
    console.log("respose :" , res)
}
  return (
    <form onSubmit={handleSubmit} className="max-w-md p-6 mt-10 bg-white rounded-lg shadow-md">
      <div className="mb-4">
        <label className="block font-bold text-gray-700">Title:</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Enter title"
          className="w-full px-4 py-2 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 font-bold text-gray-700">Body:</label>
        <textarea
          name="body"
          value={formData.body}
          onChange={handleChange}
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