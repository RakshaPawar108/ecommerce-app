import { Link } from "react-router-dom";
import { notFoundImg } from "../../assets/images";
import "./NotFound.css";

export const NotFound = () => {
  return (
    <div className="notfound-wrapper">
      <h1 className="not-found-title">Something Went Wrong</h1>
      <img src={notFoundImg} alt="404" />
      <Link to="/">
        <button className="button home-btn">Go Home</button>
      </Link>
    </div>
  );
};
