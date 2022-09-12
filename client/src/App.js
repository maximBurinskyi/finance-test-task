import React, { useState, useEffect, useRef } from 'react';
import io from 'socket.io-client';
import Coin from './Coin';
import './App.css';

const App = () => {
  const [coins, setCoins] = useState([]);
  // const [messages, setMessages] = useState([]);
  const [search, setSearch] = useState('');
  const socketRef = useRef();
  useEffect(() => {
    socketRef.current = io.connect('/');

    socketRef.current.on('your id', (id) => {
      console.log(id);
      //setYourID(id);
    });

    // socketRef.current.on('hello', (data) => {
    //   console.log(data);
    //   //setPeremen(data);
    // });

    socketRef.current.on('start', (data) => {
      console.log(data);
      setCoins(data);
    });

    // socketRef.current.emit('start', (data) => {
    //   socketRef.current.on('ticker', (data) => {
    //     console.log(data);
    //     setCoins(data);
    //   });
    // });

    // socketRef.current.on('message', (message) => {
    //   console.log('here');
    //   // receivedMessage(message);
    // });
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter((coin) =>
    coin.ticker.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div className="coin-app">
      <div className="coin-search">
        <h1 className="coin-text">Search a ticker</h1>
        <form>
          <input
            type="text"
            placeholder="Search"
            className="coin-input"
            onChange={handleChange}
          />
        </form>
      </div>
      {filteredCoins.map((coin) => {
        return (
          <Coin
            key={coin.ticker}
            ticker={coin.ticker}
            price={coin.price}
            exchange={coin.exchange}
            dividend={coin.dividend}
            priceChange={coin.change_percent}
          />
        );
      })}

      {/* {messages.map((el) => el.tiker)} */}
    </div>
  );
};

export default App;
