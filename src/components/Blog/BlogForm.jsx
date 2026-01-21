import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MdTitle, MdDescription, MdImage, MdPublish } from "react-icons/md";
import axios from "axios";
import config from "../../config";

export default function BlogForm({ fetchPosts, editPostData, setEditPostData }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (editPostData) {
      setTitle(editPostData.title);
      setContent(editPostData.content);
    } else {
      setTitle("");
      setContent("");
      setImage(null);
    }
  }, [editPostData]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    if (image) formData.append("image", image);

    const token = localStorage.getItem("token");

    try {
      if (editPostData) {
        await axios.put(
          `${config.API_URL}/api/posts/${editPostData._id}`,
          formData,
          { headers: { Authorization: `Bearer ${token}` } }
        );
        setEditPostData(null);
      } else {
        await axios.post(`${config.API_URL}/api/posts`, formData, {
          headers: { 
            Authorization: `Bearer ${token}`,
          },
        });
      }
      setTitle("");
      setContent("");
      setImage(null);
      fetchPosts();
    } catch (err) {
      alert(err.response?.data?.message || "Operation failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      onSubmit={handleSubmit}
      className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-3xl border border-gray-200/50 dark:border-slate-700/50 shadow-2xl p-8 lg:p-12 max-w-4xl mx-auto"
    >
      {/* Header */}
      <motion.div 
        className="flex items-center gap-4 mb-10 pb-8 border-b border-gray-200/50 dark:border-slate-700/50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0">
          <MdPublish className="w-8 h-8 text-white" />
        </div>
        <div>
          <h2 className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text">
            {editPostData ? "Edit Post" : "Create New Post"}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            {editPostData ? "Update your existing content" : "Share your story with the world"}
          </p>
        </div>
      </motion.div>

      {/* Form Fields */}
      <div className="space-y-8">
        {/* Title Field */}
        <motion.div 
          className="space-y-3"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <label className="flex items-center gap-3 text-lg font-semibold text-gray-800 dark:text-gray-200">
            <MdTitle className="w-6 h-6 text-blue-600 flex-shrink-0" />
            Post Title
          </label>
          <input
            type="text"
            placeholder="Enter a compelling title for your post..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border-2 border-gray-200/60 dark:border-slate-700/60 p-5 lg:p-6 rounded-2xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm text-lg placeholder-gray-500"
            required
            disabled={loading}
          />
        </motion.div>

        {/* Content Field */}
        <motion.div 
          className="space-y-3"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <label className="flex items-center gap-3 text-lg font-semibold text-gray-800 dark:text-gray-200">
            <MdDescription className="w-6 h-6 text-indigo-600 flex-shrink-0" />
            Content
          </label>
          <textarea
            placeholder="Write your post content here. Use markdown, lists, or rich formatting..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={8}
            className="w-full border-2 border-gray-200/60 dark:border-slate-700/60 p-5 lg:p-6 rounded-2xl focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all duration-300 resize-vertical bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm text-lg placeholder-gray-500"
            required
            disabled={loading}
          />
        </motion.div>

        {/* Image Field */}
        <motion.div 
          className="space-y-3"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
        >
          <label className="flex items-center gap-3 text-lg font-semibold text-gray-800 dark:text-gray-200">
            <MdImage className="w-6 h-6 text-green-600 flex-shrink-0" />
            Featured Image (Optional)
          </label>
          <div className="border-2 border-dashed border-gray-300/60 dark:border-slate-700/60 rounded-2xl p-8 lg:p-10 hover:border-blue-400/60 transition-all duration-300 hover:bg-blue-50/30 dark:hover:bg-slate-800/50">
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setImage(e.target.files[0])}
              className="w-full file:mr-4 file:py-3 file:px-6 file:rounded-xl file:border-0 file:text-sm file:font-semibold file:bg-gradient-to-r file:from-blue-600 file:to-indigo-600 file:text-white file:cursor-pointer hover:file:from-blue-700 file:transition-all file:shadow-lg hover:file:shadow-xl cursor-pointer h-40 flex items-center justify-center"
              disabled={loading}
            />
            <p className="text-gray-500 dark:text-gray-400 text-sm mt-3 text-center">
              Click to upload or drag and drop (JPG, PNG up to 5MB)
            </p>
          </div>
        </motion.div>

        {/* Submit Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <button
            type="submit"
            disabled={loading || !title.trim() || !content.trim()}
            className="group w-full lg:w-auto bg-gradient-to-r from-green-500 via-emerald-600 to-teal-600 text-white px-12 lg:px-16 py-6 lg:py-7 rounded-2xl font-bold text-lg lg:text-xl shadow-2xl hover:shadow-3xl hover:from-green-600 hover:via-emerald-700 hover:to-teal-700 transition-all duration-400 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed disabled:from-gray-400 disabled:to-gray-500"
          >
            {loading ? (
              <>
                <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                Saving...
              </>
            ) : (
              <>
                <MdPublish className="w-6 h-6 group-hover:scale-110 transition-transform" />
                {editPostData ? "Save Changes" : "Publish Post"}
              </>
            )}
          </button>
        </motion.div>
      </div>
    </motion.form>
  );
}
