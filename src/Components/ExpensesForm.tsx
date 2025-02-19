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
          <option value="food">Food</option>
          <option value="transportation">Transportation</option>
          <option value="entertainment">Entertainment</option>
          <option value="health">Health</option>
          <option value="utilities">Utilities</option>
          <option value="other">Other</option>
        </select>

        <button type="submit">Add Expense</button>
      </form>
    </>
  );
};

export default ExpensesForm;
