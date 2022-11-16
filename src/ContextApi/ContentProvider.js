import { useState } from "react";
import { createContext } from "react";
import { useEffect } from "react";
import axios from "axios";
var qs = require("qs");

// Creating Content
export const allContext = createContext();

// Component
const ContentProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [blogs, setBlogs] = useState([]);
  const [categories, setCategories] = useState([]);
  const [blogSingle, setSingleBlog] = useState([]);

  // Fetching for Blog
  const fetchBlog = async () => {
    const response = await axios.get(
      `http://localhost:1337/api/blogs?populate=*`
    );
    setBlogs(response?.data?.data);
  };
  // Fetching for Blog
  const fetchBlogSingle = async (id) => {
    const response = await axios.get(
      `http://localhost:1337/api/blogs/${id}?populate=*`
    );
    setSingleBlog(response?.data?.data);
  };

  // Fetching for categories

  const fetchCategories = async () => {
    const response = await axios.get(
      `http://localhost:1337/api/categories?populate=*`
    );
    setCategories(response?.data?.data);
  };

  // Fetching blogs by Category

  const fetchingBlogByCategory = async (slug) => {
    const query = qs.stringify(
      {
        populate: [
          "blogs",
          "blogs.image",
          "blogs.author",
          "blogs.comments",
          "blogs.author.profileImage",
        ],
      },
      {
        encodeValuesOnly: true, // prettify URL
      }
    );

    const response = await axios.get(`/categories/${slug}?${query}`);
    console.log();
  };

  useEffect(() => {
    fetchBlog();
    fetchCategories();
    fetchBlogSingle();
  }, []);

  const value = { blogs, categories, loading, fetchBlogSingle, blogSingle };

  return <allContext.Provider value={value}>{children}</allContext.Provider>;
};

export default ContentProvider;
