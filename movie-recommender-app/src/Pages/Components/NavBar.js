// NavBar Component
import { Link } from "react-router-dom";
import "./styles/NavBarStyles.css";
import Logo from "./images/Logo2.png";
import SearchBar from "./SearchBar";

const NavBar = ( props,{isHome }) => {
    const makerLink =
        "https://bento.me/aniz";
    return (

        <div className="container header">
            <Link to="/home">
                <img src={Logo} className="logo" alt="" />
            </Link>
            {/* <Link to ='/wishlist' >
                <h1>Wishlist</h1>
            </Link> */}
            {/* if isHome then the button is the github button else its the home button*/}
            {isHome ? (
                <a href="/" className="header-btn1 bouncy">
                    <i className="fas fa-home"></i> Home
                </a>
            ) : (
                <SearchBar movies = {props.searchOn} placeholder="Search for a Movie" />
            )}

        </div>
    );
};

export default NavBar;
