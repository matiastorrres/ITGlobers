import "./ButtonSection.scss";
export function ButtonSection({ title, img, description }) {
  return (
    <button className="buttonSection__container">
      <img src={img} alt={description} />
      <h3>{title}</h3>
    </button>
  );
}
