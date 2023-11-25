import { InputMask } from "@react-input/mask";

function Input({
  type,
  placeholder = "",
  value = "",
  id,
  name = "",
  handleOnChange,
  maxValue = "",
  minValue = "",

  mask = "",
}) {
  return (
    <input
      className=" h-12 w-full max-w-full rounded-md border border-stone-300 pl-4 "
      type={type}
      placeholder={placeholder}
      id={id}
      required={true}
      name={name}
      onChange={handleOnChange}
      minLength={minValue}
      maxLength={maxValue}
      value={value}
      onBlur={handleOnChange}
    />
  );
}

export default Input;
