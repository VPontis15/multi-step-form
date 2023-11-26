function Option({ optionTitle, description, price, handleChange, checked }) {
  return (
    <li
      className={` ${
        checked ? "bg-body " : ""
      }flex items-center justify-between gap-6 rounded-lg border border-purple-900 p-4`}
    >
      <input
        className=" scale-[1.4]  accent-purple-700 checked:border-purple-700 checked:bg-purple-700"
        type="checkbox"
        onChange={handleChange}
        data-title={optionTitle}
        data-value={price}
        checked={checked}
      />
      <div className="flex-1 ">
        <h3 className=" font-bold text-form-label">{optionTitle}</h3>
        <p className="text-price ">{description}</p>
      </div>
      <span className="font-semibold text-option-title">+{price}/month</span>
    </li>
  );
}

export default Option;
