import Form from "../ui/Form";
import Navigation from "../ui/Navigation";
import Option from "../ui/Option";

function Addons() {
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
          />
          <Option
            optionTitle={"Larger storage"}
            description={"Extra 1TB of cloud save"}
            price={2}
          />
          <Option
            optionTitle={"Customizable profile"}
            description={"Custom them on your profile"}
            price={2}
          />
        </ul>
      </Form>
    </div>
  );
}

export default Addons;
