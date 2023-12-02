import { useSelector } from "react-redux";
import { getStep } from "../globalSlice";

function NavStepsUi({ number, title, description }) {
  const step = useSelector(getStep);
  const isActive = step === number;
  return (
    <div className="flex items-center gap-4">
      <span
        className={
          isActive
            ? " border-1 bold rounded-full border bg-blue-400 px-4 py-2 font-bold text-white"
            : "border-1 bold rounded-full border bg-transparent px-4 py-2 font-bold text-white"
        }
      >
        {number}
      </span>
      <div>
        <h3 className="uppercase text-step-title">{title}</h3>
        <span className="font-bold uppercase text-white">{description}</span>
      </div>
    </div>
  );
}

export default NavStepsUi;
