import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import BlogTile from "../Layout/BlogTile";
import { Alert } from "@mui/material";
import { setSampleData } from "../../redux/reducers/blogReducers";
import { useEffect } from "react";

const HomePage = () => {
  const blogsData = useSelector((state) => state.blogReducer.blogs);
  const alertStatus = useSelector((state)=>state.blogReducer.alertStatus);
  const alertMessage = useSelector((state)=>state.blogReducer.alertMessage);
  const dispatch = useDispatch();

  useEffect(()=>{
    document.title="Blog Feed"
  },[])

  return (
    <>
    
      {blogsData && (
        <div className="flex flex-wrap gap-5 p-8 justify-center">
          {blogsData.map((blog) => (
            <BlogTile
              key={blog.id} 
              data={blog}
            />
          ))}
        </div>
      )}

      {!blogsData.length && (
        <div className="flex justify-center text-3xl flex-col items-center text-center h-[72vh]">
          <p className="text-4xl italic font-semibold mb-5">
            Seems like your feed is empty
          </p>
          <p>Create the first post.</p>
          <Link to="/create-blog" className="underline text-blue-600">
            Click Here!
          </Link>
          <p>OR</p>
          <p className="underline text-blue-600 cursor-pointer" onClick={()=>dispatch(setSampleData())}>Click Here to Add Sample Data</p>
        </div>
      )}
      
      {alertStatus && (
            <Alert severity="success" sx={{position:"absolute",right:"0",top:"80px"}}>
              {alertMessage}
            </Alert>
        )}
    </>
  );
};

export default HomePage;
