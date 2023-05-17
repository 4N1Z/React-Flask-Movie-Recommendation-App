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
            <Link to="/ ">
                 <img src={Logo} className="logo" alt="" />
            </Link>
            <Link to ='/wishlist' >
                <h1>Wishlist</h1>
            </Link>
            {/* if isHome then the button is the github button else its the home button*/}
            {isHome ? (
                <a href="/" className="header-btn1 bouncy">
                    <i className="fas fa-home"></i> Home
                </a>
            ) : (
                <SearchBar movies={props} placeholder="Search for a Movie" />
                // <a
                //     href={makerLink}
                //     target="_blank"
                //     rel="noreferrer"
                //     className="header-btn1 bouncy"
                // >
                //     <i className="fa-brands fa fa-angellist"></i> Aniz
                // </a>
            )}

        </div>
    );
};

export default NavBar;
