import Form from "../ui/Form";
import Navigation from "../ui/Navigation";
import Card from "./Card";

function Plan() {
  return (
    <div className="grid  grid-cols-[350px_600px] rounded-lg bg-white px-6 py-4">
      <Navigation />
      <Form
        formTitle={"Select your plan"}
        description={"You have the option of monthly or yearly billing"}
        step={2}
      >
        <ul>
          <Card icon={"arcade"} price={9} />
          <Card icon={"advanced"} price={12} />
          <Card icon={"pro"} price={15} />
        </ul>
      </Form>
    </div>
  );
}

export default Plan;
