import Form from "../ui/Form";
import Navigation from "../ui/Navigation";
import SummaryItem from "./SummaryItem";

function Summary() {
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
            fontBold="bold"
            titleColor="form-label"
            bgColor="body"
            title={"Arcade(Monthly)"}
            price={9}
          >
            <button className="underline" onClick={() => {}}>
              Change
            </button>
          </SummaryItem>
          <SummaryItem
            bgColor="body"
            title={"Online service"}
            price={1}
          ></SummaryItem>
          <SummaryItem
            bgColor="body"
            title={"Larger storage"}
            price={2}
          ></SummaryItem>
          <SummaryItem
            title={"Total (per month)"}
            totalPrice={12}
          ></SummaryItem>
        </ul>
      </Form>
    </div>
  );
}

export default Summary;
