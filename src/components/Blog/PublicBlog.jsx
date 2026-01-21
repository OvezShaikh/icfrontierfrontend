import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { Link } from "react-router-dom";
import {
    MdArticle,
    MdSearch
} from "react-icons/md";
import config from "../../config";

export default function PublicBlog() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");

    const fetchPosts = useCallback(async () => {
        try {
            setLoading(true);
            const res = await axios.get(`${config.API_URL}/api/posts`);
            console.log("Fetched public posts:", res.data.length);
            setPosts(res.data);
        } catch (err) {
            console.error("Public fetch error:", err.response?.data || err.message);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchPosts();
    }, [fetchPosts]);

    const filteredPosts = posts.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.content.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 py-12 lg:py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-10">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20 lg:mb-28"
                >
                    <div className="inline-flex items-center gap-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-8">
                        <MdArticle className="w-14 h-14 lg:w-16 lg:h-16" />
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                            Blog Posts
                        </h1>
                    </div>
                    <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        Explore insightful articles and market analysis from IC Frontier Capital.
                    </p>
                </motion.div>

                {/* Search Bar */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="max-w-2xl mx-auto mb-20 lg:mb-28"
                >
                    <div className="relative group">
                        <MdSearch className="w-6 h-6 absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-600 transition-colors" />
                        <input
                            type="text"
                            placeholder="Search posts by title or content..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-14 pr-12 py-5 lg:py-6 rounded-3xl border-2 border-gray-200/60 dark:border-slate-700/60 focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 bg-white/50 dark:bg-slate-900/50 backdrop-blur-xl text-lg placeholder-gray-500 shadow-xl"
                        />
                        <span className="absolute right-5 top-1/2 -translate-y-1/2 text-xs text-gray-500 bg-gray-100/50 dark:bg-slate-800/50 px-3 py-1 rounded-full backdrop-blur-sm">
                            {filteredPosts.length}
                        </span>
                    </div>
                </motion.div>

                {/* Posts Stats */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.9, delay: 0.2 }}
                    className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 lg:mb-20 gap-4"
                >
                    <div className="flex items-center gap-4">
                        <div className="w-14 h-14 lg:w-16 lg:h-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-xl">
                            <span className="text-2xl lg:text-3xl font-black text-white">{filteredPosts.length}</span>
                        </div>
                        <div>
                            <h3 className="text-2xl lg:text-3xl font-serif font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:text-white bg-clip-text">
                                Featured Articles
                            </h3>
                            <p className="text-lg text-gray-600 dark:text-gray-400">
                                Latest insights from our market strategists
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Posts Grid */}
                {loading ? (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="flex flex-col items-center justify-center py-48 lg:py-64"
                    >
                        <div className="w-20 h-20 border-4 border-blue-200/50 dark:border-slate-700/50 border-t-blue-600 rounded-full animate-spin mb-8 backdrop-blur-sm"></div>
                        <p className="text-2xl text-gray-600 dark:text-gray-400 font-medium tracking-wide">Loading blog posts...</p>
                    </motion.div>
                ) : filteredPosts.length === 0 ? (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center py-32 lg:py-48"
                    >
                        <MdArticle className="w-32 h-32 lg:w-40 lg:h-40 text-gray-300 dark:text-slate-700 mx-auto mb-12 opacity-30" />
                        <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text">
                            No posts found
                        </h3>
                        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-lg mx-auto leading-relaxed">
                            {searchTerm ? "Try adjusting your search terms." : "No blog posts available yet. Check back soon for new content."}
                        </p>
                    </motion.div>
                ) : (
                    <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10">
                        {filteredPosts.map((post, index) => (
                            <Link key={post._id} to={`/blog/${post._id}`} className="block">
                                <motion.article
                                    initial={{ opacity: 0, y: 40 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.08 }}
                                    whileHover={{ y: -12 }}
                                    className="group relative overflow-hidden rounded-3xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl border border-gray-200/50 shadow-2xl hover:shadow-3xl hover:bg-white dark:hover:bg-slate-700/90 transition-all duration-500 cursor-pointer hover:-translate-y-2"
                                >
                                    {/* Featured Image */}
                                    {post.image && (
                                        <div className="h-56 lg:h-64 overflow-hidden bg-gradient-to-br from-blue-500/10 to-indigo-500/10">
                                            <img
                                                src={post.image || "/placeholder.png"} // optional fallback
                                                alt={post.title}
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                            />
                                        </div>
                                    )}

                                    {/* Content */}
                                    <div className="p-8 lg:p-10">
                                        <div className="flex items-center gap-2 mb-4 text-sm text-gray-500 dark:text-gray-400">
                                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                            <span>{new Date(post.createdAt).toLocaleDateString()}</span>
                                        </div>

                                        <h3 className="text-2xl lg:text-3xl font-bold mb-4 leading-tight text-gray-900 dark:text-white line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                            {post.title}
                                        </h3>

                                        <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed line-clamp-3 text-lg">
                                            {post.content}
                                        </p>

                                        <div className="flex items-center justify-between pt-6 border-t border-gray-200/50 dark:border-slate-700/50">
                                            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                                                <MdArticle className="w-5 h-5" />
                                                IC Frontier Capital
                                            </div>
                                        </div>
                                    </div>
                                </motion.article>
                            </Link>
                        ))}
                    </motion.div>
                )}
            </div>
        </div>
    );
}
