import "./LoanFormStyles.css";
import Modal from "./Modal";
import { useState } from "react";

export default function LoanForm() {
  const [errorMessage, setErrorMessage] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [formInputs, setFormInputs] = useState({
    name: "",
    phoneNumber: "",
    age: null,
    isEmployee: false,
    salary: "",
  });

  function handelFormSubmit(event) {
    event.preventDefault();
    setErrorMessage(null);
    const phoneNumberRegex = /^[0-9\b]+$/;

    const { age } = formInputs;
    const { phoneNumber } = formInputs;
    if (age < 18 || age > 100) {
      setErrorMessage("The Age is not Allowd");
    } else if (!phoneNumberRegex.test(age)) {
      setErrorMessage("Age should consists of numbers");
    } else if (phoneNumber.length < 10 || phoneNumber.length > 12) {
      setErrorMessage("Phone Number Format is Incorrect");
    } else if (!phoneNumberRegex.test(phoneNumber)) {
      setErrorMessage("Phone Number should consisnts of numbers");
    }
    setShowModal(true);
  }

  function handelAgeInput(event) {
    setFormInputs({ ...formInputs, age: event.target.value });
  }

  const isSubmitDisabled =
    formInputs.name === "" ||
    formInputs.phoneNumber === "" ||
    formInputs.age == null ||
    formInputs.salary === "";

  function handleDivClick() {
    if (showModal) {
      setShowModal(false);
    }
  }
  return (
    <div
      onClick={handleDivClick}
      className="flex"
      style={{ flexDirection: "column" }}
    >
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
          onChange={(event) => {
            setFormInputs({ ...formInputs, phoneNumber: event.target.value });
          }}
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
      <Modal isVisible={showModal} errorMessage={errorMessage} />
    </div>
  );
}
