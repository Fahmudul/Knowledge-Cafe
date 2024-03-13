import PropTypes from "prop-types";
const Bookmark = ({ bookmark, markAsRead }) => {
  const { title } = bookmark;
  return (
    <div className="bg-slate-200 p-4 m-4 rounded-xl shadow-lg">
      <h3>{title}</h3>
    </div>
  );
};

Bookmark.propTypes = {
  bookmark: PropTypes.object,
  markAsRead: PropTypes.func
};

export default Bookmark;
