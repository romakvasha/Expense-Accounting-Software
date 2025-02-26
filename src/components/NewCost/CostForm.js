import "./CostForm.css";
import { useState } from "react";

const CostForm = (props) => {
  const [inputName, setInputName] = useState("");
  const [inputAmount, setInputAmount] = useState("");
  const [inputDate, setInputDate] = useState("");

  const nameChangleHandler = (event) => {
    setInputName(event.target.value);
  };

  const amountChangleHandler = (event) => {
    setInputAmount(event.target.value);
  };

  const dateChangleHandler = (event) => {
    setInputDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const costDate = {
      description: inputName,
      amount: inputAmount,
      date: new Date(inputDate),
    };

    props.onSaveCostDate(costDate);

    setInputAmount("");
    setInputDate("");
    setInputName("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-cost__controls">
        <div className="new-cost__control">
          <label>Names</label>
          <input type="text" value={inputName} onChange={nameChangleHandler} />
        </div>
        <div className="new-cost__control">
          <label>Sum</label>
          <input
            type="number"
            min="1"
            step="1"
            value={inputAmount}
            onChange={amountChangleHandler}
          />
        </div>
        <div className="new-cost__control">
          <label>CostDate</label>
          <input
            type="date"
            min="2020-01-01"
            step="2025-12-31"
            value={inputDate}
            onChange={dateChangleHandler}
          />
        </div>
        <div className="new-cost__actions">
          <button type="submit">Add consumption</button>
        </div>
      </div>
    </form>
  );
};

export default CostForm;
