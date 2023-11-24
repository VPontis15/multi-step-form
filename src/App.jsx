import { useSelector } from "react-redux";
import Addons from "./features/AddOns/Addons";
import Plan from "./features/Plan/Plan";
import Summary from "./features/Summary/Summary";
import InfoForm from "./features/UserInfo/InfoForm";
import { getStep } from "./features/globalSlice";

function App() {
  const step = useSelector(getStep);
  return (
    <>
      {step === 1 && (
        <section className="grid min-h-screen items-center justify-center bg-body">
          <InfoForm />
        </section>
      )}
      {step === 2 && (
        <section className="grid min-h-screen items-center justify-center bg-body">
          <Plan />
        </section>
      )}
      {step === 3 && (
        <section className="grid min-h-screen items-center justify-center bg-body">
          <Addons />
        </section>
      )}
      {step === 4 && (
        <section className="grid min-h-screen items-center justify-center bg-body">
          <Summary />
        </section>
      )}
    </>
  );
}

export default App;
