import Header from "./components/Header";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import {
  addBlogToLocalStorage,
  getLocalStorageItem,
  addTimeToLocalStorage,
  getLocalStorageBlogTime,
} from "./components/Utilities/localstorage";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [bookmarks, setBookmark] = useState([]);

  const [readingTime, setReadingTime] = useState(0);

  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("blog.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  const markAsRead = (time, id) => {
    setReadingTime(readingTime + time);
    setBookmark(bookmarks.filter((bookmark) => bookmark.id !== id));
    addTimeToLocalStorage(readingTime + time);
  };

  const handleAddToBookmark = (blog) => {
    setBookmark([...bookmarks, blog]);
    addBlogToLocalStorage(blog.id);
  };

  useEffect(() => {
    const storedBlog = getLocalStorageItem();
    const currentTime = getLocalStorageBlogTime();
    console.log(currentTime);

    const listOfStoredBlog = [];

    for (let id of storedBlog) {
      const blog = blogs.find((bookmark) => bookmark.id == id);
      if (blog) {
        listOfStoredBlog.push(blog);
      }
    }
    setReadingTime(currentTime);
    setBookmark(listOfStoredBlog);
  }, [blogs]);

  return (
    <>
      <div className="max-w-7xl mx-auto">
        <Header></Header>
        <div className="md:flex">
          <Blogs
            handleAddToBookmark={handleAddToBookmark}
            markAsRead={markAsRead}
            blogs={blogs}
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
