import { useEffect } from "react";
import { useGlobalContextFunc } from "../contexts/GlobalContext";
import Student from "./Student";

const Students = () => {
  const { studentsClone, students } = useGlobalContextFunc();

  useEffect(() => {
    localStorage.setItem("studentsData", JSON.stringify(students));
  }, [students]);

  return (
    <>
      <h3 className="your-students">your students</h3>

      <div className="studentsContainer">
        {studentsClone.length > 0 ? (
          studentsClone.map((student, index) => {
            return <Student key={student.id} student={student} index={index} />;
          })
        ) : (
          <p>no students to show</p>
        )}
      </div>
    </>
  );
};
export default Students;
