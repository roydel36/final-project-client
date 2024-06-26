/*==================================================
AllStudentsView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the all students view page.
================================================== */
import { Link } from "react-router-dom";

const AllStudentsView = (props) => {
  const {students, deleteStudent, campusId} = props;
  // If there is no student, display a message
  if (!students.length) {
    return (
      <div>
      <p>There are no students.</p>
      <Link to={`newstudent`}>
        <button>Add New Student</button>
      </Link>
    </div>
    );
  }
  
  // If there is at least one student, render All Students view 
  return (
    <div>
      <h1>All Students</h1>

      <Link to={`/newstudent`}>
        <button style={{cursor:"pointer", width:"200px", margin:"10px", backgroundColor:"black", color:"white", borderRadius:"30px", padding:"10px"}}>Add New Student</button>
      </Link>

      {students.map((student) => {
        let name = student.firstname + " " + student.lastname;
        return (
          <div key={student.id}>
            <Link to={`/student/${student.id}`}>
              <h2>{name}</h2>
            </Link>
            <button style={{cursor:"pointer", width:"100px", margin:"10px", backgroundColor:"black", color:"white", borderRadius:"30px", padding:"10px"}} onClick={() => deleteStudent(student.id)}>Delete</button>
            <Link to={`/editstudent/${student.id}`}>
              <button style={{cursor:"pointer", width:"100px", margin:"10px", backgroundColor:"black", color:"white", borderRadius:"30px", padding:"10px"}}>Edit Student</button>
            </Link>
            {campusId && campusId !== null && ( // Check if campusId has a value
            <Link to={{
              pathname: `/editstudent/${student.id}`,
              query: {campusId}
              }}>
              <button>Enroll Student</button>
            </Link>
            )}
          </div>
        );
      }
      )}
      <br />
      <br /><br />
    </div>
  );
};


export default AllStudentsView;