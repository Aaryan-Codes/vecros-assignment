import { TextField, Button, Grid, Typography} from "@mui/material";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addPost,setAlertMessage,setAlertStatus } from "../../redux/reducers/blogReducers";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useNavigate } from "react-router-dom";

const CreateBlog = () => {
  const dispatch = useDispatch();
  const editor = useRef();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");

  

  const toolbarOptions = [
    ["bold", "italic", "underline", "strike"], // toggled buttons
    ["blockquote", "code-block"],
    ["link", "image", "video", "formula"],

    [{ header: 1 }, { header: 2 }], // custom button values
    [{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
    [{ script: "sub" }, { script: "super" }], // superscript/subscript
    [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
    [{ direction: "rtl" }], // text direction

    [{ size: ["small", false, "large", "huge"] }], // custom dropdown
    [{ header: [1, 2, 3, 4, 5, 6, false] }],

    [{ color: [] }, { background: [] }], // dropdown with defaults from theme
    [{ font: [] }],
    [{ align: [] }],

    ["clean"], // remove formatting button
  ];

  const modules = {
    toolbar: toolbarOptions,
  };

  //   const blogs = useSelector((state) => state.blogReducer);
  const handleSubmit = (event) => {
    event.preventDefault();
    let id = Math.floor(Math.random()*100 + 1);
    dispatch(addPost({ id:id,title, content, author }));
    setTitle("");
    setContent("");
    setAuthor("");
    dispatch(setAlertStatus(true));
    dispatch(setAlertMessage("Blog Successfully Created!"));
    setTimeout(()=>{
        dispatch(setAlertStatus(false));
    },3000);
    navigate('/');
  };

  return (
    <>
    <div className="p-10 w-full flex justify-center"> 
      <Grid container spacing={4}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography variant="h3" gutterBottom sx={{ textAlign: "center" }}>
            Create a New Blog
          </Typography>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  label="Enter Title"
                  value={title}
                  onChange={(event) => setTitle(event.target.value)}
                  fullWidth
                  required
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  label="Author Name"
                  value={author}
                  onChange={(event) => setAuthor(event.target.value)}
                  fullWidth
                  required
                />
              </Grid>

              <Grid item xs={12}>
                <ReactQuill
                  ref={editor}
                  modules={modules}
                  theme="snow"
                  value={content}
                  onChange={setContent}
                />
              </Grid>

              <Grid
                item
                xs={12}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Button type="submit" variant="contained" color="primary">
                  Create Blog
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </div>
    </>
  );
};

export default CreateBlog;
