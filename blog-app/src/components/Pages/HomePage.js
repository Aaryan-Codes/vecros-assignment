import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import BlogTile from "../Layout/BlogTile";
import {
  Alert,
  Button,
  FormControl,
  Input,
  InputLabel,
  MenuItem,
  Paper,
  Select,
} from "@mui/material";
import { setCategoryPage, setSampleData } from "../../redux/reducers/blogReducers";
import { useEffect, useState } from "react";

const categoriesItem = [
  "Technology",
  "Design",
  "Culture",
  "Business",
  "Politics",
  "Opinion",
  "Science",
  "Health",
  "Style",
  "Travel",
];

const HomePage = () => {
  const blogsData = useSelector((state) => state.blogReducer.blogs);
  const alertStatus = useSelector((state) => state.blogReducer.alertStatus);
  const alertMessage = useSelector((state) => state.blogReducer.alertMessage);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [category, setCategory] = useState("");
  const [filteredBlogs, setFilteredBlogs] = useState(blogsData);

  const handleCategoryChange = (event) => {
    let selectedCategory = event.target.value;
    console.log(selectedCategory);
    setCategory(selectedCategory);
    let filterByCategory =
      selectedCategory === "All"
        ? blogsData
        : blogsData.filter((blog) => blog.category === selectedCategory);
    setFilteredBlogs(filterByCategory);
  };

  const handleSearchBar = (e) => {
    let searchValue = e.target.value.toLowerCase();
    const filterSearch = blogsData.filter((blog) => {
      return (
        blog.title.toLowerCase().includes(searchValue) ||
        blog.author.toLowerCase().includes(searchValue) ||
        blog.content.toLowerCase().includes(searchValue)
      );
    });

    setFilteredBlogs(filterSearch);
  };

  const handleCategoryPage = (e) =>{
    console.log(e.target.value);
    let selectedCategory = e.target.value;
    dispatch(setCategoryPage(selectedCategory));
    navigate(`/category/${selectedCategory}`)
  }

  useEffect(() => {
    document.title = "Blog Feed";
  }, []);

  useEffect(() => {
    setFilteredBlogs(blogsData);
  }, [blogsData]);

  return (
    <>
      {blogsData && (
        <div>
          <Paper className="flex justify-evenly flex-wrap">
            {
              categoriesItem.map((category)=>(
                <Button value={category} onClick={handleCategoryPage}>{category}</Button>
              ))
            }
          </Paper>

          <Paper className="filters p-4 flex items-center justify-evenly">
            <FormControl className="">
              <InputLabel id="demo-simple-select-required-label">
                Search By Title,Author
              </InputLabel>
              <Input
                className="p-1"
                type="text"
                placeholder="Start Typing"
                onChange={handleSearchBar}
              ></Input>
            </FormControl>

            <FormControl variant="standard" sx={{ minWidth: 200 }}>
              <InputLabel id="demo-simple-select-required-label">
                Filter By Category
              </InputLabel>
              <Select
                labelId="demo-simple-select-required-label"
                id="demo-simple-select-required"
                value={category}
                label="Category"
                onChange={handleCategoryChange}
              >
                <MenuItem value="All">All</MenuItem>
                {categoriesItem.map((category) => (
                  <MenuItem value={category}>{category}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Paper>

          <div className="flex flex-wrap gap-5 p-8 justify-center">
            {filteredBlogs.map((blog) => (
              <BlogTile key={blog.id} data={blog} />
            ))}
          </div>
        </div>
      )}

      {!blogsData.length && (
        <div className="flex justify-center text-3xl flex-col items-center text-center h-[52vh]">
          <p className="text-4xl italic font-semibold mb-5">
            Seems like your feed is empty
          </p>
          <p>Create the first post.</p>
          <Link to="/create-blog" className="underline text-blue-600">
            Click Here!
          </Link>
          <p>OR</p>
          <p
            className="underline text-blue-600 cursor-pointer"
            onClick={() => dispatch(setSampleData())}
          >
            Click Here to Add Sample Data
          </p>
        </div>
      )}

      {alertStatus && (
        <Alert
          severity="success"
          sx={{ position: "absolute", right: "0", top: "80px" }}
        >
          {alertMessage}
        </Alert>
      )}
    </>
  );
};

export default HomePage;
