function TableDetails({tableData , student}) {
  
  const attendedLectures = Object.values(tableData)
  .filter((value) => value == "on")
  
  const passedLectures = Object.values(tableData)
  .filter((value) => value != "on")


  return (
    <div className="details">
  
      <span>
        total :{" "}
        {
          attendedLectures.length > 0
          ? 
          
          attendedLectures
          .map((value) => +student["student-price"])
              .reduce((acc, value) => acc + value)
          :
          "0"
        }
        {" EGP"}
    
      </span>
      

      <span>
        attended lectures : {" " + attendedLectures.length}
      </span>


      <span>
        passed lectures : {" " + passedLectures.length}
      </span>


      <span>
        total lectures : {Object.values(tableData).length}
      </span>
  
    </div>
  )
}
export default TableDetails