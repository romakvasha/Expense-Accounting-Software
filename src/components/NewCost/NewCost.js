import CostForm from "./CostForm"
import "./NewCost.css"

const NewCost = (props) =>{
    const saveCostDateHandler = (inputCostData)=>{
        const costData = {
            ...inputCostData,
            id: Math.random().toString(),
        }
        props.onAddCost(costData)
    }

    return (
        <div className="new-cost">
            <CostForm onSaveCostDate={saveCostDateHandler} />
        </div>
    )
}

export default NewCost;