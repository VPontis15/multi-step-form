import Input from "./Input";
import Form from "../ui/Form";
import FormRow from "./FormRow";
import Navigation from "../ui/Navigation";
import { useDispatch, useSelector } from "react-redux";
import { getStep } from "../globalSlice";

function InfoForm() {
  const step = useSelector(getStep);

  const dispatch = useDispatch();
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
            value=""
          />
        </FormRow>
        <FormRow label={"Email"}>
          <Input
            type={"email"}
            name={"email"}
            placeholder={"Email Address"}
            id={"email"}
            value=""
          />
        </FormRow>
        <FormRow label={"Phone Number"}>
          <Input
            type={"text"}
            name={"phone"}
            placeholder={"e.g +1234 567 890"}
            id={"phone"}
            value=""
          />
        </FormRow>
      </Form>
    </div>
  );
}

export default InfoForm;
