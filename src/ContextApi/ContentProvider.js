import { useState } from "react";
import { createContext } from "react";
import { useEffect } from "react";
import axios from "axios";

// Creating Content
export const allContext = createContext();

// Component
const ContentProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);

  // Blogs Category Fetch
  const [blogs, setBlogs] = useState([]);

  // categories Fetch data
  const [categories, setCategories] = useState([]);

  const fetchBlog = async () => {
    const response = await axios.get(
      `http://localhost:1337/api/blogs?populate=*`
    );
    setBlogs(response.data.data);
  };
  const fetchCategories = async () => {
    const response = await axios.get(
      `http://localhost:1337/api/categories?populate=*`
    );
    setCategories(response?.data?.data);
  };

  useEffect(() => {
    fetchBlog();
    fetchCategories();
  }, [blogs, categories]);

  const value = { blogs, categories, loading };

  return <allContext.Provider value={value}>{children}</allContext.Provider>;
};

export default ContentProvider;
