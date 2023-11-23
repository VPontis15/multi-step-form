import NavStepsUi from "./NavStepsUi";

function Navigation() {
  return (
    <div className="flex h-full max-w-full flex-col  gap-12  rounded-lg bg-steps-bg  bg-cover bg-center bg-no-repeat   p-20">
      <NavStepsUi number={1} title={"Step 1"} description={"Your Info"} />
      <NavStepsUi number={2} title={"Step 2"} description={"Select Plan"} />
      <NavStepsUi number={3} title={"Step 3"} description={"Add-ons"} />
      <NavStepsUi number={4} title={"Step 4"} description={"Summary"} />
    </div>
  );
}

export default Navigation;
