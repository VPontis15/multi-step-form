import { useEffect, useState } from "react";
import Form from "../ui/Form";
import Navigation from "../ui/Navigation";
import ErrorMessage from "../ui/ErrorMessage";
import Option from "../ui/Option";
import { useDispatch, useSelector } from "react-redux";
import {
  selectAddon,
  getAddon,
  getAddons,
  addAddon,
  removeSelectedAddon,
} from "./AddonsSlice";
import { addError, clearError, getErrors } from "../globalSlice";

function Addons() {
  const errors = useSelector(getErrors);
  const addons = useSelector(getAddons);
  const addon = useSelector(getAddon);

  const [localAddon, setLocalAddon] = useState(addon);
  const [localAddons, setLocalAddons] = useState(addons);
  const dispatch = useDispatch();

  function handleIsChecked(e) {
    const addonTitle = e.target.getAttribute("data-title");
    const addonPrice = e.target.getAttribute("data-value");

    if (e.target.checked) {
      const updatedLocalAddon = {
        title: addonTitle,
        price: addonPrice,
        isChecked: true,
      };
      setLocalAddon(updatedLocalAddon);
      setLocalAddons((arr) => [...arr, updatedLocalAddon]);
      dispatch(selectAddon({ title: addonTitle, price: Number(addonPrice) }));
      dispatch(addAddon(addon));
    } else {
      dispatch(removeSelectedAddon(addonTitle));

      setLocalAddons((arr) =>
        arr.filter((addon) => addon.title !== addonTitle),
      );

      if (localAddon.title === addonTitle) {
        setLocalAddon({
          title: "",
          price: "",
          isChecked: false,
        });
      }
    }
  }

  return (
    <div className="grid  grid-cols-[350px_650px] rounded-lg bg-white px-6 py-4">
      <Navigation />
      <Form
        description={"Add-ons help enchance your gaming experience"}
        formTitle={"Pick add-ons"}
        step={3}
      >
        <ul className="space-y-6">
          <Option
            optionTitle={"Online service"}
            description={"Access to multiplayer games"}
            price={1}
            handleChange={handleIsChecked}
            checked={
              !!localAddons.find((addon) => addon.title === "Online service")
            }
          />
          <Option
            optionTitle={"Larger storage"}
            description={"Extra 1TB of cloud save"}
            price={2}
            handleChange={handleIsChecked}
            checked={
              !!localAddons.find((addon) => addon.title === "Larger storage")
            }
          />
          <Option
            optionTitle={"Customizable profile"}
            description={"Custom them on your profile"}
            price={2}
            handleChange={handleIsChecked}
            checked={
              !!localAddons.find(
                (addon) => addon.title === "Customizable profile",
              )
            }
          />
        </ul>
        {errors.addon && <ErrorMessage>{errors.addon}</ErrorMessage>}
      </Form>
    </div>
  );
}

export default Addons;
