import Expense from "./Expense.model";

interface props {
  expenses: Expense[];
}

const ExpensesList = ({ expenses }: props) => {
  return (
    <table id="expenses-table">
      <thead>
        <tr>
          <th>Description</th>
          <th>Amount</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((expense) => {
          return (
            <tr key={expense.id}>
              <td>{expense.description}</td>
              <td>{expense.amount}</td>
              <td>{expense.category}</td>
            </tr>
          );
        })}
      </tbody>
      <tfoot>
        <tr>
          <td>Total:</td>
          <td>
            <span id="total-amount">227.50</span>
          </td>
          <td></td>
        </tr>
      </tfoot>
    </table>
  );
};

export default ExpensesList;
