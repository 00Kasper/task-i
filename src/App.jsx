import Header from "./components/Header"
import StudentInfo from "./components/StudentInfo"
import Timetable from "./components/Timetable"
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
