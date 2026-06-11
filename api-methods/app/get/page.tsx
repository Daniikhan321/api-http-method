"use client";

import axios from "axios";
import { useEffect, useState } from "react";

export default function UpdatePostPage() {
  const [post, setPost] = useState<any>(null);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  // GET Method
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts/1"
        );

        setPost(response.data);

        // Fill inputs with fetched data
        setTitle(response.data.title);
        setBody(response.data.body);
      } catch (error) {
        console.error("Error fetching post:", error);
      }
    };

    fetchPost();
  }, []);

  // PUT Method
  const updatePost = async () => {
    try {
      if (!post) return;

      const response = await axios.put(
        `https://jsonplaceholder.typicode.com/posts/${post.id}`,
        {
          ...post,
          title,
          body,
        }
      );

      setPost(response.data);

      console.log("Updated Successfully:", response.data);
    } catch (error) {
      console.error("Error updating post:", error);
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-6">Update Post</h1>

      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border p-2 w-full mb-4 rounded"
        placeholder="Title"
      />

      <textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
        className="border p-2 w-full mb-4 rounded"
        rows={5}
        placeholder="Body"
      />

      <button
        onClick={updatePost}
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        Update Post
      </button>

      {post && (
        <div className="mt-8 bg-white shadow-lg rounded-xl p-4">
          <h2 className="font-bold text-blue-600 mb-2">Updated Result</h2>

          <p className="font-semibold">{post.title}</p>
          <p>{post.body}</p>
        </div>
      )}
    </div>
  );
}