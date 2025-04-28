import { Link, Route, Routes } from "react-router";
import Home from "./components/pages/home";
import Login from "./components/pages/login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
