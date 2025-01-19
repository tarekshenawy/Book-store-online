import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import BookDetails from "./Components/BookDetails/BookDetails";
import Cart from "./Pages/Cart";
import Author from "./Pages/Author";
import Register from "./Pages/Register";
import Authcontextprovider from "./Components/Context/Authcontext";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div>
      <BrowserRouter>
      <ToastContainer/>
      <Authcontextprovider>
      <Navbar/>
   
      <Routes>
        <Route path="/" element={<Home/>}></Route>
            <Route path="/bookdetails" element={<BookDetails/>}>
            <Route path=":bookId" element={<BookDetails/>}></Route>
            </Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/author" element={<Author/>}></Route>
 
        <Route path="/auth" element={<Register/>}></Route>

      </Routes>
      </Authcontextprovider>
   
      <Footer/>


      
      </BrowserRouter>
  
 
    </div>
  );
}

export default App;
