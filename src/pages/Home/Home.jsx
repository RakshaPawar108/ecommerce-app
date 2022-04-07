import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  dessertImg,
  healthyImg,
  meatSkewerImg,
  pastaImg,
} from "../../assets/images";
import "./Home.css";
import { useFilter } from "../../context";

export const Home = () => {
  const [categories, setCategories] = useState([]);
  const { dispatch } = useFilter();

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("/api/categories");
        if (response.status) {
          setCategories(response.data.categories);
        } else {
          console.error("ERROR");
        }
      } catch (error) {
        console.error("ERROR: ", error);
      }
    })();

    dispatch({ type: "CLEAR_FILTER", payload: {} });
  }, [categories, dispatch]);

  const indianDesc = categories.find((obj) => {
    return obj.categoryName === "indian-food";
  });

  const healthyDesc = categories.find((obj) => {
    return obj.categoryName === "healthy";
  });
  console.log(healthyDesc);

  const dessertDesc = categories.find((obj) => {
    return obj.categoryName === "desserts";
  });

  const fastFoodDesc = categories.find((obj) => {
    return obj.categoryName === "fast-food";
  });

  return (
    <main className="home-wrapper">
      <section className="hero overlay">
        <div className="page-intro">
          <article>
            <h3 className="intro-heading">Good Food, Good Mood</h3>
            <p className="intro-sub-heading">Save 60% on your first order</p>
            <Link to="/products">
              <button className="button btn-outlined intro-btn">
                Order Now
              </button>
            </Link>
          </article>
        </div>
      </section>

      <section className="intro-blocks">
        <ul className="blocks">
          <li className="block">
            <article>
              <div>
                <i className="fas fa-money-bill-alt"></i>
              </div>

              <h6 className="block-heading">No Minimum Order</h6>
              <p className="block-para">
                Order for yourself or for your group with no restrictions on
                order value.
              </p>
            </article>
          </li>
          <li className="block">
            <article>
              <div>
                <i className="fas fa-truck-loading"></i>
              </div>
              <h6 className="block-heading">Express Delivery</h6>
              <p className="block-para">
                Get your food delivered fresh and on time.
              </p>
            </article>
          </li>
          <li className="block">
            <article>
              <div>
                <i className="fas fa-map-marked"></i>
              </div>
              <h6 className="block-heading">Track Order</h6>
              <p className="block-para">
                Know where your order is at all times!
              </p>
            </article>
          </li>
          <li className="block">
            <article>
              <div>
                <i className="fas fa-cash-register"></i>
              </div>
              <h6 className="block-heading">Best Deals</h6>
              <p className="block-para">
                Get best deals and offers on your favourite food items.
              </p>
            </article>
          </li>
        </ul>
      </section>

      <h1 className="categories-heading">Featured Categories</h1>
      <section className="feat-categories">
        <Link to="/products">
          <div
            className="category"
            onClick={() =>
              dispatch({
                type: "INDIAN_FOOD",
                payload: { indianFood: true },
              })
            }
          >
            <div className="category-image">
              <img src={meatSkewerImg} alt="category" />
            </div>
            <div className="category-content">
              <div className="content-shown">
                <h4>Indian Food</h4>
                <p>Delicacies of India</p>
              </div>

              <div className="content-hidden">
                {indianDesc && <p>{indianDesc.description}</p>}
              </div>
            </div>
          </div>
        </Link>

        <Link to="/products">
          <div
            className="category"
            onClick={() =>
              dispatch({
                type: "HEALTHY",
                payload: { healthy: true },
              })
            }
          >
            <div className="category-image">
              <img src={healthyImg} alt="category" />
            </div>
            <div className="category-content">
              <div className="content-shown">
                <h4>Healthy</h4>
                <p>For the fitness lovers</p>
              </div>

              <div className="content-hidden">
                {healthyDesc && <p>{healthyDesc.description}</p>}
              </div>
            </div>
          </div>
        </Link>

        <Link to="/products">
          <div
            className="category"
            onClick={() =>
              dispatch({
                type: "DESSERTS",
                payload: { desserts: true },
              })
            }
          >
            <div className="category-image">
              <img src={dessertImg} alt="category" />
            </div>
            <div className="category-content">
              <div className="content-shown">
                <h4>Desserts</h4>
                <p>For the ones with a sweet tooth</p>
              </div>

              <div className="content-hidden">
                {dessertDesc && <p>{dessertDesc.description}</p>}
              </div>
            </div>
          </div>
        </Link>

        <Link to="/products">
          <div
            className="category"
            onClick={() =>
              dispatch({
                type: "FAST_FOOD",
                payload: { fastFood: true },
              })
            }
          >
            <div className="category-image">
              <img src={pastaImg} alt="category" />
            </div>
            <div className="category-content">
              <div className="content-shown">
                <h4>Fast Food</h4>
                <p>For the cheat days</p>
              </div>

              <div className="content-hidden">
                {fastFoodDesc && <p>{fastFoodDesc.description}</p>}
              </div>
            </div>
          </div>
        </Link>
      </section>
    </main>
  );
};
