import PropTypes from "prop-types";
import { FaBookmark } from "react-icons/fa";
const Blog = ({ blog, handleAddToBookmark, markAsRead }) => {
  const {
    id,
    title,
    cover,
    reading_time,
    author,
    author_img,
    posted_date,
    hashtags,
  } = blog;
  const colors = ["#ff0000", "#00ff00", "#0000ff", "#ffff00"];
  return (
    <div className="mb-20">
      <img className="w-full mb-8" src={cover} alt="" />
      <div className="flex justify-between mb-4">
        <div className="flex ">
          <img className="w-14" src={author_img} alt="" />
          <div className="ml-6">
            <h3 className="text-2xl">{author}</h3>
            <p>{posted_date}</p>
          </div>
        </div>
        <div>
          <span>{reading_time} min read</span>
          <button
            onClick={() => handleAddToBookmark(blog)}
            className="ml-2 text-red-400 text-2xl"
          >
            <FaBookmark></FaBookmark>
          </button>
        </div>
      </div>
      <h2 className="text-4xl">{title}</h2>
      <p>
        {hashtags.map((hash, index) => (
          <span className="mr-2" key={index}>
            <a href="" style={{ color: colors[index % colors.length] }}>
              #{hash}
            </a>
          </span>
        ))}
      </p>
      <button
        onClick={() => markAsRead(reading_time, id)}
        className="p-2 bg-[#fffff0] shadow-md"
      >
        Mark as read
      </button>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookmark: PropTypes.func,
  markAsRead: PropTypes.func,
};
export default Blog;
