import "./LoanFormStyles.css";
import Modal from "./Modal";
import { useState } from "react";

export default function LoanForm() {
  const [formInputs, setFormInputs] = useState({
    name: "",
    phoneNumber: "",
    age: null,
    isEmployee: false,
    salary: "",
  });

  // const [errorMessage, setErrorMessage] = useState("");

  // function handleSubmit(event) {
  //   event.preventDefault();

  //   const phoneNumberRegex = /^[0-9\b]+$/;

  //   if (
  //     formInputs.phoneNumber.length > 12 ||
  //     formInputs.phoneNumber.length < 10 ||
  //     !phoneNumberRegex.test(formInputs.phoneNumber)
  //   ) {
  //     alert("Phone Number should be between 10 and 12 digits");
  //   } else if (formInputs.age < 18 || formInputs.age > 100) {
  //     alert("Age should be between 18 and 100");
  //   } else {
  //     event.target.submit();
  //   }
  // }

  function handelFormSubmit() {}

  function handelPhoneNumberInput(event) {
    // const re = /^[0-9\b]+$/;
    // if (event.target.length  > 12 || event.target.length  < 10 || re.test(event.target.value)) {
    //   alert("Phone Number should be between 10 and 12 Number");
    // } else {
    //   setFormInputs({ ...formInputs, phoneNumber: event.target.value });
    // }
    setFormInputs({ ...formInputs, phoneNumber: event.target.value });
  }

  function handelAgeInput(event) {
    setFormInputs({ ...formInputs, age: event.target.value });
  }

  const isSubmitDisabled =
    formInputs.name === "" ||
    formInputs.phoneNumber === "" ||
    formInputs.age == null ||
    formInputs.salary === "";


  return (
    <div className="flex" style={{ flexDirection: "column" }}>
      <form id="loan-form" className="flex" style={{ flexDirection: "column" }}>
        <h1>Requesting a Loan</h1>
        <hr />

        <label>Name:</label>
        <input
          value={formInputs.name}
          onChange={(event) => {
            setFormInputs({ ...formInputs, name: event.target.value });
          }}
          type="text"
        />

        <label>Phone Number:</label>
        <input
          value={formInputs.phoneNumber}
          onChange={handelPhoneNumberInput}
          type="text"
        />

        <label>Age:</label>
        <input value={formInputs.age} onChange={handelAgeInput} type="text" />

        <label style={{ marginTop: "30px" }}>Are you an employee?</label>
        <input
          type="checkbox"
          checked={formInputs.isEmployee}
          onChange={(event) => {
            setFormInputs({ ...formInputs, isEmployee: event.target.checked });
          }}
        />

        <label>Salary:</label>
        <select
          value={formInputs.salary}
          onChange={(event) =>
            setFormInputs({ ...formInputs, salary: event.target.value })
          }
        >
          <option>less than 500$</option>
          <option>between 500$ and 2000$</option>
          <option>above 2000$</option>
        </select>

        <button
          disabled={isSubmitDisabled}
          id="submit-loan-btn"
          className={isSubmitDisabled ? "disabled" : ""}
          onClick={handelFormSubmit}
        >
          submit
        </button>
      </form>
      {/* <Modal /> */}
    </div>
  );
}
