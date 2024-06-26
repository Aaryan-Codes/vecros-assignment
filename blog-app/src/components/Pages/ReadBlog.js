import ReactQuill, { Quill } from "react-quill";
import { useSelector } from "react-redux";
import "react-quill/dist/quill.snow.css";

const ReadBlog = () => {
  const readTile = useSelector((state) => state.tileReducer.readTile);
  return (
    <>
      <div className="mt-[64px] p-10 flex flex-col text-center items-center">
        <h1 className="text-3xl">{readTile.title}</h1>
        <p>{readTile.author}</p>
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
