import NavBar from "../components/NavBar"

function EditBlog (){
    return (
        <>
      <NavBar />
      <div className="mx-14 mt-10 border-2 border-blue-400 rounded-lg">
  <div className="mt-10 text-center font-bold">TEZN CODE STACK</div>
  <div className="mt-3 text-center text-4xl font-bold">Edit Blog</div>

  <form>

  <div className="p-8">
    <div className="flex gap-4">

      <input type="text" name="faculty" className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm" placeholder="Faculty"  />

      <input type="text" name="course" className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm" placeholder="Course" />

      
    </div>
    <div className="flex gap-4">

      <input type="text" name="mentor" className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm" placeholder="Mentor" />

      <input type="file" name="image" className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm" />

      
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