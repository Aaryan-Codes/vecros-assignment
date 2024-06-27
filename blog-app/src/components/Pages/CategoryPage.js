import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import BlogTile from "../Layout/BlogTile";

const CategoryPage = () => {

    const selectedCategory = useSelector((state)=>state.blogReducer.selectedCategory);
    const blogsData = useSelector((state) => state.blogReducer.blogs);
    const [categoryBlogs,setCategoryBlogs] = useState([]);

    useEffect(()=>{
        let categoryBlogs = blogsData.filter((blog)=> blog.category === selectedCategory);
        setCategoryBlogs(categoryBlogs);
    },[blogsData])

  return (
    <>
    
      {
        categoryBlogs && (
            <div className="text-center p-10">

        <h1 className="text-6xl pb-4 border-b border-black "> Blogs on {selectedCategory} </h1>

        <div className="flex flex-wrap gap-5 p-8 justify-center">
          {categoryBlogs.map((blog) => (
            <BlogTile key={blog.id} data={blog} />
          ))}
        </div>
      </div>
        )
      }
    </>
  );
};

export default CategoryPage;
