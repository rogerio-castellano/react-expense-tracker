import "./App.css";
import ExpensesFilter from "./Components/ExpensesFilter";
import ExpensesForm from "./Components/ExpensesForm";
import ExpensesList from "./Components/ExpensesList";
import Header from "./Components/Header";

function App() {
  return (
    <>
      <Header />
      <ExpensesForm />
      <p></p>
      <ExpensesFilter />
      <p></p>
      <ExpensesList />
    </>
  );
}

export default App;
