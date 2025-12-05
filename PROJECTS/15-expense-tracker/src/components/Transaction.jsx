import Form from "./Form";

const Transaction = ({ activeTab, setActiveTab, addTransaction }) => {
  return (
    <div className="forms-column">
      <div className="section-container">
        <h2 className="section-title">Yeni İşlem Ekle</h2>
        <div className="toggle-container">
          <button
            className={`toggle-btn income ${
              activeTab === "income" ? "active" : ""
            }`}
            onClick={() => setActiveTab("income")}
          >
            Gelir Ekle
          </button>
          <button
            className={`toggle-btn expense ${
              activeTab === "expense" ? "active" : ""
            }`}
            onClick={() => setActiveTab("expense")}
          >
            Gider Ekle
          </button>
        </div>

        <Form activeTab={activeTab} addTransaction={addTransaction} />
      </div>
    </div>
  );
};

export default Transaction;
