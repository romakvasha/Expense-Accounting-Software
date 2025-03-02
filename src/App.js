import { useState } from "react";
import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";

const INITIAL_COST = [
  {
    id: "c1",
    date: new Date(2025, 2, 12),
    description: "Refrigerator",
    amount: 500,
  },
  { id: "c2", 
    date: new Date(2025, 5, 10), 
    description: "Auto", 
    amount: 1000 },
  {
    id: "c3",
    date: new Date(2025, 6, 25),
    description: "Camera",
    amount: 1500,
  },
  {
    id: "c4",
    date: new Date(2024, 4, 25),
    description: "Auto",
    amount: 100,
  },
  {
    id: "c5",
    date: new Date(2024, 6, 25),
    description: "Auto",
    amount: 200,
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
