import { useState, useEffect } from "react";
import { useAuth } from "../../contexts/AuthContext";
import axios from "axios";
import config from "../../config";

export default function UserPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { logout } = useAuth();

  const fetchPosts = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get(`${config.API_URL}/api/posts`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      
      // Filter to show only admin posts (assuming admin.username === "admin")
      const adminPosts = res.data.filter(post => post.author?.username === "admin");
      setPosts(adminPosts);
    } catch (err) {
      console.error("Failed to fetch posts:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Public Blog</h1>
        <div className="flex gap-2">
          <span className="text-sm text-gray-500">
            Showing admin posts only ({posts.length})
          </span>
          <button
            onClick={logout}
            className="bg-red-500 text-white py-1 px-4 rounded hover:bg-red-600 text-sm"
          >
            Logout
          </button>
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <p className="text-lg text-gray-500">Loading posts...</p>
        </div>
      ) : posts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-xl text-gray-500 mb-4">No posts available</p>
          <p className="text-gray-400">Admin hasn't posted anything yet.</p>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <div key={post._id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              {post.image && (
                <img 
                  src={post.image || "/placeholder.png"} 
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 line-clamp-2">{post.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{post.content}</p>
                <div className="flex items-center text-sm text-gray-500">
                  <span>Posted on {new Date(post.date || post.createdAt).toLocaleDateString()}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
