function StudentDefaultMode({ inputs, student }) {
  const pStyles = {
    color: "var(--mainColor)",
    display: "inline-block",
    fontSize: "1em",
    marginLeft: "5px",
  };

  const studentInfoJsx = inputs.map((input, index) => {
    const inputName = input.split("-").join(" ");
    const inputValue = student[input];

    return (
      <p key={index}>
        {inputName}:<p style={pStyles}>{inputValue}</p>
      </p>
    );
  });


  return <>{studentInfoJsx}</>;
}
export default StudentDefaultMode;
