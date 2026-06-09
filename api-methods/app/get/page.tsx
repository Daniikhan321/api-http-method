"use client";

import axios from "axios";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchAllPosts = async () => {
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts");

        console.log("Response:", response.data);
        setBlogs(response.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchAllPosts();
  }, []);

  
  console.log(blogs);

  return (
    <div>
      <h1>All Posts</h1>

      {blogs.map((blog: any) => (
     <div className="w-[250px] border-2 border-blue-500 mb-3 bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-all duration-300" >
           <div key={blog._id}>
          <h2>{blog.title}</h2>
          <p>{blog.content}</p>
        </div>
     </div>
      ))}
    </div>
  );
}