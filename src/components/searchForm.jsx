import { useGlobalContextFunc } from "../contexts/globalContext";

import "../css/searchForm.css"

const SearchForm = () => {
  const { renderMainForm, setRenderMainForm, students, setStudentsClone } =
    useGlobalContextFunc();


  const searchFunction = (e) => {
    const form = new FormData(e.target);
    const entries = Object.fromEntries([...form.entries()]);
    const inputsKeys = Object.keys(entries);
    const values = inputsKeys.map((input) => entries[input]);
    const isSearchInpEmpty = values.includes("");

    e.preventDefault();


    if (isSearchInpEmpty) {
      setStudentsClone([...students]);
      return;
    }

    const searchResult = students.filter((student) => {
      const searchValue = entries.SearchInputValue.toLowerCase();
      const studentName = student[entries["search-by"]].toLowerCase()
      const isStudentExist = studentName.startsWith(searchValue);
      return isStudentExist;
    });

    setStudentsClone(searchResult);
    e.target.reset();
  };


  return (
    <div className="form-container">
      <form className="search-form" onSubmit={searchFunction}>
        <div className="form-row">
          <p>search by</p>
          <select name="search-by">
            <option value="student-name">name</option>
            <option value="student-age">age</option>
            <option value="student-governorate">governorates</option>
            <option value="student-phone-number">student phone number</option>
            <option value="student-place">place</option>
            <option value="parent-phone-number">parent phone number</option>
            <option value="student-grade">student grade</option>
            <option value="student-price">student price</option>
            <option value="student-group">student group</option>
          </select>
          <input type="text" name="SearchInputValue" />
        </div>

        <button className="btn black" type="submit">
          search
        </button>
      </form>

      <button
        className="btn fill"
        onClick={() => {
          setRenderMainForm(!renderMainForm);
          setStudentsClone([...students]);
        }}
      >
        <span>go to default mode</span>
      </button>
    </div>
  );
};
export default SearchForm;
