function Card({ icon, cardTitle, price }) {
  return (
    <li>
      <img src={`../src/assets/images/icon-${icon}.svg`} />
      <article>
        <h3>{cardTitle}</h3>
        <span>{`$${price}/mo`}</span>
      </article>
    </li>
  );
}

export default Card;
