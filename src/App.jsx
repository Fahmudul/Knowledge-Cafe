import Header from "./components/Header";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import { addBlogToLocalStorage } from "./Utilities/localstorage";
import "./App.css";
import { useState } from "react";

function App() {
  const [bookmarks, setBookmark] = useState([]);
  const [readingTime, setReadingTime] = useState(0);
  // console.log(readingTime);

  const markAsRead = (time) => {
    setReadingTime(readingTime + time);
    // console.log(readingTime);
  };

  const handleAddToBookmark = (blog) => {
    setBookmark([...bookmarks, blog]);
    addBlogToLocalStorage(blog.id);
  };
  return (
    <>
      <div className="max-w-7xl mx-auto">
        <Header></Header>
        <div className="md:flex">
          <Blogs
            handleAddToBookmark={handleAddToBookmark}
            markAsRead={markAsRead}
          ></Blogs>
          <Bookmarks
            bookmarks={bookmarks}
            readingTime={readingTime}
          ></Bookmarks>
        </div>
      </div>
    </>
  );
}

export default App;
