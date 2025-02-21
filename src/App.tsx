import { useState } from "react";
import "./App.css";
import ExpensesFilter from "./Components/ExpensesFilter";
import ExpensesForm from "./Components/ExpensesForm";
import ExpensesList from "./Components/ExpensesList";
import Header from "./Components/Header";
import Expense from "./Components/Expense.model";
import NewExpense from "./Components/NewExpense.model";

const expenses: Expense[] = [];
let category: string = "";

function App() {
  const [categoryExpenses, setCategoryExpenses] = useState<Expense[]>(expenses);

  function onSelectedCategory(selectedCategory: string): void {
    category = selectedCategory;
    filterExpensesByCategory();
  }

  function addExpense(newExpense: NewExpense) {
    const maxId = expenses.length > 0 ? Math.max(...expenses.map((expense) => expense.id)) : 0;
    const expense: Expense = {
      id: maxId + 1,
      description: newExpense.description,
      amount: newExpense.amount,
      category: newExpense.category,
    };

    expenses.push(expense);
    filterExpensesByCategory();
  }

  function filterExpensesByCategory() {
    console.log(category, expenses);
    if (category === "") {
      setCategoryExpenses([...expenses]);
    } else {
      setCategoryExpenses(expenses.filter((expense) => expense.category === category));
    }
  }

  return (
    <>
      <Header />
      <ExpensesForm onSubmittedExpense={(newExpense: NewExpense) => addExpense(newExpense)} />
      <p></p>
      <ExpensesFilter onSelectedCategory={(category) => onSelectedCategory(category)} />
      <p></p>
      {expenses.length > 0 && <ExpensesList expenses={categoryExpenses} />}
    </>
  );
}

export default App;
