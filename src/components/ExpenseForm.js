import { useState } from "react";
import axios from "axios";
import Indicators from "./Indicators";

const ExpenseForm = () => {
  const [token, setToken] = useState(
    "eyJhbGciOiJIUzI1NiIsInR5cCI6ImFjY2VzcyJ9.eyJpYXQiOjE2NzYwNjM1MjEsImV4cCI6MTY3NjE0OTkyMSwiYXVkIjoiaHR0cHM6Ly95b3VyZG9tYWluLmNvbSIsInN1YiI6IjEiLCJqdGkiOiIyYzJkOTkxOC1kMGYwLTRmZTAtYTQ1Zi02ZjNjZjQxYzZjYWQifQ.TgnMAICnwOgNMDlH4033o68QTyFwYfGNCqFkhJVvbso"
  );
  const [company, setCompany] = useState("");
  const [expenseType, setExpenseType] = useState("");
  const [expenseCategorty, setExpenseCategory] = useState("");
  const [department, setDepartment] = useState("");
  const [provider, setProvider] = useState("");
  const [quantity, setQuantity] = useState("");
  const [total, setTotal] = useState("");
  // const [currency, setCurrency] = useState("");
  const [invoice, setInvoice] = useState("");
  const [notes, setNotes] = useState("");

  const handleFormSubmit = (e) => {
    const now = new Date();
    e.preventDefault();
    axios.post(
      "http://localhost:3030/budget",
      {
        createdAt: "2023-01-02",
        expenseType: "OPEX",
        expenseCategorty,
        provider,
        quantity,
        totalAmount: total,
        invoice,
        notes,
      },
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    console.log("Form submited");
  };

  const onCompanyChange = (e) => {
    console.log(company);
    setCompany(e.target.value);
  };
  const onExpenseTypeChange = (e) => {
    console.log(expenseType);
    setExpenseType(e.target.value);
  };
  const onExpenseCategoryChange = (e) => {
    console.log(expenseCategorty);
    setExpenseCategory(e.target.value);
  };
  const onDepartmentChange = (e) => {
    console.log(department);
    setDepartment(e.target.value);
  };
  const onProviderChange = (e) => {
    console.log(provider);
    setProvider(e.target.value);
  };
  const onQuantityChange = (e) => {
    console.log(quantity);
    setQuantity(parseInt(e.target.value));
  };
  const onTotalChange = (e) => {
    console.log(total);
    setTotal(parseInt(e.target.value));
  };
  // const onCurrencyChange = (e) => {
  //   console.log(currency);
  //   setCurrency(e.target.value);
  // };
  const onInvoiceChange = (e) => {
    console.log(invoice);
    setInvoice(e.target.value);
  };
  const onNotesChange = (e) => {
    console.log(notes);
    setNotes(e.target.value);
  };
  console.log(expenseType);

  return (
    <div className="w-auto">
      <form onSubmit={handleFormSubmit}>
        <div>
          <label className="block">Company:</label>
          <select
            className="border-solid border-2 border-sky-500 w-full p-1 rounded hover:bg-sky-100"
            type="select"
            required
            onChange={onCompanyChange}
            value={company}
          >
            <option value="">Select CIA</option>
            <option value="WWS">WWS</option>
            <option value="WWMA">WWMA</option>
          </select>
        </div>
        <div>
          <label className="block">Expense Type:</label>
          <select
            className="border-solid border-2 border-sky-500 w-full p-1 rounded hover:bg-sky-100"
            type="text"
            required
            onChange={onExpenseTypeChange}
            value={expenseType}
          >
            <option value="CAPEX">OPEX</option>
            <option value="OPEX">CAPEX</option>
          </select>
        </div>
        <div>
          <label className="block">Expense Category:</label>
          <select
            className="border-solid border-2 border-sky-500 w-full p-1 rounded hover:bg-sky-100"
            type="text"
            required
            onChange={onExpenseCategoryChange}
            value={expenseCategorty}
          >
            <option value="">Select Category</option>
            <option value="Accesories">Accesories</option>
            <option value="Computers">Computers</option>
            <option value="Licences">Licences</option>
            <option value="Software">Software</option>
            <option value="Training">Training</option>
            <option value="Outsourced">Outsourced</option>
            <option value="Maintenance">Maintenance</option>
            <option value="Services">Services</option>
            <option value="Support">Support</option>
          </select>
        </div>
        <div>
          <label className="block">Department:</label>
          <select
            className="border-solid border-2 border-sky-500 w-full p-1 rounded hover:bg-sky-100"
            type="text"
            required
            value={department}
            onChange={onDepartmentChange}
          >
            <option value="IT">IT</option>
            <option value="Operations">Operations</option>
            <option value="Underwriting">Underwriting</option>
            <option value="Accounting">Accounting</option>
            <option value="Administration">Administration</option>
            <option value="Marketing">Marketing</option>
            <option value="Sales">Sales</option>
            <option value="Claims">Claims</option>
            <option value="Legal">Legal</option>
            <option value="Human Resources">Human Resources</option>
          </select>
        </div>
        <div>
          <label className="block">Provider:</label>
          <input
            className="border-solid border-2 border-sky-500 w-full p-1 rounded hover:bg-sky-100"
            type="text"
            required
            value={provider}
            onChange={onProviderChange}
          ></input>
        </div>
        <div>
          <label className="block">Quantity:</label>
          <input
            className="border-solid border-2 border-sky-500 w-full p-1 rounded hover:bg-sky-100"
            type="number"
            required
            value={quantity}
            onChange={onQuantityChange}
          ></input>
        </div>
        <div>
          <label className="block">Total:</label>
          <input
            className="border-solid border-2 border-sky-500 w-full p-1 rounded hover:bg-sky-100"
            type="number"
            required
            value={total}
            onChange={onTotalChange}
          ></input>
        </div>
        <div>
          <label className="block">Currency:</label>
          <select
            className="border-solid border-2 border-sky-500 w-full p-1 rounded hover:bg-sky-100"
            type="text"
            required
            // value={currency}
            // onChange={onCurrencyChange}
          >
            <option value="US">US</option>
            <option value="RD">RD</option>
          </select>
        </div>
        <div>
          <label className="block">Invoice id: </label>
          <input
            className="border-solid border-2 border-sky-500 w-full p-1 rounded hover:bg-sky-100"
            type="text"
            required
            value={invoice}
            onChange={onInvoiceChange}
          ></input>
        </div>
        <div>
          <label className="block">Additional Notes:</label>
          <textarea
            className="border-solid border-2 border-sky-500 w-full p-1 rounded hover:bg-sky-100"
            type="text"
            value={notes}
            onChange={onNotesChange}
          ></textarea>
        </div>
        <button className="bg-sky-600 hover:bg-sky-500 text-white p-2 m-2 rounded" type="submit">
          Add Expense
        </button>
      </form>
    </div>
  );
};

export default ExpenseForm;
