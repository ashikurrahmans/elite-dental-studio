import { useState } from "react";
import { Link, useParams } from "react-router-dom";

const SingleBlogCategories = () => {
  const [blog, setBlog] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  const baseUrl = `http://localhost:1337`;

  fetch(`${baseUrl}/api/blogs/${id}?populate=*`)
    .then((res) => res.json())
    .then((data) => {
      setLoading(true);
      setBlog(data.data);
      setLoading(false);
    });
  const blogAttr = blog?.attributes;

  const categories = blogAttr?.categories.data.map((item) => (
    <li className="bg-gray-200 hover:bg-gray-300 text-xl list-none rounded-full py-1 px-2">
      <Link to={""}>{item.attributes.categoryName}</Link>
    </li>
  ));

  return (
    <>
      <div className="w-full px-4 md:w-1/2">
        <div
          className="wow fadeInUp mb-8 flex flex-wrap items-center md:mb-0 gap-2"
          data-wow-delay=".1s"
        >
          {categories}
        </div>
      </div>
    </>
  );
};

export default SingleBlogCategories;
