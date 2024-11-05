
import './App.css'
import CountDownToNewYear from "./pages/CountDownToNewYear.jsx";
import {HashRouter, BrowserRouter, Route, Routes} from "react-router-dom";
import CountDownToVikasBirthday from "./pages/CountDownToVikasBirthday.jsx";
import Home from "./pages/Home.jsx";

function App() {

    // зеленые елки по краям

  return (
      <>
          {/*<BrowserRouter basename="/my-public-project/">*/}
          {/*    <Routes>*/}
          {/*        <Route path="/" element={<Home pageTitle="Домашняя" />} />*/}
          {/*        <Route path="/ny" element={<CountDownToNewYear pageTitle="Счётчик дней до Нового года" />} />*/}
          {/*        <Route path="/vbd" element={<CountDownToVikasBirthday pageTitle="Счётчик дней до дня рождения Вики" />} />*/}
          {/*    </Routes>*/}
          {/*</BrowserRouter>*/}

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
