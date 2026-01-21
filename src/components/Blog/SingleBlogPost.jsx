import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";
import { 
  MdArticle, 
  MdArrowBack,
  MdCalendarToday,
  MdShare 
} from "react-icons/md";
import config from "../../config";

export default function SingleBlogPost() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`${config.API_URL}/api/posts/${id}`);
        setPost(res.data);
      } catch (err) {
        console.error("Post fetch error:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center">
        <div className="w-20 h-20 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <MdArticle className="w-32 h-32 text-gray-400 mx-auto mb-8 opacity-50" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Post not found</h1>
          <Link 
            to="/blog" 
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-2xl hover:bg-blue-700 transition-all"
          >
            <MdArrowBack /> Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 py-24 lg:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-10">
        
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-12"
        >
          <Link 
            to="/blog"
            className="group inline-flex items-center gap-3 text-lg font-semibold text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm px-6 py-3 rounded-2xl shadow-lg hover:shadow-xl border border-gray-200/50 dark:border-slate-700/50"
          >
            <MdArrowBack className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Back to Blog
          </Link>
        </motion.div>

        {/* Featured Image */}
        {post.image && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="rounded-3xl overflow-hidden shadow-2xl mb-12 lg:mb-20"
          >
            <img 
              src={post.image || "/placeholder.png"} 
              alt={post.title}
              className="w-full h-[60vh] lg:h-[70vh] object-cover"
            />
          </motion.div>
        )}

        {/* Article Content */}
        <motion.article
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-3xl border border-gray-200/50 dark:border-slate-700/50 shadow-2xl p-12 lg:p-20"
        >
          {/* Meta */}
          <div className="flex flex-wrap items-center gap-6 mb-8 pb-8 border-b border-gray-200/50 dark:border-slate-700/50">
            <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
              <MdCalendarToday className="w-5 h-5" />
              <span>{new Date(post.createdAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
              <MdArticle className="w-5 h-5" />
              <span>IC Frontier Capital</span>
            </div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="ml-auto flex items-center gap-2 text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors p-2 rounded-xl backdrop-blur-sm"
            >
              <MdShare className="w-5 h-5" />
              Share
            </motion.button>
          </div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-4xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-12 lg:mb-20 bg-gradient-to-r from-gray-900 via-gray-800 to-blue-900 dark:from-white dark:to-blue-200 bg-clip-text tracking-tight"
          >
            {post.title}
          </motion.h1>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="prose prose-lg lg:prose-xl max-w-none text-gray-800 dark:text-gray-200 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br>') }}
          />

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="mt-20 pt-12 border-t border-gray-200/50 dark:border-slate-700/50"
          >
            <div className="text-center">
              <Link
                to="/blog"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white px-10 lg:px-12 py-5 lg:py-6 rounded-3xl font-bold text-lg lg:text-xl shadow-2xl hover:shadow-3xl hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 transition-all duration-300"
              >
                <MdArticle className="w-6 h-6" />
                Read More Articles
              </Link>
            </div>
          </motion.div>
        </motion.article>
      </div>
    </div>
  );
}
