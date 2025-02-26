import { useState } from "react";
import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";

const INITIAL_COST = [
  {
    id: "c1",
    date: new Date(2021, 2, 12),
    description: "Refrigerator",
    amount: 999,
  },
  { id: "c2", date: new Date(2021, 3, 10), description: "Auto", amount: 10000 },
  {
    id: "c3",
    date: new Date(2021, 4, 25),
    description: "Trousers",
    amount: 50,
  },
];

function App() {
  const [costs, setCosts] = useState(INITIAL_COST);

  const addCostHandler = (cost) => {
    setCosts((prevCosts) => {
      return [cost, ...prevCosts];
    });
  };

  return (
    <div>
      <NewCost onAddCost={addCostHandler} />
      <Costs costs={costs} />
    </div>
  );
}

export default App;
