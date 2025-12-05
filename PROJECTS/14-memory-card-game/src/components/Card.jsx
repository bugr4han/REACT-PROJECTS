function Card({ item, id, handleClick }) {
  const itemClass = item.stat ? " active " + item.stat : "";

  return (
    <div className={"card-item" + itemClass} onClick={() => handleClick(id)}>
      <img src={item.img} alt={`card-${item.id}`} />
    </div>
  );
}

export default Card;
