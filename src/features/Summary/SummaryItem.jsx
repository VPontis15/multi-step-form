function SummaryItem({
  title,
  price,
  bgColor = "",
  titleColor = "hsl(231, 11%, 63%",
  totalPrice = 0,
  fontBold = "regular",
  children,
}) {
  return (
    <li className={`flex justify-between bg-${bgColor} rounded-md px-4 py-6`}>
      <div>
        <h3 className={`text-[${titleColor}] font-${fontBold}`}>{title}</h3>
        {children}
      </div>
      <span
        className={`font-${fontBold} ${
          price ? "" : "text-option-title font-bold"
        }`}
      >
        ${price || totalPrice}/month
      </span>
    </li>
  );
}

export default SummaryItem;
