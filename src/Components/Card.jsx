import data from "../data";

export default function Card(props) {
  return (
    <div className="card-container">
      <div className="card">
        <img className="card--img" src={props.img} alt={props.title} />

        <div className="card--description">
          <div className="location">
            <p className="country">📍{props.pais}</p>{" "}
            <a href={props.location} target="_blank">
              Ver en google maps
            </a>
          </div>
          <h2>{props.title}</h2>
          <p>{props.description}</p>
        </div>
      </div>
      <hr />
    </div>
  );
}
