import { useEffect, useState } from "react";
import Form from "../ui/Form";
import Card from "../Plan/Card";
import Toggle from "../ui/Toggle";

import { useDispatch, useSelector } from "react-redux";
import {
  addChoice,
  addPrice,
  addTitle,
  getChoice,
  getPrice,
  getTitle,
} from "../Plan/PlanSlice";
import {
  addError,
  clearError,
  closeModal,
  getErrors,
  getIsOpenModal,
} from "../globalSlice";
import ErrorMessage from "../ui/ErrorMessage";

function ChangePlanModal() {
  const price = useSelector(getPrice);
  const title = useSelector(getTitle);
  const choice = useSelector(getChoice);
  const errors = useSelector(getErrors);
  const [localValue, setLocalValue] = useState(price);
  const [localTitle, setLocalTitle] = useState(title);
  const closeModalWindow = useSelector(getIsOpenModal);
  const dispatch = useDispatch();

  const arcadePrice = choice === "monthly" ? 9 : 90;
  const advancedPrice = choice === "monthly" ? 12 : 120;
  const ProPrice = choice === "monthly" ? 15 : 150;

  function selectValue(e) {
    const selectedValue = e.target.closest("li").getAttribute("data-value");
    const selectedTitle = e.target.closest("li").getAttribute("data-title");
    setLocalValue(selectedValue);
    setLocalTitle(selectedTitle);
    dispatch(addPrice(Number(selectedValue)));
    dispatch(addTitle(selectedTitle));
  }

  function selectChoice(e) {
    const choice = e.target.checked ? "yearly" : "monthly";
    dispatch(addError({ type: "price", message: "Please select a plan" }));
    dispatch(addChoice(choice));
  }

  useEffect(
    function () {
      if (!price)
        dispatch(addError({ type: "price", message: "Please select a plan" }));
      else dispatch(clearError("price"));
    },
    [price],
  );
  return (
    <div className=" absolute inset-[0]   max-w-full flex-col  items-center justify-center  ">
      <section className=" flex h-screen  flex-col place-items-center justify-center gap-12 bg-[rgba(0,0,0,.7)]  backdrop-blur-sm">
        <div className=" relative  flex h-[65vh] flex-col items-center justify-center gap-4 bg-white px-16 ">
          <button
            onClick={() => {
              if (!errors.price) dispatch(closeModal());
            }}
            className="absolute right-8 top-4 ml-auto cursor-pointer text-2xl "
          >
            X
          </button>
          <ul id="ul" className="  flex max-w-full gap-8   ">
            <Card
              color={"outline-orange-300"}
              isPicked={arcadePrice == localValue}
              index={1}
              title={"Arcade"}
              cardTitle={"Arcade"}
              icon={"arcade"}
              value={arcadePrice}
              price={9}
              handleOnClick={(e) => selectValue(e)}
              yearlyPrice={90}
              offer="2 months free"
            />
            <Card
              color={"outline-red-400"}
              isPicked={advancedPrice == localValue}
              value={advancedPrice}
              index={2}
              title={"Advanced"}
              cardTitle={"Advanced"}
              icon={"advanced"}
              price={12}
              handleOnClick={(e) => selectValue(e)}
              yearlyPrice={120}
              offer="2 months free"
            />
            <Card
              color={"outline-blue-500"}
              isPicked={ProPrice == localValue}
              value={ProPrice}
              title={"Pro"}
              index={3}
              cardTitle={"Pro"}
              icon={"pro"}
              price={15}
              handleOnClick={(e) => selectValue(e)}
              yearlyPrice={150}
              offer="2 months free"
            />
          </ul>

          <Toggle
            handleToggle={(e) => {
              selectChoice(e);
            }}
          />

          {errors?.price && <ErrorMessage>{errors.price}</ErrorMessage>}
        </div>
      </section>
    </div>
  );
}

export default ChangePlanModal;
