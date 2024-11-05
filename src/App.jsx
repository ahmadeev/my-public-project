import './App.css'

import {HashRouter, Route, Routes} from "react-router-dom";

import Home from "./pages/Home.jsx";
import CountDownToNewYear from "./pages/CountDownToNewYear.jsx";
import CountDownToVikasBirthday from "./pages/CountDownToVikasBirthday.jsx";

function App() {

    // зеленые елки по краям

  return (
      <>
          <HashRouter>
              <Routes>
                  <Route path="/" element={<Home pageTitle="Домашняя" />} />
                  <Route path="/ny" element={<CountDownToNewYear pageTitle="Счётчик дней до Нового года" />} />
                  <Route path="/vbd" element={<CountDownToVikasBirthday pageTitle="Счётчик дней до дня рождения Вики" />} />
              </Routes>
          </HashRouter>
      </>
  )
}

export default App
