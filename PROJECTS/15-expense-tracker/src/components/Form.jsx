import { useState } from "react";

const Form = ({ activeTab, addTransaction }) => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!description.trim() || amount <= 0) {
      alert("Lütfen geçerli bir açıklama ve miktar giriniz");
      return;
    }

    const newTransaction = {
      id: Date.now(),
      description: description.trim(),
      amount: parseFloat(amount),
      type: activeTab,
    };

    addTransaction(newTransaction);
    setDescription("");
    setAmount("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex" }}>
      <div className="form-group">
        <label>Açıklama</label>
        <input
          type="text"
          className="input-glass"
          placeholder={
            activeTab === "income"
              ? "Gelir açıklaması..."
              : "Gider açıklaması..."
          }
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>
          {activeTab === "income" ? "Gelir Miktarı" : "Gider Miktarı"}
        </label>
        <input
          type="number"
          className="input-glass"
          placeholder="₺0,00"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
      </div>
      <button type="submit" className={`${activeTab}-btn`}>
        {activeTab === "income" ? "Gelir Ekle" : "Gider Ekle"}
      </button>
    </form>
  );
};

export default Form;
