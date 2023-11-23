import Input from "./Input";
import Form from "../ui/Form";
import FormRow from "./FormRow";
import Navigation from "../ui/Navigation";

function InfoForm() {
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
          />
        </FormRow>
        <FormRow label={"Email"}>
          <Input
            type={"email"}
            name={"email"}
            placeholder={"Email Address"}
            id={"email"}
          />
        </FormRow>
        <FormRow label={"Phone Number"}>
          <Input
            type={"text"}
            name={"phone"}
            placeholder={"e.g +1234 567 890"}
            id={"phone"}
          />
        </FormRow>
      </Form>
    </div>
  );
}

export default InfoForm;
