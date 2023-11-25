import { useSelector } from "react-redux";
import { getChoice } from "../Plan/PlanSlice";

function Toggle({ value, handleToggle }) {
  const choice = useSelector(getChoice);
  return (
    <div className="toggle mx-auto flex items-center justify-center gap-24 align-bottom">
      <span className=" text-xl">Monthly</span>
      <input
        onChange={handleToggle}
        value={value}
        className="align-bottom"
        type="checkbox"
        id="temp"
        checked={choice === "monthly" ? false : true}
      />
      <label className="align-bottom text-xl" htmlFor="temp">
        Yearly
      </label>
    </div>
  );
}

export default Toggle;
