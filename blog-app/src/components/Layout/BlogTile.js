import { Button, Card } from "@mui/material";
import { useDispatch } from "react-redux";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteIcon from "@mui/icons-material/Delete";
import { deletePost, setAlertMessage, setAlertStatus } from "../../redux/reducers/blogReducers";
import { tileToEdit, tileToRead } from "../../redux/reducers/tileReducers";
import { Link, useNavigate } from "react-router-dom";
import moment from 'moment';
// import DOMPurify from 'dompurify';

const BlogTile = ({data}) => {
  //   let contentHTMLtoTEXT = parse(data.content);
  //   console.log(contentHTMLtoTEXT);

  const dispatch = useDispatch();
const navigate = useNavigate();
  const parser = new DOMParser();
  const htmlFormat = parser.parseFromString(data.content, "text/html");
  const contentText = htmlFormat.body.textContent;
  const dateFormatting = moment(data.date).format('ll');

  const handleEdit = () => {
    dispatch(tileToEdit(data));
    navigate(`/edit-blog/${data.id}`);
  };

  const handleDelete = () =>{
    dispatch(deletePost(data));
    dispatch(setAlertStatus(true));
    dispatch(setAlertMessage("Blog Successfully Deleted!"));
    setTimeout(()=>{
        dispatch(setAlertStatus(false));
    },3000);
  }

  const handleReadMore = () =>{
    dispatch(tileToRead(data));
    navigate(`/read-blog/${data.id}`);
  }

  return (
    <>
      <Card
        sx={{
          width: "440px",
          height: "240px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "12px 8px",
          border:"2px solid #0066ff",
          borderRadius:"20px",
        }}
      >
        <h3 className="text-3xl font-bold">{data.title}</h3>
        <div className="flex gap-8">
        <p className="font-semibold">{data.category}</p>
        <p className="text-sm">{dateFormatting}</p>
        </div>
        <p className="text-sm italic">
          <span className="font-semibold">Author</span> : {data.author}
        </p>
        <p className="">{contentText.slice(0, 14) + "..."}</p>
        <div className="w-full flex justify-evenly">
          <Button variant="contained" onClick={handleEdit}>
            <ModeEditIcon />
          </Button>
          <Button variant="contained" onClick={handleDelete}>
            <DeleteIcon />
          </Button>
        </div>
        <Link to={`/read-blog/${data.id}`} >
        <Button onClick={handleReadMore}>Read More</Button>
        </Link>
      </Card>
    </>
  );
};

export default BlogTile;
