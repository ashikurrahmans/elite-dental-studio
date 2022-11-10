import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Services from "./Components/Services/Services";
import NotFound from "./Components/404NotFound/NotFound";
import Menu from "./Components/Menu/Menu";
import Footer from "./Components/Footer/Footer";
import ServiceSingle from "./Components/Services/ServiceSingle";
import Blogs from "./Components/Blog/Blogs";
import SingleBlog from "./Components/Blog/SingleBlog";

function App() {
  return (
    <div className="dark">
      <Menu></Menu>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/blogs/:id" element={<SingleBlog></SingleBlog>}></Route>
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
