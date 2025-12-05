import { useState } from "react";
import useLocalStorage from "./hooks/useLocalStorage";
import History from "./components/History";
import Transaction from "./components/Transaction";

function App() {
  const [transactions, setTransactions] = useLocalStorage("transactions", []);
  const [activeTab, setActiveTab] = useState("income");

  const calculateBalance = () =>
    transactions.reduce(
      (total, transaction) =>
        transaction.type === "income"
          ? total + transaction.amount
          : total - transaction.amount,
      0
    );

  const calculateTotal = (type) =>
    transactions
      .filter((transaction) => transaction.type === type)
      .reduce((total, transaction) => total + transaction.amount, 0);

  const addTransaction = (newTransaction) => {
    setTransactions((prev) => [...prev, newTransaction]);
  };

  return (
    <div className="container">
      <div className="top-container">
        <h1>PARANI YÖNET</h1>
        <div className="balance-section">
          <h2>Toplam Bakiye</h2>
          <p id="balance">₺{calculateBalance().toFixed(2)}</p>
        </div>

        <div className="summary-section">
          <div className="summary-item income-summary">
            <h3>Gelir</h3>
            <p id="income">₺{calculateTotal("income").toFixed(2)}</p>
          </div>
          <div className="summary-item expense-summary">
            <h3>Gider</h3>
            <p id="expense">₺{calculateTotal("expense").toFixed(2)}</p>
          </div>
        </div>
      </div>

      <div className="bottom-container">
        <Transaction
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          addTransaction={addTransaction}
        />

        <History transactions={transactions} />
      </div>
    </div>
  );
}

export default App;
