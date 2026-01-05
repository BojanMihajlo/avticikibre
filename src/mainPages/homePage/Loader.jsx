import "./Loader.css";

export default function Loader() {
  return (
    <div className="loaderWrapper">
      <div className="carImg">
        <img
          src="https://i.ibb.co/cvk4zQn/car-loader.gif"
          alt="car-loader"
        />
      </div>
      <div className="loader"></div>
    </div>
  );
}
