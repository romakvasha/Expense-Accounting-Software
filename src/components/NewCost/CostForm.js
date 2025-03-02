import "./CostForm.css";
import { useState } from "react";

const CostForm = (props) => {
  const [inputName, setInputName] = useState("");
  const [inputAmount, setInputAmount] = useState("");
  const [inputDate, setInputDate] = useState("");
  const [isFormVisible, setIsFormVisible] = useState(false);

  const nameChangeHandler = (event) => {
    setInputName(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setInputAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
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
    setIsFormVisible(false); // Ховаємо форму після відправки
  };

  const showFormHandler = () => {
    setIsFormVisible(true); // Показуємо форму
  };

  const cancelHandler = () => {
    setIsFormVisible(false); // Ховаємо форму без збереження
    setInputAmount(""); // Очищаємо поля (опціонально)
    setInputDate("");
    setInputName("");
  };

  const formContent = (
    <form onSubmit={submitHandler}>
      <div className="new-cost__controls">
        <div className="new-cost__control">
          <label>Name</label>
          <input type="text" value={inputName} onChange={nameChangeHandler} />
        </div>
        <div className="new-cost__control">
          <label>Sum</label>
          <input
            type="number"
            min="1"
            step="1"
            value={inputAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-cost__control">
          <label>Date</label>
          <input
            type="date"
            min="2020-01-01"
            max="2025-12-31" // Замінюємо step на max
            value={inputDate}
            onChange={dateChangeHandler}
          />
        </div>
        <div className="new-cost__actions">
          <button type="submit">Add cost</button>
          <button type="button" onClick={cancelHandler}>
            Cancel
          </button>
        </div>
      </div>
    </form>
  );

  const buttonAddNewCost = (
    <button onClick={showFormHandler}>Add a new cost</button>
  );

  return <div>{isFormVisible ? formContent : buttonAddNewCost}</div>;
};

export default CostForm;
