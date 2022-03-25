import "./Filter.css";
import { useFilter } from "./../../context/";

const Filter = () => {
  const { state, dispatch } = useFilter();
  const {
    sortBy,
    healthy,
    fastFood,
    indianFood,
    desserts,
    bakery,
    juices,
    priceRange,
  } = state;
  return (
    <aside className="filter-container">
      <div className="filter-heading">
        <h2 className="main-heading">Filters</h2>
        <button
          className="filter-clear-btn"
          onClick={() => dispatch({ type: "CLEAR_FILTER", payload: {} })}
        >
          Clear
        </button>
      </div>

      <div className="filter-type">
        <h3 className="filter-type-heading">Price</h3>
        <div className="filter-type-container">
          <label htmlFor="cost-slider">₹0 - ₹{priceRange}</label>
          <input
            type="range"
            id="cost-slider"
            min="0"
            max="1000"
            value={priceRange}
            onChange={(event) =>
              dispatch({
                type: "PRICE_RANGE",
                payload: { priceRange: event.target.value },
              })
            }
          />
        </div>
      </div>

      <div className="filter-type">
        <h3 className="filter-type-heading">Category</h3>
        <div className="filter-type-container">
          <input
            type="checkbox"
            id="healthy"
            checked={healthy}
            onChange={(event) =>
              event.target.checked
                ? dispatch({
                    type: "HEALTHY",
                    payload: { healthy: true },
                  })
                : dispatch({
                    type: "HEALTHY",
                    payload: { healthy: false },
                  })
            }
          />
          <label htmlFor="healthy">Healthy</label>
        </div>
        <div className="filter-type-container">
          <input
            type="checkbox"
            id="fast-food"
            checked={fastFood}
            onChange={(event) =>
              event.target.checked
                ? dispatch({
                    type: "FAST_FOOD",
                    payload: { fastFood: true },
                  })
                : dispatch({
                    type: "FAST_FOOD",
                    payload: { fastFood: false },
                  })
            }
          />
          <label htmlFor="fast-food">Fast Food</label>
        </div>
        <div className="filter-type-container">
          <input
            type="checkbox"
            id="indian-food"
            checked={indianFood}
            onChange={(event) =>
              event.target.checked
                ? dispatch({
                    type: "INDIAN_FOOD",
                    payload: { indianFood: true },
                  })
                : dispatch({
                    type: "INDIAN_FOOD",
                    payload: { indianFood: false },
                  })
            }
          />
          <label htmlFor="indian-food">Indian Food</label>
        </div>
        <div className="filter-type-container">
          <input
            type="checkbox"
            id="desserts"
            checked={desserts}
            onChange={(event) =>
              event.target.checked
                ? dispatch({
                    type: "DESSERTS",
                    payload: { desserts: true },
                  })
                : dispatch({
                    type: "DESSERTS",
                    payload: { desserts: false },
                  })
            }
          />
          <label htmlFor="desserts">Desserts</label>
        </div>
        <div className="filter-type-container">
          <input
            type="checkbox"
            id="bakery"
            checked={bakery}
            onChange={(event) =>
              event.target.checked
                ? dispatch({
                    type: "BAKERY",
                    payload: { bakery: true },
                  })
                : dispatch({
                    type: "BAKERY",
                    payload: { bakery: false },
                  })
            }
          />
          <label htmlFor="bakery">Bakery</label>
        </div>
        <div className="filter-type-container">
          <input
            type="checkbox"
            id="juices"
            checked={juices}
            onChange={(event) =>
              event.target.checked
                ? dispatch({
                    type: "JUICES",
                    payload: { juices: true },
                  })
                : dispatch({
                    type: "JUICES",
                    payload: { juices: false },
                  })
            }
          />
          <label htmlFor="juices">Juices</label>
        </div>
      </div>

      <div className="filter-type">
        <h3 className="filter-type-heading">Sort by</h3>
        <div className="filter-type-container">
          <input
            type="radio"
            id="low-to-high"
            name="sort-by"
            checked={sortBy === "LOW_TO_HIGH"}
            onChange={() =>
              dispatch({
                type: "LOW_TO_HIGH",
              })
            }
          />
          <label htmlFor="low-to-high">Price - Low to High</label>
        </div>
        <div className="filter-type-container">
          <input
            type="radio"
            id="high-to-low"
            name="sort-by"
            checked={sortBy === "HIGH_TO_LOW"}
            onChange={() =>
              dispatch({
                type: "HIGH_TO_LOW",
              })
            }
          />
          <label htmlFor="high-to-low">Price - High to Low</label>
        </div>
      </div>

      <div className="filter-type">
        <h3 className="filter-type-heading">Ratings</h3>
        <div className="filter-type-container">
          <input type="radio" name="star-rating" />
          <label htmlFor="star-four">4⭐ and above</label>
        </div>
        <div className="filter-type-container">
          <input type="radio" name="star-rating" />
          <label htmlFor="star-three">3⭐ and above</label>
        </div>
        <div className="filter-type-container">
          <input type="radio" name="star-rating" />
          <label htmlFor="star-two">2⭐ and above</label>
        </div>
        <div className="filter-type-container">
          <input type="radio" name="star-rating" />
          <label htmlFor="star-one">1⭐ and above</label>
        </div>
      </div>
    </aside>
  );
};

export { Filter };
