import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import BlogForm from "./BlogForm";
import BlogPost from "./BlogPost";
import { useAuth } from "../../contexts/AuthContext";
import { 
  MdEditNote, 
  MdPostAdd, 
  MdLogout 
} from "react-icons/md";
import config from "../../config";

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [editPostData, setEditPostData] = useState(null);
  const [loading, setLoading] = useState(true);
  const { logout } = useAuth();

  const fetchPosts = useCallback(async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem("token");
      const res = await axios.get(`${config.API_URL}/api/posts`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      console.log("Fetched posts count:", res.data.length);
      setPosts(res.data);
    } catch (err) {
      console.error("Fetch error:", err.response?.data || err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 py-12 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 lg:mb-24"
        >
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-6">
            <MdEditNote className="w-12 h-12 lg:w-16 lg:h-16" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-2">
              Admin Blog Dashboard
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Manage your content with precision. Create, edit, and publish posts with our intuitive interface.
          </p>
        </motion.div>

        {/* Blog Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-20 lg:mb-28"
        >
          <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl rounded-3xl border border-gray-200/50 dark:border-slate-700/50 shadow-2xl p-8 lg:p-12">
            <div className="flex items-center justify-center lg:justify-start mb-8 gap-3">
              <MdPostAdd className="w-8 h-8 text-green-600 flex-shrink-0" />
              <h2 className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text">
                {editPostData ? "Edit Post" : "Create New Post"}
              </h2>
            </div>
            <BlogForm
              fetchPosts={fetchPosts}
              editPostData={editPostData}
              setEditPostData={setEditPostData}
            />
          </div>
        </motion.div>

        {/* Posts Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.4 }}
        >
          <div className="flex justify-between items-center mb-12 lg:mb-16">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-2xl font-bold text-white">{posts.length}</span>
              </div>
              <div>
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white">
                  Published Posts
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Manage your content library
                </p>
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleLogout}
              className="group flex items-center gap-2 bg-gradient-to-r from-red-500 to-red-600 text-white px-8 py-3 rounded-2xl font-semibold shadow-lg hover:shadow-xl hover:from-red-600 hover:to-red-700 transition-all duration-300 border border-red-400/30 backdrop-blur-sm"
            >
              <MdLogout className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              Logout
            </motion.button>
          </div>

          {loading ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center py-32"
            >
              <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mb-6"></div>
              <p className="text-xl text-gray-600 dark:text-gray-400">Loading posts...</p>
            </motion.div>
          ) : posts.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-32"
            >
              <MdPostAdd className="w-24 h-24 text-gray-400 mx-auto mb-8 opacity-10" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">No posts yet</h3>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-md mx-auto">
                Create your first blog post to get started. Your content will appear here.
              </p>
            </motion.div>
          ) : (
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8"
              layout
            >
              {posts.map((post, index) => (
                <motion.div
                  key={post._id}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="group"
                >
                  <BlogPost
                    post={post}
                    fetchPosts={fetchPosts}
                    setEditPostData={setEditPostData}
                  />
                </motion.div>
              ))}
            </motion.div>
          )}
        </motion.div>

      </div>
    </div>
  );
}
