import { useState } from "react";
import { useGlobalContextFunc } from "../contexts/globalContext";
import tableDataSetter from "../hooks/tableDataSetter";


function StudentEditMode({ setIsEdit, isEdit, student }) {
  const { updateStudentData } = useGlobalContextFunc();
  const [studentData, setStudentData] = useState(student);

  const inputs = Object.keys(student).filter(
    (input) =>
      input != "tableData" &&
      !input.includes("-day") &&
      !input.includes("-month") 
  );



  const updateStudent = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const entries = Object.fromEntries([...form.entries()]);
  
    let tableData = student.tableData

    const monthsNum = entries.months.split(" ,").length
    const daysNum = entries.days.split(" ,").length


    if (entries.months != student.months || entries.days != student.days) {
      tableData = tableDataSetter(monthsNum,daysNum)
    }
  
    const updatedData = { ...student, ...entries, tableData }
  
    updateStudentData(updatedData);
    setIsEdit(!isEdit);
  };


  const changeInputValue = (e) => {

    setStudentData((prevState)=>{
        return {...prevState,...{[e.target.name]:e.target.value}}
      }
    )
  }



  const editInputsJsx = inputs.map((input, index) => {
    if (input != "id")
      return (
        <div key={index}>
          <p>{input.split("-").join(" ")}</p>:
          <input
            type={input.match(/(number|price)/) ? "number" : "text"}
            name={input}
            value={studentData[input]}
            onChange={changeInputValue}
          />
        </div>
      );
  })


  return (
    <>
      <form onSubmit={updateStudent}>
        <p>student controls</p>
    
        <i className="warning">if you changed any data of the table all the data of table will be cleared</i>

        {
          editInputsJsx
        }

        <button type="submit" className="btn black">
          save changes
        </button>
      </form>
    </>
  );
}
export default StudentEditMode;
