import Grid from "@mui/material/Grid";
import { lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/lib/Page/Navbar";
import Home from "./components/Branded/EverBrand/Home";
import About from "./components/Branded/EverBrand/About";
// General
// EverBrand Code

const ApplicationRouter = () => {
  return (
    <Router>
      <NavBar />
      <Grid item xs={12} md={10} lg={9} xl={8} style={{ margin: "auto" }}>
        <Routes>
          <Route exact path="/">
            {" "}
            <Route path="/home" element={<Home />} />
          </Route>
          <Route path="/about" element={<About />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Grid>
    </Router>
  );
};

export default ApplicationRouter;
