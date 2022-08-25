import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slick.css";
import "./try.css";

function SliderComp() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <div
      style={{ textALign: "center", padding: "10px 100px", marginLeft: "50px" }}
    >
      <Slider {...settings}>
        
        <div>

          <div class="product-card">
            <div class="product-image">
              <img
                src="https://gnbdevcdn.s3.amazonaws.com/Images/Category/Exoticvegetablesweb.png"
                class="product-thumb"
                alt=""
              />
            </div>
            <div class="product-info">
              <h2 class="product-brand">Exotic Vegetables</h2>

              <p class="product-short-description">Aspharagus Artichokes</p>

              <p class="product-short-description">avocados peppers</p>

              <p class="product-short-description">broccoli zucchini</p>

              <button class="btnn">View all</button>
            </div>
          </div>

        </div>

        <div>
          <div class="product-card">
            <div class="product-image">
              <img
                src="https://gnbdevcdn.s3.amazonaws.com/Images/Category/coldcutweb.png"
                class="product-thumb"
                alt=""
              />
            </div>
            <div class="product-info">
              <a href="#">
                <h2 class="product-brand">Meat, Poultry,seafood</h2>
              </a>
              <a href="#">
                <p class="product-short-description">chicken cuts lollipops</p>
              </a>
              <a href="#">
                <p class="product-short-description">fish other seafood</p>
              </a>
              <a href="#">
                <p class="product-short-description">fresh kebabs others</p>
              </a>
              <a href="#">
                <button class="btnn">View all</button>
              </a>
            </div>
          </div>
        </div>
        <div>
          <div class="product-card">
            <div class="product-image">
              <img
                src="https://gnbdevcdn.s3.amazonaws.com/Images/Category/Freshartisinalbreadsweb.png"
                class="product-thumb"
                alt=""
              />
            </div>
            <div class="product-info">
              <a href="#">
                <h2 class="product-brand">fresh artisanal breads</h2>
              </a>
              <a href="#">
                <p class="product-short-description">
                  breadsticks crostinni lavache
                </p>
              </a>
              <a href="#">
                <p class="product-short-description">buns croissants bagels</p>
              </a>
              <a href="#">
                <p class="product-short-description">muffin cakes brownies</p>
              </a>
              <a href="#">
                <button class="btnn">View all</button>
              </a>
            </div>
          </div>
        </div>
        <div>
          <div class="product-card">
            <div class="product-image">
              <img
                src="https://gnbdevcdn.s3.amazonaws.com/Images/Category/dailyessentialsweb.png"
                class="product-thumb"
                alt=""
              />
            </div>
            <div class="product-info">
              <a href="#">
                <h2 class="product-brand">daily essentials</h2>
              </a>
              <a href="#">
                <p class="product-short-description">snacks & beverages</p>
              </a>
              <a href="#">
                <p class="product-short-description">
                  breakfast, dairy & bakery
                </p>
              </a>
              <a href="#">
                <p class="product-short-description">staples</p>
              </a>
              <a href="#">
                <button class="btnn">View all</button>
              </a>
            </div>
          </div>
        </div>

        <div>
          <div class="product-card">
            <div class="product-image">
              <img
                src="https://gnbdevcdn.s3.amazonaws.com/Images/Category/Organicweb.png"
                class="product-thumb"
                alt=""
              />
            </div>
            <div class="product-info">
              <a href="#">
                <h2 class="product-brand">organic</h2>
              </a>
              <a href="#">
                <p class="product-short-description">fruits & vegetables</p>
              </a>
              <a href="#">
                <p class="product-short-description">staples</p>
              </a>
              <a href="#">
                <p class="product-short-description">bakery & dairy</p>
              </a>
              <a href="#">
                <button class="btnn">View all</button>
              </a>
            </div>
          </div>
        </div>
        <div>
          <div class="product-card">
            <div class="product-image">
              <img
                src="https://gnbdevcdn.s3.amazonaws.com/Images/Category/Readytoeatweb.png"
                class="product-thumb"
                alt=""
              />
            </div>
            <div class="product-info">
              <a href="#">
                <h2 class="product-brand">ready to eat</h2>
              </a>
              <a href="#">
                <p class="product-short-description">hors'D oeuvres</p>
              </a>
              <a href="#">
                <p class="product-short-description">pastries desserts</p>
              </a>
              <a href="#">
                <p class="product-short-description">soups salads</p>
              </a>
              <a href="#">
                <button class="btnn">View all</button>
              </a>
            </div>
          </div>
        </div>
        <div>
          <div class="product-card">
            <div class="product-image">
              <img
                src="https://gnbdevcdn.s3.amazonaws.com/Images/Category/bespokeweb.png"
                class="product-thumb"
                alt=""
              />
            </div>
            <div class="product-info">
              <a href="#">
                <h2 class="product-brand">the gift studio</h2>
              </a>
              <a href="#">
                <p class="product-short-description">
                  celebration with nature basket
                </p>
              </a>
              <a href="#">
                <p class="product-short-description">world food hampers</p>
              </a>
              <a href="#">
                <p class="product-short-description">bulk enquiry</p>
              </a>
              <a href="#">
                <button class="btnn">View all</button>
              </a>
            </div>
          </div>
        </div>
        <div>
          <div class="product-card">
            <div class="product-image">
              <img
                src="https://gnbdevcdn.s3.amazonaws.com/Images/Category/fineteasweb.png"
                class="product-thumb"
                alt=""
              />
            </div>
            <div class="product-info">
              <a href="#">
                <h2 class="product-brand">fine teas</h2>
              </a>
              <a href="#">
                <p class="product-short-description">black teas</p>
              </a>
              <a href="#">
                <p class="product-short-description">green white oolong teas</p>
              </a>
              <a href="#">
                <p class="product-short-description">herbal teas</p>
              </a>
              <a href="#">
                <button class="btnn">View all</button>
              </a>
            </div>
          </div>
        </div>
        <div>
          <div class="product-card">
            <div class="product-image">
              <img
                src="https://gnbdevcdn.s3.amazonaws.com/Images/Category/hearthealthyfoodsweb.png"
                class="product-thumb"
                alt=""
              />
            </div>
            <div class="product-info">
              <a href="#">
                <h2 class="product-brand">heart healthy foods</h2>
              </a>
              <a href="#">
                <p class="product-short-description">
                  amaranth couscous quinoa
                </p>
              </a>
              <a href="#">
                <p class="product-short-description">flours rice condiments</p>
              </a>
              <a href="#">
                <p class="product-short-description">seafood lean meats</p>
              </a>
              <a href="#">
                <button class="btnn">View all</button>
              </a>
            </div>
          </div>
        </div>
        <div>
          <div class="product-card">
            <div class="product-image">
              <img
                src="https://gnbdevcdn.s3.amazonaws.com/Images/Category/indiangroceryweb.png"
                class="product-thumb"
                alt=""
              />
            </div>
            <div class="product-info">
              <a href="#">
                <h2 class="product-brand">indian grocery</h2>
              </a>
              <a href="#">
                <p class="product-short-description">salt sugar substitutes</p>
              </a>
              <a href="#">
                <p class="product-short-description">cooking spices powders</p>
              </a>
              <a href="#">
                <p class="product-short-description">oils</p>
              </a>
              <a href="#">
                <button class="btnn">View all</button>
              </a>
            </div>
          </div>
        </div>
        <div>
          <div class="product-card">
            <div class="product-image">
              <img
                src="https://gnbdevcdn.s3.amazonaws.com/Images/Category/confectionaryweb.png"
                class="product-thumb"
                alt=""
              />
            </div>
            <div class="product-info">
              <a href="#">
                <h2 class="product-brand">confectionary,patisserie</h2>
              </a>
              <a href="#">
                <p class="product-short-description">
                  milk dark mint chocolates
                </p>
              </a>
              <a href="#">
                <p class="product-short-description">
                  cakes, brownies & pancakes
                </p>
              </a>
              <a href="#">
                <p class="product-short-description">ice-creams & kulfi</p>
              </a>
              <a href="#">
                <button class="btnn">View all</button>
              </a>
            </div>
          </div>
        </div>
        <div>
          <div class="product-card">
            <div class="product-image">
              <img
                src="https://gnbdevcdn.s3.amazonaws.com/Images/Category/internationalcusineweb.png"
                class="product-thumb"
                alt=""
              />
            </div>
            <div class="product-info">
              <a href="#">
                <h2 class="product-brand">international cuisine</h2>
              </a>
              <a href="#">
                <p class="product-short-description">pasta</p>
              </a>
              <a href="#">
                <p class="product-short-description">rice quinoa</p>
              </a>
              <a href="#">
                <p class="product-short-description">
                  olive extravirgin olive oils
                </p>
              </a>
              <a href="#">
                <button class="btnn">View all</button>
              </a>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default SliderComp;
