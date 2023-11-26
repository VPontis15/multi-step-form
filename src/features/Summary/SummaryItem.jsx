import { useSelector } from "react-redux";
import { getChoice } from "../Plan/PlanSlice";

function SummaryItem({
  title,
  price,
  bgColor = "",
  titleColor = "hsl(231, 11%, 63%",
  totalPrice = 0,
  fontBold = "regular",
  children,
}) {
  const choice = useSelector(getChoice);
  return (
    <li
      className={`flex justify-between bg-${bgColor} items-center rounded-md px-4 py-6`}
    >
      <div>
        <h3 className={`text-${titleColor} font-${fontBold}`}>{title}</h3>
        {children}
      </div>
      <span
        className={`font-${fontBold} ${
          price ? "" : "font-bold text-option-title"
        }`}
      >
        ${price || totalPrice}/{choice === "monthly" ? "mo" : "yr"}
      </span>
    </li>
  );
}

export default SummaryItem;
