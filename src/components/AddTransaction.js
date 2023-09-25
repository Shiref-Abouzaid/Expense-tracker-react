import React, {useState,useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';

const AddTransaction = () => {
  const [amount, setAmount] = useState(0);
  const [text, setText] = useState('');
  const {addTransaction} = useContext(GlobalContext);
  const onSubmit = e => {
    e.preventDefault();
    const newTransaction = {
      id: Math.floor(Math.random()*100000),
      text,
      amount
    }
    addTransaction(newTransaction);
  }
  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" value={text} onChange={(e)=>setText(e.target.value)} placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount"
            >Amount <br />
            (negative - expens e, positive - income)</label>
          <input type="number" value={amount} onChange={(e)=>setAmount(Number(e.target.value))}  placeholder="Enter amount..." />
        </div>
        <button className="btn">Add transaction</button>
      </form>

    </>
  )
}

export default AddTransaction
