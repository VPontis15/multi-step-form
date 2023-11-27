import Input from "./Input";
import Form from "../ui/Form";
import FormRow from "./FormRow";
import Navigation from "../ui/Navigation";
import { useDispatch, useSelector } from "react-redux";
import {
  addError,
  clearError,
  getErrors,
  getErrorsState,
  getStep,
} from "../globalSlice";
import { InputMask } from "@react-input/mask";
import {
  getEmail,
  getName,
  getPhone,
  saveEmail,
  saveName,
  savePhone,
} from "./UserInfoSlice";
import { useEffect, useState } from "react";
import { validate } from "react-email-validator";
import ErrorMessage from "../ui/ErrorMessage";

function InfoForm() {
  const step = useSelector(getStep);
  const name = useSelector(getName);
  const email = useSelector(getEmail);
  const phone = useSelector(getPhone);
  const errors = useSelector(getErrors);
  const showErrors = useSelector(getErrorsState);
  const [localName, setLocalName] = useState(name);
  const [localEmail, setLocalEmail] = useState(email);
  const [localPhone, setLocalPhone] = useState(phone);
  const dispatch = useDispatch();

  useEffect(() => {
    validateFields(localName, localEmail, localPhone);
  }, []);

  function validateFields(name, email, phone) {
    const namePattern = /^[a-zA-Z]+(?:[' -][a-zA-Z]+)*$/;
    const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const phonePattern =
      /^(\+\d{1,2}\s?)?(\d{3}|\(\d{3}\))[-\s]?\d{3}[-\s]?\d{4}$/;

    const isValidName = namePattern.test(name);
    const isValidEmail = emailPattern.test(email);
    const isValidPhone = phonePattern.test(phone);

    if (!name || !isValidName) {
      dispatch(
        addError({ type: "name", message: "Please enter a valid name" }),
      );
    } else {
      dispatch(clearError("name"));
    }

    if (!email || !isValidEmail) {
      dispatch(
        addError({ type: "email", message: "Please enter a valid email" }),
      );
    } else {
      dispatch(clearError("email"));
    }

    if (!phone || !isValidPhone) {
      dispatch(
        addError({ type: "phone", message: "Please enter a valid phone" }),
      );
    } else {
      dispatch(clearError("phone"));
    }
  }

  function handleLocalName(e) {
    const newName = e.target.value;
    setLocalName(newName);
    dispatch(saveName(newName));
    validateFields(newName, localEmail, localPhone);
  }

  function handleLocalEmail(e) {
    const newEmail = e.target.value;
    setLocalEmail(newEmail);
    dispatch(saveEmail(newEmail));
    validateFields(localName, newEmail, localPhone);
  }

  function handleLocalPhone(e) {
    const newPhone = e.target.value;
    setLocalPhone(newPhone);
    dispatch(savePhone(newPhone));
    validateFields(localName, localEmail, newPhone);
  }

  return (
    <div className="grid  grid-cols-[350px_650px] rounded-lg bg-white px-6 py-4">
      <Navigation />
      <Form
        formTitle={"Personal Info"}
        description={
          "Please provide your name, email address, and phone number"
        }
        step={1}
      >
        <FormRow label={"Name"}>
          <Input
            type={"text"}
            name={"name"}
            placeholder={"e.g Stephen King"}
            id={"name"}
            handleOnChange={handleLocalName}
            value={localName}
          />
        </FormRow>{" "}
        {errors?.name && showErrors && (
          <ErrorMessage> {errors.name}</ErrorMessage>
        )}
        <FormRow label={"Email"}>
          <Input
            type={"email"}
            name={"email"}
            placeholder={"Email Address"}
            id={"email"}
            handleOnChange={handleLocalEmail}
            value={localEmail}
          />
        </FormRow>
        {errors?.email && showErrors && (
          <ErrorMessage>{errors.email}</ErrorMessage>
        )}
        <FormRow label={"Phone Number"}>
          <Input
            type={"text"}
            name={"phone"}
            placeholder={"e.g +1234 567 890"}
            id={"phone"}
            minValue={10}
            maxValue={10}
            value={localPhone}
            handleOnChange={handleLocalPhone}
          />
        </FormRow>
        {errors?.phone && showErrors && (
          <ErrorMessage>{errors.phone}</ErrorMessage>
        )}
      </Form>
    </div>
  );
}

export default InfoForm;
