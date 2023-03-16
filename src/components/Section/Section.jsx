import "./Section.scss";
export function Section({
  img,
  imgDescription,
  minImg,
  minImgDescription,
  reverse,
  nameSection,
}) {
  const className = reverse
    ? "section__container-reverse section__container"
    : " section__container";
  return (
    <section className={className}>
      <article>
        <img src={img} alt={imgDescription} className="section__productimg" />
      </article>
      <article className="section__productDescription">
        <img src={minImg} alt={minImgDescription} />
        <h3>{nameSection}</h3>
        <p>{minImgDescription}</p>
        <button> &gt; ver mas</button>
      </article>
    </section>
  );
}
