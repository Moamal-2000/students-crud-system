import { v4 as uuid } from "uuid";
import { useGlobalContextFunc } from "../contexts/globalContext";
import { days, months } from "../data/staticData";
import tableDataSetter from "../hooks/tableDataSetter";

import "../css/mainForm.css"

function MainForm() {
  const {
    students,
    setStudents,
    renderMainForm,
    setRenderMainForm,
    setStudentsClone,
  } = useGlobalContextFunc();







  function submitFunc(e) {
    e.preventDefault();

    let form = new FormData(e.target);
    let entries = Object.fromEntries([...form.entries()]);

    entries.id = uuid();

    let inputsKeys = Object.keys(entries);
    let values = inputsKeys.map((input) => entries[input]);

    let months = inputsKeys
      .filter((input) => input.includes("-month"))
      .map((input) => input.split("-month").join(""));
    let days = inputsKeys
      .filter((input) => input.includes("-day"))
      .map((input) => input.split("-day").join(""));

    entries.months = months.join(" ,");
    entries.days = days.join(" ,");

    entries.tableData = tableDataSetter(months.length, days.length * 4);

      
      


    

    if (!values.includes("") && months.length && days.length) {
      setStudents([...students, entries]);
      setStudentsClone([...students, entries]);
      console.log(entries);
      e.target.reset();
    }
  }

  return (
    <div className="form-container">
      <form className="main-form" onSubmit={submitFunc}>
        <div className="main-form-inputs">
          <div className="form-row">
            <label htmlFor="name">Student Name</label>
            <input type="text" name="student-name" id="name" />
          </div>

          <div className="form-row">
            <label htmlFor="age">Student Age</label>
            <input type="number" name="student-age" id="age" />
          </div>

          <div className="form-row">
            <label htmlFor="country">Student country</label>
            <input type="text" name="student-country" id="country" />
          </div>

          <div className="form-row">
            <label htmlFor="governorates">governorate</label>
            <input type="text" name="student-governorate" id="governorates" />
          </div>
          
          <div className="form-row">
            <label htmlFor="studentPhoneNum">Student Phone Number</label>
            <input type="number" name="student-phone-number" id="studentPhoneNum" />
          </div>
          
          <div className="form-row">
            <label htmlFor="place">Place</label>
            <input type="text" name="student-place" id="place" />
          </div>
          
          <div className="form-row">
            <label htmlFor="parentPhoneNum">parent phone number</label>
            <input type="number" name="parent-phone-number" id="parentPhoneNum" />
          </div>
          
          <div className="form-row">
            <label htmlFor="studentGrade">student grade</label>
            <input type="text" name="student-grade" id="studentGrade" />
          </div>

          <div className="form-row">
            <label htmlFor="studentPrice">student price</label>
            <input type="number" name="student-price" id="studentPrice" />
          </div>

          <div className="form-row">
            <label htmlFor="group">student Group</label>
            <input type="text" name="student-group" id="group" />
          </div>
        </div>

        <div className="table-infos">
          <div className="days-holder">
            <p>student days</p>

            {days.map((day) => {
              day = day.toLowerCase();

              return (
                <div key={day} className="form-row">
                  <label htmlFor={day}>every {day}</label>
                  <input type="checkbox" name={day + "-day"} id={day} />
                </div>
              );
            })}
          </div>

          <div className="months-holder">
            <p>student months</p>

            {months.map((month) => {
              month = month.toLowerCase();

              return (
                <div key={month} className="form-row">
                  <label htmlFor={month}>{month}</label>
                  <input type="checkbox" name={month + "-month"} id={month} />
                </div>
              );
            })}
          </div>
        </div>

        <button className="btn" type="submit">
          add student
        </button>
      </form>

      <button
        className="btn fill"
        onClick={() => setRenderMainForm(!renderMainForm)}
      >
        <span>go to search mode</span>
      </button>
    </div>
  );
}
export default MainForm;
