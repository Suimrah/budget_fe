const Expense = ({ expenses }) => {
  console.log(expenses);
  const renderedExpenses = expenses.map((expense) => {
    return (
      <div className="flex flex-row border-solid, border-2 p-2 m-2">
        <div>Registered: {expense.createdAt}</div>
        <div>Expense Type: {expense.expenseType}</div>
        <div>Company: {expense.company}</div>
        <div>Expense Category: {expense.expenseCategorty}</div>
        <div>Department: {expense.requiredDepartment}</div>
        <div>Provider: {expense.provider}</div>
        <div>Quantity: {expense.quantity}</div>
        <div>Total: {expense.totalAmount}</div>
        <div>Currency: {expense.currency}</div>
        <div>Invoice id: {expense.invoice}</div>
        <div>Additional Notes: {expense.notes}</div>
      </div>
    );
  });
  return <div>{renderedExpenses}</div>;
};

export default Expense;
