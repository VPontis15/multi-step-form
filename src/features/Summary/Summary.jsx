import { useDispatch, useSelector } from "react-redux";
import Form from "../ui/Form";
import Navigation from "../ui/Navigation";
import SummaryItem from "./SummaryItem";
import {
  getChoice,
  getPrice,
  getSumOfPrices,
  getTitle,
} from "../Plan/PlanSlice";
import { getAddons } from "../AddOns/AddonsSlice";
import { useState } from "react";
import ChangePlanModal from "./ChangePlanModal";
import { getIsOpenModal, openModal } from "../globalSlice";

function Summary() {
  const openModalWindow = useSelector(getIsOpenModal);
  const choice = useSelector(getChoice);
  const title = useSelector(getTitle);
  const price = useSelector(getPrice);
  const sumOfPrices = useSelector(getSumOfPrices);
  const totalSum = sumOfPrices + price;
  const addons = useSelector(getAddons);
  const dispatch = useDispatch();

  return (
    <div className="grid  grid-cols-[350px_650px] rounded-lg bg-white px-6 py-4">
      <Navigation />
      <Form
        formTitle={"Finishing up"}
        description={"Double-check everything looks OK before confirming"}
        step={4}
      >
        <ul className="space-y-2">
          <SummaryItem
            title={`${title} (${choice})`}
            price={price}
            fontBold="bold"
            bgColor="body"
            titleColor="form-label"
          >
            <button className="underline" onClick={() => dispatch(openModal())}>
              Change
            </button>{" "}
          </SummaryItem>
          {addons.map((addon) => {
            return (
              <SummaryItem
                key={addon.title}
                price={addon.price}
                title={addon.title}
                titleColor="slate-300"
                bgColor="body"
                totalPrice={10}
              />
            );
          })}
          <SummaryItem
            title={`Total (per ${choice === "monthly" ? "month" : "year"})`}
            price={totalSum}
            fontBold="regular"
            titleColor="form-label"
          />
        </ul>
      </Form>
      {openModalWindow && <ChangePlanModal />}
    </div>
  );
}

export default Summary;
