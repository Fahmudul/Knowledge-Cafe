const getLocalStorageItem = () => {
  const item = localStorage.getItem("blog");
  if (item) {
    return JSON.parse(item);
  }
  return [];
};

const getLocalStorageBlogTime = () => {
  const time = localStorage.getItem("time");
  if (time) {
    return JSON.parse(time);
  }
  return 0;
};

const addTimeToLocalStorage = (prevTime) => {
  let time = getLocalStorageBlogTime();
  time = prevTime;
  localStorage.setItem("time", time);
};

const saveToLocalStorage = (blog) => {
  const blogItem = JSON.stringify(blog);
  localStorage.setItem("blog", blogItem);
};

const addBlogToLocalStorage = (id) => {
  const blog = getLocalStorageItem();
  blog.push(id);
  saveToLocalStorage(blog);
};

export {
  getLocalStorageItem,
  addBlogToLocalStorage,
  getLocalStorageBlogTime,
  addTimeToLocalStorage,
};
