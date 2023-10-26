import { createContext, useContext,useState } from "react";


const Context = createContext()
export const useGlobalContextFunc = () => useContext(Context)



function GlobalContext  ({children})  {
  let studentsDataLocal = localStorage.getItem("studentsData") ? 
  JSON.parse(localStorage.getItem("studentsData")) : [];
  
  const [students,setStudents] = useState(studentsDataLocal)
  const [renderMainForm,setRenderMainForm] = useState(true)
  const [studentsClone,setStudentsClone] = useState([...students])
  const [showMenu,setShowMenu] = useState(false)

  const tableDataChanger = (newStudent) => {
    setStudents(students.map(student => {
      if (student.id == newStudent.id)
      return newStudent
      return student
    }))
    setStudentsClone(students.map(student => {
      if (student.id == newStudent.id)
      return newStudent
      return student
    }))
  }
  const updateStudentData = (newStudent) => {
    setStudents(students.map(student => {
      if (newStudent.id == student.id)
      return newStudent
      return student
    }))
    setStudentsClone(students.map(student => {
      if (newStudent.id == student.id)
      return newStudent
      return student
    }))
  }
  const removeStudent = (id) => {
    setStudents(students.filter(student => student.id != id))
    setStudentsClone(students.filter(student => student.id != id))
  }
  const contextValues = {
    tableDataChanger,
    removeStudent,
    students,
    setStudents,
    renderMainForm,
    setRenderMainForm,
    studentsClone,
    setStudentsClone,
    updateStudentData,
    showMenu,
    setShowMenu
  }
  return (
    <Context.Provider value={contextValues}>
      {children}
    </Context.Provider>
  )
}
export default GlobalContext