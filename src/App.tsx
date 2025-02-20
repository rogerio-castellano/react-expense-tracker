import { useState } from "react";
import "./App.css";
import ExpensesFilter from "./Components/ExpensesFilter";
import ExpensesForm from "./Components/ExpensesForm";
import ExpensesList from "./Components/ExpensesList";
import Header from "./Components/Header";
import Expense from "./Components/Expense.model";

function App() {
  const [expenses, setExpenses] = useState<Expense[]>([]);

  return (
    <>
      <Header />
      <ExpensesForm />
      <p></p>
      <ExpensesFilter />
      <p></p>
      <ExpensesList expenses={expenses} />
    </>
  );
}

export default App;
