import React from 'react';
import './Coin.css';

const Coin = ({ ticker, price, exchange, dividend, priceChange }) => {
  return (
    <div className="coin-container">
      <div className="coin-row">
        <div className="coin">
          <h1>{ticker}</h1>
          <p className="coin-symbol">{exchange}</p>
        </div>
        <div className="coin-data">
          <p className="coin-price">${price}</p>

          <p className="coin-dividend">${dividend}</p>

          {/* <p className="coin-volume">${volume.tolocalString()}</p> */}
          {priceChange < 0 ? (
            <p className="coin-percent red">{priceChange}%</p>
          ) : (
            <p className="coin-percent green">{priceChange}%</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Coin;
