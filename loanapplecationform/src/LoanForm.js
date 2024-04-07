import "./LoanFormStyles.css";
import Modal from "./Modal";
export default function LoanForm() {
  return (
    <div className="flex" style={{ flexDirection: "column" }}>
      <form id="loan-form" className="flex" style={{ flexDirection: "column" }}>
        <h1>Requesting a Loan</h1>
        <hr />

        <label>Name:</label>
        <input type="text" />

        <label>Phone Number:</label>
        <input type="text" />

        <label>Age</label>
        <input type="text" />

        <label style={{ marginTop: "30px" }}>Are you an employee?</label>
        <input type="checkbox" />

        <label>Salary</label>
        <select>
          <option>less than 500$</option>
          <option>between 500$ and 2000$</option>
          <option>above 2000$</option>
        </select>

        <button id="submit-loan-btn">submit</button>
      </form>
      {/* <Modal /> */}
    </div>
  );
}
