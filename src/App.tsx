import { useState } from "react";
import "./App.css";
import ExpensesFilter from "./Components/ExpensesFilter";
import ExpensesForm from "./Components/ExpensesForm";
import ExpensesList from "./Components/ExpensesList";
import Header from "./Components/Header";
import Expense from "./Components/Expense.model";

function App() {
  const expenses: Expense[] = [];
  const [categoryExpenses, setCategoryExpenses] = useState<Expense[]>(expenses);

  function onSelectedCategory(category: string): void {
    if (category === "") {
      setCategoryExpenses(expenses);
    } else {
      setCategoryExpenses(expenses.filter((expense) => expense.category === category));
    }
  }

  return (
    <>
      <Header />
      <ExpensesForm />
      <p></p>
      <ExpensesFilter onSelectedCategory={(category) => onSelectedCategory(category)} />
      <p></p>
      {expenses.length > 0 && <ExpensesList expenses={categoryExpenses} />}
    </>
  );
}

export default App;
