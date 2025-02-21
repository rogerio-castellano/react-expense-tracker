import NewExpense from "./NewExpense.model";
import categories from "./categories";
import { useForm } from "react-hook-form";

interface Props {
  onSubmittedExpense: (expense: NewExpense) => void;
}

const ExpensesForm = ({ onSubmittedExpense }: Props) => {
  const { register, handleSubmit } = useForm<NewExpense>();

  return (
    <>
      <form id="expense-form" className="bordered-div" onSubmit={handleSubmit(onSubmittedExpense)}>
        <label htmlFor="description">Description:</label>
        <input type="text" id="description" {...register("description")} required />

        <label htmlFor="amount">Amount:</label>
        <input id="amount" {...register("amount", { valueAsNumber: true })} />

        <label htmlFor="category">Category:</label>
        <select id="category" {...register("category")} required>
          {categories.map((category) => (
            <option value={category} key={category}>
              {category}
            </option>
          ))}
        </select>

        <button type="submit">Add Expense</button>
      </form>
    </>
  );
};

export default ExpensesForm;
