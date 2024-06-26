import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Layout/Header";
import HomePage from "./components/Pages/HomePage";
import CreateBlog from "./components/Pages/CreateBlog";
import ReadBlog from "./components/Pages/ReadBlog";
import { CssBaseline, Paper, ThemeProvider, createTheme } from "@mui/material";
import EditBlogModal from "./components/Pages/EditBlogModal";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const darkTheme = createTheme({ palette: { mode: "dark" } });
  const lightTheme = createTheme({ palette: { mode: "light" } });

  return (
    <>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <BrowserRouter>
          <Header darkMode={darkMode} setDarkMode={setDarkMode}/>

          <Paper elevation={0} sx={{ width: "100%", height: "100vh" }}>
            <CssBaseline />
            <div className="App mt-[64px]">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/create-blog" element={<CreateBlog />} />
                <Route path="/read-blog/:id" element={<ReadBlog />} />
                <Route path="/edit-blog/:id" element={<EditBlogModal />} />
              </Routes>
            </div>
          </Paper>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
