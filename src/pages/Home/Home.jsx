import "./Home.css";

const Home = () => {
  return (
    <main class="home-wrapper">
      <section class="hero overlay">
        <div class="page-intro">
          <article>
            <h3 class="intro-heading">Good Food, Good Mood</h3>
            <p class="intro-sub-heading">Save 60% on your first order</p>
            <button class="button btn-outlined intro-btn">Order Now</button>
          </article>
        </div>
      </section>

      <section class="intro-blocks">
        <ul class="blocks">
          <li class="block">
            <article>
              <div>
                <i class="fas fa-money-bill-alt"></i>
              </div>

              <h6 class="block-heading">No Minimum Order</h6>
              <p class="block-para">
                Order for yourself or for your group with no restrictions on
                order value.
              </p>
            </article>
          </li>
          <li class="block">
            <article>
              <div>
                <i class="fas fa-truck-loading"></i>
              </div>
              <h6 class="block-heading">Express Delivery</h6>
              <p class="block-para">
                Get your food delivered fresh and on time.
              </p>
            </article>
          </li>
          <li class="block">
            <article>
              <div>
                <i class="fas fa-map-marked"></i>
              </div>
              <h6 class="block-heading">Track Order</h6>
              <p class="block-para">Know where your order is at all times!</p>
            </article>
          </li>
          <li class="block">
            <article>
              <div>
                <i class="fas fa-cash-register"></i>
              </div>
              <h6 class="block-heading">Best Deals</h6>
              <p class="block-para">
                Get best deals and offers on your favourite food items.
              </p>
            </article>
          </li>
        </ul>
      </section>

      <h1 class="categories-heading">Featured Categories</h1>
      <section class="feat-categories">
        <div class="category">
          <div class="category-image">
            <img src="/assets/images/meat-skewer.jpg" alt="category" />
          </div>
          <div class="category-content">
            <div class="content-shown">
              <h4>Indian Food</h4>
              <p>Delicacies of India</p>
            </div>

            <div class="content-hidden">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Incidunt voluptate pariatur id adipisci quidem nemo, quia dolore
                excepturi quisquam consectetur!
              </p>
            </div>
          </div>
        </div>
        <div class="category">
          <div class="category-image">
            <img src="/assets/images/healthy.jpg" alt="category" />
          </div>
          <div class="category-content">
            <div class="content-shown">
              <h4>Healthy</h4>
              <p>For the fitness lovers</p>
            </div>

            <div class="content-hidden">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Incidunt voluptate pariatur id adipisci quidem nemo, quia dolore
                excepturi quisquam consectetur!
              </p>
            </div>
          </div>
        </div>
        <div class="category">
          <div class="category-image">
            <img src="/assets/images/desserts.jpg" alt="category" />
          </div>
          <div class="category-content">
            <div class="content-shown">
              <h4>Desserts</h4>
              <p>For the ones with a sweet tooth</p>
            </div>

            <div class="content-hidden">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Incidunt voluptate pariatur id adipisci quidem nemo, quia dolore
                excepturi quisquam consectetur!
              </p>
            </div>
          </div>
        </div>
        <div class="category">
          <div class="category-image">
            <img src="/assets/images/pizza.jpg" alt="category" />
          </div>
          <div class="category-content">
            <div class="content-shown">
              <h4>Fast Food</h4>
              <p>For the cheat days</p>
            </div>

            <div class="content-hidden">
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

export default Home;
