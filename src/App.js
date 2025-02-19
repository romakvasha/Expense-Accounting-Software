import Costs from "./components/Costs/Costs"
function App() {
  const costs = [
    { date: new Date(2021, 2, 12), description: "Refrigerator", amount: 999 },
    { date: new Date(2021, 3, 10), description: "Auto", amount: 10000 },
    { date: new Date(2021, 4, 25), description: "Trousers", amount: 50 },
  ];

  return (
    <div>
      <Costs costs={costs}/>
    </div>
  );
}

export default App;
