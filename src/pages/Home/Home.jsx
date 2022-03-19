import { Link } from "react-router-dom";
import {
  dessertImg,
  healthyImg,
  meatSkewerImg,
  pastaImg,
} from "../../assets/images";
import "./Home.css";

export const Home = () => {
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
        <div className="category">
          <div className="category-image">
            <img src={meatSkewerImg} alt="category" />
          </div>
          <div className="category-content">
            <div className="content-shown">
              <h4>Indian Food</h4>
              <p>Delicacies of India</p>
            </div>

            <div className="content-hidden">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Incidunt voluptate pariatur id adipisci quidem nemo, quia dolore
                excepturi quisquam consectetur!
              </p>
            </div>
          </div>
        </div>
        <div className="category">
          <div className="category-image">
            <img src={healthyImg} alt="category" />
          </div>
          <div className="category-content">
            <div className="content-shown">
              <h4>Healthy</h4>
              <p>For the fitness lovers</p>
            </div>

            <div className="content-hidden">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Incidunt voluptate pariatur id adipisci quidem nemo, quia dolore
                excepturi quisquam consectetur!
              </p>
            </div>
          </div>
        </div>
        <div className="category">
          <div className="category-image">
            <img src={dessertImg} alt="category" />
          </div>
          <div className="category-content">
            <div className="content-shown">
              <h4>Desserts</h4>
              <p>For the ones with a sweet tooth</p>
            </div>

            <div className="content-hidden">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Incidunt voluptate pariatur id adipisci quidem nemo, quia dolore
                excepturi quisquam consectetur!
              </p>
            </div>
          </div>
        </div>
        <div className="category">
          <div className="category-image">
            <img src={pastaImg} alt="category" />
          </div>
          <div className="category-content">
            <div className="content-shown">
              <h4>Fast Food</h4>
              <p>For the cheat days</p>
            </div>

            <div className="content-hidden">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Incidunt voluptate pariatur id adipisci quidem nemo, quia dolore
                excepturi quisquam consectetur!
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
