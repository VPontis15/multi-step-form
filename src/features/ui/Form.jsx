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
    <div className="space-y-14  px-20 py-12">
      <header>
        <h2 className="mb-2 text-4xl font-bold text-form-label">{formTitle}</h2>
        <p>{description}</p>
      </header>
      <section className=" grid gap-12">{children}</section>
      <div className="flex justify-between">
        {step <= 4 && step > 1 && (
          <button
            className="text-price font-semibold"
            onClick={() => previousStep}
          >
            Go Back
          </button>
        )}
        {step < 4 ? (
          <button
            className="ml-auto rounded-lg bg-btn-next px-6 py-3 text-white "
            onClick={() => nextStep}
          >
            Next Step
          </button>
        ) : (
          <button
            className="bg-btn-confirm ml-auto rounded-lg px-6 py-3 text-white"
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
