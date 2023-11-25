import { useSelector } from "react-redux";
import { getChoice } from "./PlanSlice";

function Card({
  color,
  icon,
  cardTitle,
  price,
  index,
  handleOnClick,
  isPicked = "",
  value = "",
  yearlyPrice = "",
  offer = "",
}) {
  const choice = useSelector(getChoice);

  return (
    <li
      onClick={handleOnClick}
      tabIndex={index}
      data-value={value}
      data-title={cardTitle}
      className={`border-text-price w-[150px] cursor-pointer rounded-md border px-4 py-6 ${
        isPicked ? `outline ${color} focus:outline focus:${color}` : ""
      }  focus:outline ${color}`}
    >
      <img className="mb-10" src={`../src/assets/images/icon-${icon}.svg`} />
      <article className="">
        <h3 className="text-lg font-bold text-form-label">{cardTitle}</h3>
        {choice === "yearly" ? (
          <>
            <span className="block text-price ">{`${yearlyPrice}/yr`}</span>
            <span className=" text-form-label">{offer}</span>
          </>
        ) : (
          <span className="text-price ">{`$${price}/mo`}</span>
        )}
      </article>
    </li>
  );
}

export default Card;
