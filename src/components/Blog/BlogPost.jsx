import React from "react";
import axios from "axios";
import config from "../../config";

export default function BlogPost({ post, fetchPosts, setEditPostData }) {
  const token = localStorage.getItem("token");

  const handleDelete = async () => {
    if (!window.confirm("Are you sure?")) return;
    try {
      await axios.delete(`${config.API_URL}/api/posts/${post._id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchPosts();
    } catch (err) {
      alert("Delete failed");
    }
  };

  return (
    <div className="bg-white p-4 rounded shadow-md">
      <h2 className="text-xl font-bold">{post.title}</h2>
      <p className="text-gray-700 mt-1">{post.content}</p>
      {post.image && (
        <img
          src={`${config.API_URL}/${post.image}`}
          alt={post.title}
          className="mt-2 max-h-60 object-cover"
        />
      )}
      <p className="text-gray-400 text-sm mt-1">{new Date(post.date).toLocaleString()}</p>
      <div className="mt-2">
        <button
          onClick={() => setEditPostData(post)}
          className="bg-yellow-400 text-white py-1 px-3 rounded hover:bg-yellow-500 mr-2"
        >
          Edit
        </button>
        <button
          onClick={handleDelete}
          className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
