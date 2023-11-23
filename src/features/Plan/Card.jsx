function Card({ icon, cardTitle, price, index, value = "" }) {
  return (
    <li
      value={value}
      tabIndex={index}
      className="border-text-price w-[150px] rounded-md border px-4 py-6 focus:outline focus:outline-purple-700 "
    >
      <img className="mb-10" src={`../src/assets/images/icon-${icon}.svg`} />
      <article className="">
        <h3 className="text-lg font-bold text-form-label">{cardTitle}</h3>
        <span className="text-price ">{`$${price}/mo`}</span>
      </article>
    </li>
  );
}

export default Card;
