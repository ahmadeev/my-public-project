import './App.css'
import Timer from "./components/Timer.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {

  return (
      <>
          {/*{https://yraaa.ru/scripts/snow-css3}*/}
          <div className="snowContainer">
              <div id="snow"></div>
          </div>


          <div className="wrapper">
              <Navbar />
              <Timer
                  event={"до Нового года осталось:"}
                  date_of_event_string={`${new Date().getFullYear() + 1}-01-01T00:00:00.000Z`} />
          </div>
      </>

  )
}

export default App
