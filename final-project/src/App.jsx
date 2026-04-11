import Header from "./components/Header.jsx"
import StudentInfo from "./components/StudentInfo.jsx"
import Timetable from "./components/Timetable.jsx"
import "./App.css"

function App() {
  return (
    <>
      <Header />
      <main className="content">
        <StudentInfo />
        <Timetable />
      </main>
    </>
  )
}

export default App