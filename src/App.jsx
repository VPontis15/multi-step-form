import Addons from "./features/AddOns/Addons";
import Plan from "./features/Plan/Plan";
import InfoForm from "./features/UserInfo/InfoForm";

function App() {
  return (
    // <section className="grid min-h-screen items-center justify-center bg-body">
    //   <InfoForm />
    // </section>
    // <section className="grid min-h-screen items-center justify-center bg-body">
    //   <Plan />
    // </section>
    <section className="grid min-h-screen items-center justify-center bg-body">
      <Addons />
    </section>
  );
}

export default App;
