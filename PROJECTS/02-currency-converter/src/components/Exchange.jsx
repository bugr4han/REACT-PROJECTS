import React, { useState } from "react";
import { HiArrowsRightLeft } from "react-icons/hi2";
import axios from "axios";

const BASE_URL = "https://api.freecurrencyapi.com/v1/latest";
const API_KEY = "fca_live_eeNRBQDsUsRjRTiLYZTtY7THOpToyLK5m6ZjdUbr";

function Exchange() {
  const [amount, setAmount] = useState();
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("TRY");
  const [result, setResult] = useState();

  const CalculateRate = async (e) => {
    e.preventDefault();
    const response = await axios.get(
      `${BASE_URL}?apikey=${API_KEY}&base_currency=${from}`
    );
    const rate = response.data.data[to];
    if (rate && amount) {
      setResult((amount * rate).toFixed(2));
    }
  };

  const ChangeCurr = () => {
    setFrom(to);
    setTo(from);
    setResult("");
  };

  return (
    <div className="container">
      <h1 className="title">CURRENCY CONVERTER</h1>

      <form className="form" onSubmit={CalculateRate}>
        <label htmlFor="Amount" className="label">
          Enter Amount
        </label>
        <input
          type="number"
          id="Amount"
          className="input"
          min="0"
          placeholder="0.00"
          step="any"
          onChange={(e) => setAmount(e.target.value)}
        />

        <div className="currency-row">
          <div className="currency-block">
            <label htmlFor="from" className="label">
              FROM
            </label>
            <select
              id="from"
              className="currency-select"
              value={from}
              onChange={(e) => {
                setFrom(e.target.value);
                setResult("");
              }}
            >
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="TRY">TRY</option>
              <option value="AUD">AUD</option>
              <option value="BGN">BGN</option>
              <option value="BRL">BRL</option>
              <option value="CAD">CAD</option>
              <option value="CHF">CHF</option>
              <option value="CNY">CNY</option>
              <option value="CZK">CZK</option>
              <option value="DKK">DKK</option>
              <option value="GBP">GBP</option>
              <option value="HKD">HKD</option>
              <option value="HRK">HRK</option>
              <option value="HUF">HUF</option>
              <option value="IDR">IDR</option>
              <option value="ILS">ILS</option>
              <option value="INR">INR</option>
              <option value="ISK">ISK</option>
              <option value="JPY">JPY</option>
              <option value="KRW">KRW</option>
              <option value="MXN">MXN</option>
              <option value="MYR">MYR</option>
              <option value="NOK">NOK</option>
              <option value="NZD">NZD</option>
              <option value="PHP">PHP</option>
              <option value="PLN">PLN</option>
              <option value="RON">RON</option>
              <option value="RUB">RUB</option>
              <option value="SEK">SEK</option>
              <option value="SGD">SGD</option>
              <option value="THB">THB</option>
              <option value="ZAR">ZAR</option>
            </select>
          </div>

          <HiArrowsRightLeft onClick={ChangeCurr} className="swap-icon" />

          <div className="currency-block">
            <label htmlFor="to" className="label">
              TO
            </label>
            <select
              id="to"
              className="currency-select"
              value={to}
              onChange={(e) => {
                setResult("");
                setTo(e.target.value);
              }}
            >
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="TRY">TRY</option>
              <option value="AUD">AUD</option>
              <option value="BGN">BGN</option>
              <option value="BRL">BRL</option>
              <option value="CAD">CAD</option>
              <option value="CHF">CHF</option>
              <option value="CNY">CNY</option>
              <option value="CZK">CZK</option>
              <option value="DKK">DKK</option>
              <option value="GBP">GBP</option>
              <option value="HKD">HKD</option>
              <option value="HRK">HRK</option>
              <option value="HUF">HUF</option>
              <option value="IDR">IDR</option>
              <option value="ILS">ILS</option>
              <option value="INR">INR</option>
              <option value="ISK">ISK</option>
              <option value="JPY">JPY</option>
              <option value="KRW">KRW</option>
              <option value="MXN">MXN</option>
              <option value="MYR">MYR</option>
              <option value="NOK">NOK</option>
              <option value="NZD">NZD</option>
              <option value="PHP">PHP</option>
              <option value="PLN">PLN</option>
              <option value="RON">RON</option>
              <option value="RUB">RUB</option>
              <option value="SEK">SEK</option>
              <option value="SGD">SGD</option>
              <option value="THB">THB</option>
              <option value="ZAR">ZAR</option>
            </select>
          </div>
        </div>

        <button type="submit" className="btn">
          Get Exchange Rate
        </button>
      </form>

      <div className={`result ${result ? "" : "deactive"}`}>
        <h2 className="result-op">
          {result} {to}
        </h2>
      </div>
    </div>
  );
}

export default Exchange;
