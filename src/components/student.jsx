import { useState } from "react";
import { useGlobalContextFunc } from "../contexts/globalContext";
import StudentDefaultMode from "./studentDefaultMode";
import StudentEditMode from "./studentEditMode";
import StudentTable from "./studentTable";

function Student({ student, index }) {
  const { removeStudent } = useGlobalContextFunc();
  const [isEdit, setIsEdit] = useState(false);
  const inputs = Object.keys(student).filter(
    (input) =>
      input != "tableData" &&
      !input.includes("-day") &&
      !input.includes("-month") 
  );

  return (
    <div className="student">
      <span className="order">student {index + 1}</span>

      <div className="studentDataHolder">
        {
          // name attribute value must be unique bec they re used in key prop
          isEdit ? (
            <StudentEditMode
              setIsEdit={setIsEdit}
              isEdit={isEdit}
              student={student}
            />
          ) : (
            <StudentDefaultMode inputs={inputs} student={student} />
          )
        }
      </div>

      {!isEdit && (
        <StudentTable
          months={+student["months-number"]}
          lectures={+student["lectures-number"]}
          student={student}
        />
      )}

      {!isEdit && (
        <button className="btn" onClick={() => setIsEdit(!isEdit)}>
          edit student
        </button>
      )}
      <button className="btn" onClick={() => removeStudent(student.id)}>
        remove student
      </button>
    </div>
  );
}
export default Student;
