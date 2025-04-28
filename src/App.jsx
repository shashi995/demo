import { Link, Route, Routes } from "react-router";
import Home from "./components/pages/home";
import Login from "./components/pages/login";
import ApolloSignup from "./components/pages/signup";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<ApolloSignup />} />
      </Routes>
    </>
  );
}

export default App;
