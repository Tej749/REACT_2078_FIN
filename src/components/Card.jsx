import { Link } from "react-router-dom"
import images from "../image/happy.jpg"
import "./Card.css"

function Card ({blog}){
    

    return (

        <>
        <Link to={`/blog/${blog._id}`}>
        <div className="card">
           <a className="p-8 max-w-lg border border-indigo-300 rounded-2xl hover:shadow-xl hover:shadow-indigo-50 flex flex-col items-center"
    href="#">
    <img src={blog.image} className="shadow rounded-lg overflow-hidden border" />
    <div className="mt-8">
        <h4 className="font-bold text-xl">{blog.faculty}</h4>
        <h4 className="font-bold text-xl">{blog.course}</h4>
        <h4 className="font-bold text-xl">{blog.mentor}</h4>
        <p className="mt-2 text-gray-600">Create Exercises for any subject with the topics you and your students care about.
        </p>
        <div className="mt-5">
            <button type="button" className="inline-flex items-center rounded-md border border-transparent bg-gray-800 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-gray-900">Start Creating</button>
        </div>
    </div>
</a>
        </div>
        </Link>
        </>
    )
}

export default Card

