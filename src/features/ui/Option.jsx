function Option({ optionTitle, description, price, checked = false }) {
  return (
    <li className=" flex items-center justify-between gap-6 rounded-lg border border-purple-900 p-4 checked:bg-body">
      <input
        className=" scale-[1.4]  accent-purple-700 checked:border-purple-700 checked:bg-purple-700"
        type="checkbox"
        checked={checked}
      />
      <div className="flex-1 ">
        <h3 className=" font-bold text-form-label">{optionTitle}</h3>
        <p className="text-price ">{description}</p>
      </div>
      <span className="text-option-title font-semibold">+{price}/month</span>
    </li>
  );
}

export default Option;
