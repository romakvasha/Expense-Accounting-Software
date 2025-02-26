import "./Costs.css";
import Card from "../UI/Card";
import CostItem from "./CostItem";
import CostsFilter from "./CostsFilter";
import { useState } from "react";
const Cost = (props) => {
  const [selectedYear, setSelectedYear] = useState("2025");
  const yearChangeHandler = (year) => {
    setSelectedYear(year);
    console.log(year)
  };
  const filteredCosts = props.costs.filter(cost =>{
    return cost.date.getFullYear().toString() === selectedYear
  })
  
  return (
    <div>
      <Card className="costs">
        <CostsFilter year={selectedYear} onChangeYear={yearChangeHandler} />
        {filteredCosts.map((cost) => (
          <CostItem
            key={cost.id}
            date={cost.date}
            description={cost.description}
            amount={cost.amount}
          />
        ))}
      </Card>
    </div>
  );
};

export default Cost;
