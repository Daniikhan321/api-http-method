"use client";

import axios from "axios";
import { useEffect, useState } from "react";

export default function DeletePostPage() {
  const [post, setPost] = useState<any>(null);
  const [createdPost, setCreatedPost] = useState<any>(null);

  // GET Post
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts/1"
        );

        setPost(response.data);
      } catch (error) {
        console.error("Error fetching post:", error);
      }
    };

    fetchPost();
  }, []);

  // POST using fetched data
  const createPost = async () => {
    try {
      if (!post) return;

      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        {
          title: post.title,
          body: post.body,
          userId: post.userId,
        }
      );

      setCreatedPost(response.data);

      console.log("Post Created Successfully:", response.data);
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  // DELETE
  const deletePost = async () => {
    try {
      await axios.delete(
        "https://jsonplaceholder.typicode.com/posts/1"
      );

      setPost(null);
      setCreatedPost(null);

      console.log("Deleted Successfully");
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  return (
    <div className="p-6">
      {/* Original GET Post */}
      {post && (
        <div className="bg-white shadow-lg rounded-xl p-6 max-w-md mx-auto mt-10">
          <h2 className="text-2xl font-bold text-red-600 mb-4">
            Fetched Post
          </h2>

          <p className="font-semibold">{post.title}</p>
          <p>{post.body}</p>
        </div>
      )}

      {/* Created Post */}
      {createdPost && (
        <div className="bg-green-100 shadow-lg rounded-xl p-6 max-w-md mx-auto mt-6">
          <h2 className="text-2xl font-bold text-green-600 mb-4">
            Created Post
          </h2>

          <p className="font-semibold">{createdPost.title}</p>
          <p>{createdPost.body}</p>
        </div>
      )}

      <div className="flex justify-center gap-4 mt-8">
        <button
          onClick={createPost}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Create Post
        </button>

        <button
          onClick={deletePost}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Delete Post
        </button>
      </div>
    </div>
  );
}