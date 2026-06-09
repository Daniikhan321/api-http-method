"use client";

import axios from "axios";
import { useState } from "react";

export default function UpdatePostPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const postId = 1;

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const updatePost = async () => {
    try {
      const response = await axios.put(
        `https://jsonplaceholder.typicode.com/posts/${postId}`,
        {
          title,
          content,
        }
      );

      console.log("Updated:", response.data);
      alert("Post updated successfully!");

      closeModal();
    } catch (error) {
      console.error("Error updating post:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      {/* Button */}
      <button
        onClick={openModal}
        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
      >
        Update Post
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <div className="bg-white w-[400px] p-6 rounded-xl shadow-lg relative">
            
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-2 right-3 text-gray-500 text-xl"
            >
              ✖
            </button>

            <h2 className="text-2xl font-bold text-blue-600 mb-4 text-center">
              Update Post
            </h2>

            {/* Title */}
            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full border p-3 rounded-lg mb-3"
            />

            {/* Content */}
            <textarea
              placeholder="Content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full border p-3 rounded-lg mb-4"
              rows={4}
            />

            {/* Submit */}
            <button
              onClick={updatePost}
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
            >
              Save Changes
            </button>
          </div>
        </div>
      )}
    </div>
  );
}