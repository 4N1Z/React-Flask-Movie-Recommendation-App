import "./App.css";
import Home from "./Pages/Home";
import SearchResult from "./Pages/SearchResult";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
    return (
        <div className="App">

            
            <Router>
                <Routes>
                    {/* <Link >
                    </Link> */}
                    <Route exact path="/" element={<Home />} />
                    <Route
                        exact
                        path="/search/:id"
                        element={<SearchResult />}
                    />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
