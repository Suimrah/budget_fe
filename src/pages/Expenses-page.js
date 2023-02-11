import Expenses from "../components/Expenses";
import Indicators from "../components/Indicators";
import ExpenseForm from "../components/ExpenseForm";

const ExpensesPage = () => {
  return (
    <div className="">
      <Indicators />
      <Expenses />
      <ExpenseForm />
    </div>
  );
};

export default ExpensesPage;
