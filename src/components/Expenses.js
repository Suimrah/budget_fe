import axios from "axios";
import { useState, useEffect } from "react";
import Indicators from "./Indicators";
import Expense from "./Expense";

const Expenses = ({ title }) => {
  const [token, setToken] = useState(
    "eyJhbGciOiJIUzI1NiIsInR5cCI6ImFjY2VzcyJ9.eyJpYXQiOjE2NzYwNTE1MDIsImV4cCI6MTY3NjEzNzkwMiwiYXVkIjoiaHR0cHM6Ly95b3VyZG9tYWluLmNvbSIsInN1YiI6IjEiLCJqdGkiOiJlNGUzOWU1Ny1lNjVlLTQ5OWUtOTI3Ni04MGZiNDJiZGQ3OGMifQ.0-7AziKB3_l5dCxACbNDRQcFQ4IthMp8_3tKgu2t7Ik"
  );
  const [expenses, setExpenses] = useState([]);

  const getExpenses = async () => {
    localStorage.setItem(
      "token",
      "eyJhbGciOiJIUzI1NiIsInR5cCI6ImFjY2VzcyJ9.eyJpYXQiOjE2NzYwNTE1MDIsImV4cCI6MTY3NjEzNzkwMiwiYXVkIjoiaHR0cHM6Ly95b3VyZG9tYWluLmNvbSIsInN1YiI6IjEiLCJqdGkiOiJlNGUzOWU1Ny1lNjVlLTQ5OWUtOTI3Ni04MGZiNDJiZGQ3OGMifQ.0-7AziKB3_l5dCxACbNDRQcFQ4IthMp8_3tKgu2t7Ik"
    );
    const { data } = await axios.get("http://localhost:3030/budget", {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    console.log(data.data);
    setExpenses(data.data);
  };
  useEffect(() => {
    getExpenses();
  }, []);

  return (
    <div className="flex">
      <Expense expenses={expenses} />
    </div>
  );
};

export default Expenses;
