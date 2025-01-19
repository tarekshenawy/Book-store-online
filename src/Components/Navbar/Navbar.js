import React, { useContext} from 'react';
import './Navbar.css';
import cart_icon from "../Images/cart_icon.png";
import search_icon from '../Images/search.png';
import  book_logo from "../Images/book_shop.png";
import { Link } from 'react-router-dom';
import { bookshop } from '../Context/Context';
import { Authcontext } from '../Context/Authcontext';
import { useNavigate } from 'react-router-dom';


export default function Navbar() {

  const {bookcart}=useContext(bookshop);
  const {currentuser,logout}=useContext(Authcontext);
  const navigate = useNavigate();

  function logoutfrompage(){
    logout();
    navigate("/auth");
    
  }

  return (
    <nav>
        <div className='main-header'>

                  <h2>
                  <Link to="/" style={{ textDecoration: "none",color:"#fff"}}>Book Store </Link>
                  <span><img src={book_logo} alt='' className='book_logo'></img></span>
                  </h2>

                <div className='search-input'>
                  <input type='text' placeholder='search' ></input>
                  <img src={search_icon} alt='' style={{cursor:"pointer"}}></img>
                    
                </div>

                    {
                      currentuser ?
                      <div className='logout'>
                      <button onClick={logoutfrompage}>Log out</button>

                    </div> :""
                    }
              

               <Link to="/cart">
               <div className='cart_icon'>
                  <img src={cart_icon} alt=''></img>
                    <span className='count'>
                      {currentuser ? bookcart.length : 0}
                    </span>
                </div> 
                </Link> 
        </div>

        <div className='menuHeader'>
              <ul>
              <Link to="/" style={{ textDecoration: "none",color:"gray"}}><li>Home</li></Link>
                <Link to="/author" style={{ textDecoration: "none",color:"gray"}}><li>Authors</li></Link>
                <Link to="/auth" style={{ textDecoration: "none",color:"gray"}}><li>Register</li></Link>
              </ul>
        </div>
    </nav>
  )
}
