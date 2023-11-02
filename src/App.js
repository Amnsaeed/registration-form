import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";


function App() {
  return (

    <Router>

         <div className="App">
            
            <Navbar />

              <Routes>

                <Route path="/"
                element={<Home />}
                ></Route>

              </Routes>

          </div>


    </Router>


  );
}

export default App;
