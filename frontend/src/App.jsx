import Login from "./pages/Login";
import Home from "./pages/Home";
import {
    BrowserRouter as Router,
    Routes,
    Route } from "react-router-dom";

const App = () =>{
    return (

        <Router>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/login" element={<Login/>}/>
            </Routes>
        </Router>
    )
};

export default App;

