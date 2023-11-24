function Input({
  type,
  placeholder = "",
  value = "",
  id,
  name = "",
  handleOnChange,
}) {
  return (
    <input
      className=" h-12 w-full max-w-full rounded-md border border-stone-300 pl-4 "
      type={type}
      placeholder={placeholder}
      id={id}
      required={true}
      name={name}
      onChange={() => handleOnChange}
      maxLength={10}
      minLength={10}
      value={value}
    />
  );
}

export default Input;
