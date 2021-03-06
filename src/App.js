import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Services from "./Components/Services/Services";
import NotFound from "./Components/404NotFound/NotFound";
import Menu from "./Components/Menu/Menu";
import Footer from "./Components/Footer/Footer";
import BlogSingle from "./Components/Blog/BlogSingle";
import Blogs from "./Components/Blog/Blogs";
import ServiceSingle from "./Components/Services/ServiceSingle";

function App() {
  return (
    <div className="App">
      <Menu></Menu>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/blogs/:id" element={<BlogSingle></BlogSingle>}></Route>
        <Route
          path="/services/:id"
          element={<ServiceSingle></ServiceSingle>}
        ></Route>
        <Route path="/services" element={<Services></Services>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
