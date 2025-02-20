import categories from "./categories";

interface Props {
  onSelectedCategory: (category: string) => void;
}

const ExpensesFilter = ({ onSelectedCategory: onSelectedCategory }: Props) => {
  return (
    <>
      <select id="category" name="category" onChange={(e) => onSelectedCategory(e.target.value)}>
        <option value="" key="">
          All
        </option>
        {categories.map((category) => (
          <option value={category} key={category}>
            {category}
          </option>
        ))}
      </select>
    </>
  );
};

export default ExpensesFilter;
