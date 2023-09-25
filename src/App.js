import "./App.css";
import Header from "./components/Header";
import Balance from "./components/Balance";
import  IncomeExpenses from "./components/IncomeExpenses";
import TransactionList from "./components/TransactionList";
import { GlobalProvider } from "./context/GlobalState";
import AddTransaction from "./components/AddTransaction";
function App() {

  return (
<GlobalProvider>
<div className="App">
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList/>
        <AddTransaction/>
      </div>
    </div>
</GlobalProvider>
  );
}

export default App;
