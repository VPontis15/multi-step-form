function Form({
  formTitle,
  description,
  step,
  children,
  nextStep,
  submit,
  previousStep,
}) {
  return (
    <div className="space-y-24  px-20 py-12">
      <header>
        <h2 className="text-4xl">{formTitle}</h2>
        <p>{description}</p>
      </header>
      <section className=" grid gap-12">{children}</section>
      <div className="flex justify-between">
        {step <= 4 && step > 1 && (
          <button className="text-step-title" onClick={() => previousStep}>
            Go Back
          </button>
        )}
        {step <= 4 ? (
          <button
            className="bg-btn-next ml-auto rounded-lg px-6 py-3 text-white "
            onClick={() => nextStep}
          >
            Next Step
          </button>
        ) : (
          <button className="ml-auto text-white" onClick={() => submit}>
            Confirm
          </button>
        )}
      </div>
    </div>
  );
}

export default Form;
