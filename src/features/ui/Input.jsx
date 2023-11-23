function Input({ type, placeholder = "", id, name = "", handleOnChange }) {
  return (
    <input
      className=" h-12 w-full max-w-full rounded-md border border-stone-300 pl-4 "
      type={type}
      placeholder={placeholder}
      id={id}
      name={name}
      onChange={() => handleOnChange}
    />
  );
}

export default Input;
