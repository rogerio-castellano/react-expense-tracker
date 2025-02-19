import categories from "./categories";

const ExpensesForm = () => {
  return (
    <>
      <form id="expense-form">
        <label htmlFor="description">Description:</label>
        <input type="text" id="description" name="description" required />

        <label htmlFor="amount">Amount:</label>
        <input type="number" id="amount" name="amount" required />

        <label htmlFor="category">Category:</label>
        <select id="category" name="category" required>
          {categories.map((category) => (
            <option value={category}>{category}</option>
          ))}
        </select>

        <button type="submit">Add Expense</button>
      </form>
    </>
  );
};

export default ExpensesForm;
