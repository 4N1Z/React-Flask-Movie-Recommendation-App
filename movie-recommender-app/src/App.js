import "./App.css";
import LoggedIn from "./Pages/Components/LoggedIn/LoggedIn";
import LoginForm from "./Pages/Components/LoginForm/LoginForm";
import Wishlist from "./Pages/Components/Wishlist";
import Home from "./Pages/Home";
import SearchResult from "./Pages/SearchResult";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App">
      {isLoggedIn ? (
        <LoggedIn setIsLoggedIn={setIsLoggedIn} />
      ) : (
        <LoginForm setIsLoggedIn={setIsLoggedIn} />
      )}

      <Router>
        <Routes>
          {/* <Link >
                    </Link> */}
          <Route exact path="/" element={<Home />} />
          <Route exact path="/search/:id" element={<SearchResult />} />
          <Route exact path="/wishlist" element={<Wishlist />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
