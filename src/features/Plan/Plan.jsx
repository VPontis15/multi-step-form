import Form from "../ui/Form";
import Navigation from "../ui/Navigation";
import Toggle from "../ui/Toggle";
import Card from "./Card";

function Plan() {
  return (
    <div className="grid  grid-cols-[350px_650px]  rounded-lg bg-white px-6 py-4">
      <Navigation />
      <Form
        formTitle={"Select your plan"}
        description={"You have the option of monthly or yearly billing"}
        step={2}
      >
        <ul className="flex flex-wrap justify-between">
          <Card index={1} cardTitle={"Arcade"} icon={"arcade"} price={9} />
          <Card index={2} cardTitle={"Advanced"} icon={"advanced"} price={12} />
          <Card index={3} cardTitle={"Pro"} icon={"pro"} price={15} />
        </ul>
        <Toggle />
      </Form>
    </div>
  );
}

export default Plan;
