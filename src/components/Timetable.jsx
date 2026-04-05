function Timetable() {
  return (
    <div className="table-wrap">
      <table className="table">
        <thead>
          <tr>
            <th>Course</th>
            <th>Mon</th>
            <th>Tue</th>
            <th>Wed</th>
            <th>Thu</th>
            <th>Fri</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Linux perusteet</td>
            <td>✅</td>
            <td>❌</td>
            <td>✅</td>
            <td>❌</td>
            <td>❌</td>
          </tr>
          <tr>
            <td>Web kehittämisen perusteet</td>
            <td>❌</td>
            <td>✅</td>
            <td>❌</td>
            <td>✅</td>
            <td>❌</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Timetable