const ExpensesFilter = () => {
  return (
    <>
      <select id="category" name="category" required>
        <option value="">All</option>
        <option value="food">Food</option>
        <option value="transportation">Transportation</option>
        <option value="entertainment">Entertainment</option>
        <option value="health">Health</option>
        <option value="utilities">Utilities</option>
        <option value="other">Other</option>
      </select>
    </>
  );
};

export default ExpensesFilter;
