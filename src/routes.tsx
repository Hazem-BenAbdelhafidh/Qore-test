import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";

const AppRoutes = () => {
  return (
    <BrowserRouter basename="/Qore-test">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<div>About Page</div>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
