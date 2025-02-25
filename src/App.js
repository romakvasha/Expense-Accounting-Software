import Costs from "./components/Costs/Costs"
import NewCost from "./components/NewCost/NewCost";

function App() {
  const costs = [
    { date: new Date(2021, 2, 12), description: "Refrigerator", amount: 999 },
    { date: new Date(2021, 3, 10), description: "Auto", amount: 10000 },
    { date: new Date(2021, 4, 25), description: "Trousers", amount: 50 },
  ];
  const addCostHandler = (cost)=>{
    console.log(cost)

  } 


  return (
    <div>
      <NewCost onAddCost={addCostHandler}/>
      <Costs  costs={costs}/>
    </div>
  );
}

export default App;
