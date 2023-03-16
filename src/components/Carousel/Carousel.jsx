import img1 from "../../assets/gallery/gallery1.jpg";
import img2 from "../../assets/gallery/gallery2.jpg";
import img3 from "../../assets/gallery/gallery3.jpg";
export function Carousel() {
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src={img1}
            className="d-block w-100 vh-100 object-fit-fill img-fluid"
            alt="img-slider"
          />
        </div>
        <div className="carousel-item">
          <img
            src={img2}
            className="d-block w-100 vh-100 object-fit-fill img-fluid"
            alt="img-slider"
          />
        </div>
        <div className="carousel-item">
          <img
            src={img3}
            className="d-block w-100 vh-100 object-fit-fill img-fluid"
            alt="img-slider"
          />
        </div>
      </div>
    </div>
  );
}
