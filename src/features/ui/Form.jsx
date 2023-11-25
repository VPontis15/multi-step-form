import { useDispatch, useSelector } from "react-redux";
import { decreaseStep, getErrors, getStep, increaseStep } from "../globalSlice";

function Form({
  formTitle,
  description,

  children,
  nextStep,
  submit,
  previousStep,
}) {
  const step = useSelector(getStep);
  const errors = useSelector(getErrors);

  const dispatch = useDispatch();
  return (
    <div className="space-y-14  px-20 py-12">
      <header>
        <h2 className="mb-2 text-4xl font-bold text-form-label">{formTitle}</h2>
        <p>{description}</p>
      </header>
      <section className=" grid gap-12">{children}</section>
      <div className="flex justify-between">
        {step <= 4 && step > 1 && (
          <button
            className="font-semibold text-price"
            onClick={() => dispatch(decreaseStep())}
          >
            Go Back
          </button>
        )}
        {step < 4 ? (
          <button
            className="ml-auto rounded-lg bg-btn-next px-6 py-3 text-white "
            onClick={() => dispatch(increaseStep())}
            type="submit"
          >
            Next Step
          </button>
        ) : (
          <button
            className="ml-auto rounded-lg bg-btn-confirm px-6 py-3 text-white"
            onClick={() => submit}
          >
            Confirm
          </button>
        )}
      </div>
    </div>
  );
}

export default Form;
