import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
function App() {
  const expenses = [
    {
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(),
    },
    {
      title: "Car Repair",
      amount: 300,
      date: new Date(),
    },
    {
      title: "Smartphone",
      amount: 600.99,
      date: new Date(),
    },
    {
      title: "CockRoach Repeller",
      amount: 12.5,
      date: new Date(),
    },
  ];

  const addExpenseHandler = (expense) => {
    console.log('In App');
    console.log(expense);
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
