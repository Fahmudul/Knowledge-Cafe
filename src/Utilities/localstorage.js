const getLocalStorageItem = () => {
  const item = localStorage.getItem("blog");
  if (item) {
    return JSON.parse(item);
  }
  return [];
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

export { getLocalStorageItem, addBlogToLocalStorage };
