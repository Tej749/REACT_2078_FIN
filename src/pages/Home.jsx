import { useEffect, useState } from "react";
import Card from "../components/Card";
import NavBar from "../components/NavBar";
import axios from "axios";

function Home() {
  const [blogs, setBlogs] = useState([]);
  const fetchBlogs = async () => {
    const response = await axios.get("http://localhost:3000/blog");
    setBlogs(response.data.data);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  console.log(blogs);

  return (
    <>
      <NavBar />
      <div className="flex flex-wrap">
        {
          blogs.map(function(blog) {
            return (
              <Card blog={blog} />
            )
          })
        }
      </div>
    </>
  );
}

export default Home;
