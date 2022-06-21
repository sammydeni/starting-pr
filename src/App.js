import { useState } from "react";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: 'a1',
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2020, 11, 3),
  },
  {
    id: 'a2',
    title: "Car Repair",
    amount: 300,
    date: new Date(),
  },
  {
    id: 'a3',
    title: "Smartphone",
    amount: 600.99,
    date: new Date(),
  },
  {
    id: 'a4',
    title: "CockRoach Repeller",
    amount: 12.5,
    date: new Date(),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);


  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
