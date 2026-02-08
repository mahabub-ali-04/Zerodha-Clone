import React, { useState, useEffect } from "react";
import axios from "axios";
import { VerticalGraph } from "./VerticalGraph";

const Holdings = () => {
  const [allHoldings, setAllHoldings] = useState([]);

  useEffect(() => {
    console.log("Holdings component mounted");

    axios
      .get("http://localhost:3002/allHoldings")
      .then((res) => {
        console.log("HOLDINGS FROM API:", res.data);

        if (Array.isArray(res.data)) {
          setAllHoldings(res.data);
        } else {
          console.error(" API did not return array:", res.data);
          setAllHoldings([]);
        }
      })
      .catch((err) => {
        console.error(" Holdings API error:", err);
        setAllHoldings([]);
      });
  }, []);

  const safeFixed = (value) => {
    const num = Number(value);
    return isNaN(num) ? "0.00" : num.toFixed(2);
  };

  const labels = allHoldings.map((s) => s?.name || "N/A");

  const data = {
    labels,
    datasets: [
      {
        label: "Stock Price",
        data: allHoldings.map((s) => Number(s?.price) || 0),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return (
    <>
      <h3 className="title">Holdings ({allHoldings.length})</h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg. cost</th>
              <th>LTP</th>
              <th>Cur. val</th>
              <th>P&amp;L</th>
              <th>Net chg.</th>
              <th>Day chg.</th>
            </tr>
          </thead>

          <tbody>
            {allHoldings.length === 0 ? (
              <tr>
                <td colSpan="8" style={{ textAlign: "center" }}>
                  No holdings found
                </td>
              </tr>
            ) : (
              allHoldings.map((stock, index) => {
                const qty = Number(stock?.qty) || 0;
                const avg = Number(stock?.avg) || 0;
                const price = Number(stock?.price) || 0;

                const curValue = price * qty;
                const pnl = curValue - avg * qty;

                const profClass = pnl >= 0 ? "profit" : "loss";
                const dayClass = stock?.isLoss ? "loss" : "profit";

                return (
                  <tr key={index}>
                    <td>{stock?.name || "N/A"}</td>
                    <td>{qty}</td>
                    <td>{safeFixed(avg)}</td>
                    <td>{safeFixed(price)}</td>
                    <td>{safeFixed(curValue)}</td>
                    <td className={profClass}>{safeFixed(pnl)}</td>
                    <td className={profClass}>{stock?.net || "0.00"}</td>
                    <td className={dayClass}>{stock?.day || "0.00"}</td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>

      <div className="row">
        <div className="col">
          <h5>
            29,875.<span>55</span>
          </h5>
          <p>Total investment</p>
        </div>
        <div className="col">
          <h5>
            31,428.<span>95</span>
          </h5>
          <p>Current value</p>
        </div>
        <div className="col">
          <h5>1,553.40 (+5.20%)</h5>
          <p>P&amp;L</p>
        </div>
      </div>

      <VerticalGraph data={data} />
    </>
  );
};

export default Holdings;
