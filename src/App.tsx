import { Route, Routes, useLocation } from "react-router-dom";
import NavbarComponent from "./components/Navbar";
import Home from "./pages/home";
import Login from "./pages/login";
import NotFound from "./pages/notFound";
import Detail from "./pages/details";

function App() {
  const location = useLocation();
  const allowedPaths = ['/', '/detail']; // Add more path as we add Route, Add the path that needs to render the NavbarComponent to work
  const shouldRenderNavbar = allowedPaths.includes(location.pathname);

  return (
    <>
      {shouldRenderNavbar && <NavbarComponent />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;