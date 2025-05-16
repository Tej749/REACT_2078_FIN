import { useNavigate, useParams } from "react-router-dom";
import NavBar from "../components/NavBar"
import axios from "axios";
import { useState } from "react";

function EditBlog (){

  const {id} = useParams()
  const navigate = useNavigate()
  const [data, setData] = useState({
    faculty : "",
    course : "",
    mentor : "",
    image : ""
  })

  const changeHandle = (e) =>{
    const {name, value} = e.target
    setData({
      ...data,
      [name] : name === "image" ? e.target.files[0] : value
    })

  }
  console.log(data)

    const editBlog = async(e) =>{
      e.preventDefault()
      const response = await axios.patch("http://localhost:3000/blog/" + id, data, {
        headers : {
          "Content-Type" : "multipart/form-data" 
        }
      })

      if (response.status === 200) {
        alert("Blog edited successfully...")
        navigate("/blog/" + id)
      } else {
        console.log("Ops !! something went wrong...!")
      }

    }


    return (
        <>
      <NavBar />
      <div className="mx-14 mt-10 border-2 border-blue-400 rounded-lg">
  <div className="mt-10 text-center font-bold">TEZN CODE STACK</div>
  <div className="mt-3 text-center text-4xl font-bold">Edit Blog</div>

  <form onSubmit={editBlog}>

  <div className="p-8">
    <div className="flex gap-4">

      <input type="text" name="faculty" className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm" placeholder="Faculty" onChange={changeHandle} />

      <input type="text" name="course" className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm" placeholder="Course" onChange={changeHandle} />

      
    </div>
    <div className="flex gap-4">

      <input type="text" name="mentor" className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm" placeholder="Mentor" onChange={changeHandle} />

      <input type="file" name="image" className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm" onChange={changeHandle} />

      
    </div>

    
    
    <div className="text-center">
      <button style={{marginTop:"15px"}} className="cursor-pointer rounded-lg bg-blue-700 px-8 py-5 text-sm font-semibold text-white">Submit</button>
    </div>
  </div>
  </form>
</div>
    </>
    )
}

export default EditBlog;