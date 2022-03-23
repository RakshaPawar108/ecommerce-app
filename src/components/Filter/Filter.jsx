import "./Filter.css";

const Filter = () => {
  return (
    <aside className="filter-container">
      <div className="filter-heading">
        <h2 className="main-heading">Filters</h2>
        <button className="filter-clear-btn">Clear</button>
      </div>

      <div className="filter-type">
        <h3 className="filter-type-heading">Price</h3>
        <div className="filter-type-container">
          <label htmlFor="cost-slider">Rs.0 - Rs.1000</label>
          <input type="range" id="cost-slider" min="0" max="1000" value="500" />
        </div>
      </div>

      <div className="filter-type">
        <h3 className="filter-type-heading">Category</h3>
        <div className="filter-type-container">
          <input type="checkbox" id="healthy" />
          <label htmlFor="healthy">Healthy</label>
        </div>
        <div className="filter-type-container">
          <input type="checkbox" id="fast-food" />
          <label htmlFor="fast-food">Fast Food</label>
        </div>
        <div className="filter-type-container">
          <input type="checkbox" id="indian-food" />
          <label htmlFor="indian-food">Indian Food</label>
        </div>
        <div className="filter-type-container">
          <input type="checkbox" id="desserts" />
          <label htmlFor="desserts">Desserts</label>
        </div>
        <div className="filter-type-container">
          <input type="checkbox" id="bakery" />
          <label htmlFor="bakery">Bakery</label>
        </div>
        <div className="filter-type-container">
          <input type="checkbox" id="juices" />
          <label htmlFor="juices">Juices</label>
        </div>
      </div>

      <div className="filter-type">
        <h3 className="filter-type-heading">Sort by</h3>
        <div className="filter-type-container">
          <input type="radio" id="low-to-high" name="sort-by" />
          <label htmlFor="low-to-high">Price - Low to High</label>
        </div>
        <div className="filter-type-container">
          <input type="radio" id="high-to-low" name="sort-by" />
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
