import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";
const Bookmarks = ({ bookmarks, markAsRead, readingTime }) => {
  // console.log(savedBookMark);
  return (
    <div className="md:w-1/3 bg-gray-300 p-4 rounded-md ml-4 mt-10">
      <h2 className="text-[#8875f1] border-2 border-[#8875f1] px-4 py-2 rounded-lg text-center font-bold text-xl">
        Spent time on read : {readingTime} min
      </h2>
      <h2 className="text-4xl text-center ">
        Bookmarked Blogs: {bookmarks.length}
      </h2>
      <div>
        {bookmarks.map((bookmark, index) => (
          <Bookmark
            bookmark={bookmark}
            key={index}
            markAsRead={markAsRead}
          ></Bookmark>
        ))}
      </div>
    </div>
  );
};
Bookmarks.propTypes = {
  bookmarks: PropTypes.array,
  markAsRead: PropTypes.func,
  readingTime: PropTypes.number,
  savedBookMark: PropTypes.array,
};
export default Bookmarks;
