import { TextField, Button, Grid, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { editPost, setAlertMessage, setAlertStatus } from "../../redux/reducers/blogReducers";
import CloseIcon from "@mui/icons-material/Close";
import { tileToEdit } from "../../redux/reducers/tileReducers";
import { useNavigate } from "react-router-dom";

const EditBlogModal = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const selectedBlog = useSelector(state=>state.tileReducer.selectedTile);

  const editor = useRef();
  const [title, setTitle] = useState(selectedBlog.title);
  const [content, setContent] = useState(selectedBlog.content);
  const [author, setAuthor] = useState(selectedBlog.author);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      editPost({
        id: selectedBlog.id,
        title: title,
        author: author,
        content: content,
      })
    );
    navigate('/');
    dispatch(setAlertStatus(true));
    dispatch(setAlertMessage("Blog Successfully Updated!"));
    setTimeout(()=>{
        dispatch(setAlertStatus(false));
    },3000);
  };

  useEffect(()=>{
    document.title="Edit Blog"
  },[])

  return (
    <>
      <div className="w-full p-10 flex justify-center">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Typography variant="h3" gutterBottom sx={{ textAlign: "center" }}>
              Edit Blog
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
                  sx={{ display: "flex", justifyContent: "center",padding:"50px 0px" }}
                >
                  <Button type="submit" variant="contained" color="primary">
                    Save Blog
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

export default EditBlogModal;
