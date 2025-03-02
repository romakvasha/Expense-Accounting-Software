import "./DiagramBar.css";
const DiagramBar = (props) => {
  let barFillHight = "0%";

  if (props.maxValue > 0) {
    barFillHight = Math.round((props.value / props.maxValue) * 100) + "%";
  }

  return (
    <div className="diagram-bar">
      <div className="diagram-bar__inner">
        <div
          className="diagram-bar__fill"
          style={{
            height: barFillHight,
          }}
        ></div>
      </div>
      <div className="diagram-bar__label"><h2>{props.label}</h2></div>
    </div>
  );
};
export default DiagramBar;
