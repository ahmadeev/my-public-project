

import './App.css'
import CountDownToNewYear from "./pages/CountDownToNewYear.jsx";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import CountDownToVikasBirthday from "./pages/CountDownToVikasBirthday.jsx";
import Home from "./pages/Home.jsx";

function App() {

    // зеленые елки по краям

  return (
      <>
          {/*<Navbar />*/}
          <Router basename="/my-public-project/">
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/ny" element={<CountDownToNewYear />} />
                  <Route path="/vbd" element={<CountDownToVikasBirthday />} />
              </Routes>
          </Router>
      </>

  )
}

export default App
