const History = ({ transactions }) => {
  return (
    <div className="history-column">
      <div className="section-container">
        <h2 className="section-title">İşlem Geçmişi</h2>
        <div id="transactions" className="custom-scroll">
          {transactions.length === 0 ? (
            <p id="no-transactions">Henüz hiç işleminiz yok</p>
          ) : (
            [...transactions]
              .sort((a, b) => b.id - a.id)
              .map((transaction) => (
                <div key={transaction.id} className="transaction-item">
                  <div className="transaction-desc">
                    <p>{transaction.description}</p>
                  </div>
                  <div
                    className={`transaction-amount ${transaction.type}-amount`}
                  >
                    {transaction.type === "income" ? "+" : "-"}₺
                    {transaction.amount.toFixed(2)}
                  </div>
                </div>
              ))
          )}
        </div>
      </div>
    </div>
  );
};

export default History;
