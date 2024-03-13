import { useEffect, useState } from "react";
import PropTypes from "prop-types";

import Blog from "../Blog/Blog";
const Blogs = ({ handleAddToBookmark, markAsRead }) => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("blog.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div className="md:w-2/3">
      <h2 className="text-4xl">Blogs: {blogs.length}</h2>
      <div>
        {blogs.map((blog) => (
          <Blog
            key={blog.id}
            blog={blog}
            handleAddToBookmark={handleAddToBookmark}
            markAsRead={markAsRead}
          ></Blog>
        ))}
      </div>
    </div>
  );
};

Blogs.propTypes = {
  handleAddToBookmark: PropTypes.func,
  markAsRead: PropTypes.func
};

export default Blogs;
