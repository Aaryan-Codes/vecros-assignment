import ReactQuill, { Quill } from "react-quill";
import { useSelector } from "react-redux";
import "react-quill/dist/quill.snow.css";
import { useEffect } from "react";

const ReadBlog = () => {
  const readTile = useSelector((state) => state.tileReducer.readTile);

  useEffect(()=>{
    document.title=readTile.title;
  },[])

  return (
    <>
      <div className="mt-[64px] p-10 flex flex-col text-center items-center">
        <h1 className="text-4xl mb-2">{readTile.title}</h1>
        <h2 className="text-lg mb-2">Category - {readTile.category}</h2>
        <p>Author - {readTile.author}</p>
        <p className="text-sm">Published on : {readTile.date}</p>
        <div>
        <ReactQuill
        readOnly
        value={readTile.content}
        theme="bubble"
        />
        </div>
      </div>
    </>
  );
};

export default ReadBlog;
