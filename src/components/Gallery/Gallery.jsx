import gallery1 from "../../assets/gallery/gallery1.jpg";
import gallery2 from "../../assets/gallery/gallery2.jpg";
import gallery3 from "../../assets/gallery/gallery3.jpg";
import gallery4 from "../../assets/gallery/gallery4.jpg";
import gallery5 from "../../assets/gallery/gallery5.jpg";
import gallery6 from "../../assets/gallery/gallery6.jpg";
import "./Gallery.scss";
export function Gallery() {
  const images = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6];
  return (
    <section className="gallery_container">
      <h5>INSTAGRAM</h5>
      <h3>#ESPUFI</h3>
      <article className="gallery">
        {images.map((img) => (
          <img src={img} key={img} alt="gallery images" />
        ))}
      </article>
    </section>
  );
}
