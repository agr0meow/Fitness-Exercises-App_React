import { Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import NavBar from "./components/NavBar";
import ExerciseDetail from "./pages/ExerciseDetail";
import Footer from "./components/Footer";
import Home from "./pages/Home";
function App() {
  return (
    <>
      <Box width="400px" sx={{ width: { xl: "1488px" } }} m="auto">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/exercise/:id" element={<ExerciseDetail />}></Route>
        </Routes>
      </Box>
      <Footer />
    </>
  );
}

export default App;
