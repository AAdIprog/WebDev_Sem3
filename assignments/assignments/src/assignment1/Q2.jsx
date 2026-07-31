function StudentCard({ name, rollno, course }) {
  return (
    <div className="student-card">
      <h3>{name}</h3>
      <p>Roll No: {rollno}</p>
      <p>Course: {course}</p>
    </div>
  )
}

const Q2 = () => {
  return (
    <div className="assignment-card">
      <h2>Q2. Reusable Student Card</h2>
      <StudentCard name="Aadi Shah" rollno="1" course="Computer Science" />
      <StudentCard name="Dev Jaiswal" rollno="14" course="Mechanical Engineering" />
      <StudentCard name="Mohit Ray" rollno="9" course="AIDS" />
    </div>
  )
}

export default Q2
