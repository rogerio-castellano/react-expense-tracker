import categories from "./categories";

const ExpensesFilter = () => {
  return (
    <>
      <select id="category" name="category">
        <option value="">All</option>
        {categories.map((category) => (
          <option value="{category}">{category}</option>
        ))}
      </select>
    </>
  );
};

export default ExpensesFilter;
