import { useEffect, useState } from "react";
import Form from "../ui/Form";
import Navigation from "../ui/Navigation";
import Toggle from "../ui/Toggle";
import Card from "./Card";
import { useDispatch, useSelector } from "react-redux";
import {
  addChoice,
  addPrice,
  addTitle,
  getChoice,
  getPrice,
  getTitle,
} from "./PlanSlice";
import {
  addError,
  clearError,
  getErrors,
  getErrorsState,
} from "../globalSlice";
import ErrorMessage from "../ui/ErrorMessage";

function Plan() {
  const price = useSelector(getPrice);
  const title = useSelector(getTitle);
  const choice = useSelector(getChoice);
  const errors = useSelector(getErrors);
  const showErrors = useSelector(getErrorsState);
  const [localValue, setLocalValue] = useState(price);
  const [localTitle, setLocalTitle] = useState(title);
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
    <div className="grid  grid-cols-[350px_650px]  rounded-lg bg-white px-6 py-4">
      <Navigation />
      <Form
        formTitle={"Select your plan"}
        description={"You have the option of monthly or yearly billing"}
        step={2}
      >
        <ul id="ul" className="flex flex-wrap justify-between">
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
        {errors?.price && showErrors && (
          <ErrorMessage>{errors.price}</ErrorMessage>
        )}
      </Form>
    </div>
  );
}

export default Plan;
