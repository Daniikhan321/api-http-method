"use client";

import axios from "axios";

export default function DeletePostPage() {
  const deletePost = async () => {
    try {
      const postId = 1;

      const response = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${postId}`);


      console.log("Deleted Successfully:", response.data);
    } catch (error) {
      console.error("Error deleting post:", error);
      
    }
  };

  return (
    <div>
      <h1>Delete Post</h1>

      <button
        onClick={deletePost}
        className="bg-red-500 text-white px-4 py-2 rounded"
      >
        Delete Post
      </button>
    </div>
  );
}