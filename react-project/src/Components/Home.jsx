import "./try.css";
import { useState, useEffect, useContext } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { color } from "@chakra-ui/react";
import { setcartLength } from "../Context/action";
import SliderComp from "./Slider";
import { AuthContext } from "../Context/AuthContext";
let trenddata = [
  {
    img: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/17d6b165-a222-4e0e-9d2e-20c34236e277_425x425.jpg",
    name: "HA TAPIOCA FLOUR 400G",
    price: "299",
    quantity: "1",
    productID: "11",
  },
  {
    img: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/97e020df-acc1-4b42-bc2c-40160bacf0c0_425x425.jpg",
    name: "KW MAGNUM CHOCOTRFFLE STICK 80Ml",
    price: "80",
    quantity: "1",
    productID: "12",
  },
  {
    img: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/dbffcc93-9bce-442f-837f-d5d5f073c0c0_425x425.jpg",
    name: "HAAGEN DAZS MANGO RASPBERRY 473Ml",
    price: "710",
    quantity: "1",
    productID: "13",
  },
  {
    img: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/8c103df4-090e-464c-a2d4-3b5c264d74f9_425x425.jpg",
    name: "WINGREENS TANDOORI HUMMUS 150G",
    price: "168",
    quantity: "1",
    productID: "14",
  },
];
let img = [
  "https://d1z88p83zuviay.cloudfront.net/BannerImages/172ece1d-70d5-44d5-a5f4-0d236c1d815a_1320x376.jpg",
  "https://d1z88p83zuviay.cloudfront.net/BannerImages/0f2301bb-4607-47f9-859c-1c2c21642159_1320x376.jpg",
  "https://d1z88p83zuviay.cloudfront.net/BannerImages/fcff6bcb-f6fa-489d-abba-07b77fa32be5_1320x376.png",
  "https://d1z88p83zuviay.cloudfront.net/BannerImages/5658ebaa-f296-4121-991c-c2009109e764_1320x376.jpg",
  "https://d1z88p83zuviay.cloudfront.net/BannerImages/4c720a91-f8f7-437a-bbfd-71e63580e802_1320x376.jpg",
  "https://d1z88p83zuviay.cloudfront.net/BannerImages/82a1ea7f-02c2-4192-b0d7-588973fa8d14_1320x376.jpg",
  "https://d1z88p83zuviay.cloudfront.net/BannerImages/bc1eefce-0553-4b16-bc75-45a4ee42a22e_1320x376.jpg",
  "https://d1z88p83zuviay.cloudfront.net/BannerImages/305a62b1-b655-4366-9a9c-b1d4c92685d5_1320x376.jpg",
  "https://d1z88p83zuviay.cloudfront.net/BannerImages/a1bb73ba-00a7-4473-ac0a-cafd9500e6eb_1320x376.jpg",
];
let i = 0;

function Home() {
  let topushincart=JSON.parse(localStorage.getItem("cartmei"))|| [];
  const [movingImg, setmovingImg] = useState(img[i]);
  const {stateA,dispatchA} = useContext(AuthContext)

  useEffect(() => {
    setInterval(() => {
      if (i === img.length) {
        i = 0;
      }
      setmovingImg(img[i]);
      i++;
    }, 3000);
  }, []);

  

  return (
    <>
      <div id="mainnav" style={{ width: "90%" }}>
      
        <div className="heading">
          <a href="">SHOP BY CATEGORY </a>
          <div className="submenu1">
            <a href="#">
              <div className="opt" id="gift">
                Gift Hampers
                <div className="box">
                  <div className="box11" id="img1">
                    <div className="box1">
                      <h6>gift hampers</h6>
                      <p>e-gift voucher</p>
                      <p>bulk/customised gifting</p>
                      <p>gift vouchers</p>
                      <p>all hampers</p>
                    </div>
                    <img
                      src="https://gnbdevcdn.s3.amazonaws.com/Images/Category/bespokeweb.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </a>
            <a href="#">
              <div className="opt" id="fru">
                fruits & vegetables
                <div className="box">
                  <div className="box11" id="img2">
                    <div className="box1">
                      <h6>daily vegetables</h6>
                      <p>seasonal</p>
                      <p>beans and brinjal</p>
                      <p>broccoli & cauliflower</p>
                      <p>chilies, garlic, lemon</p>
                      <p>truffles and mushrooms</p>
                      <p>onion, potato & tomatoes</p>
                      <p>peas & corn</p>
                      <p>peppers and lady fingers</p>
                      <p>lettuce and leafy</p>
                      <p>herbs and sprouts</p>
                      <p>gourd, cucumber & pumpkin</p>
                      <h6>exotic vegetables</h6>
                      <p>asparagus & artichokes</p>
                      <p>avacados & peppers</p>
                      <p>brocolli & zucchini</p>
                      <p>celer, fennel & leeks</p>
                      <p>chilies & lime</p>
                      <p>edible flowers</p>
                      <p>heirloom tomatoes</p>
                    </div>
                    <div className="box1">
                      <h6>organic</h6>
                      <p>vegetables</p>
                      <p>fruits</p>
                      <h6>fruits</h6>
                      <p>seasonal</p>
                      <p>apples & bananas</p>
                      <p>berries</p>
                      <p>citrus fruits</p>
                      <p>grapes</p>
                      <p>mangoes</p>
                      <p>melons</p>
                      <p>pears</p>
                      <p>plums and apricots</p>
                      <p>tropical & other fruits</p>
                      <p>dry fruits & dry seeds</p>
                      <h6>exotic fruits</h6>
                      <p>berries</p>
                      <p>tropical fruits</p>
                      <p>others</p>
                    </div>
                    <div className="box1">
                      <h6>canned & frozen</h6>
                      <p>canned fruits & fruit pulp</p>
                      <p>canned vegetables</p>
                      <p>frozen fruits & vegetables</p>
                      <h6>cold-pressed fresh juices</h6>
                    </div>
                    <img
                      src="https://gnbdevcdn.s3.amazonaws.com/Images/Category/Organicweb.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </a>
            <a href="#">
              <div className="opt" id="meat">
                cheese,meat & fruit
                <div className="box">
                  <div className="box11" id="img3">
                    <div className="box1">
                      <h6>party platters</h6>
                      <p>cheese platter</p>
                      <p>meat platter</p>
                      <h6>mini platters</h6>
                      <p>cheese platter</p>
                      <p>meat platter</p>
                    </div>
                    <img
                      src="https://gnbdevcdn.s3.amazonaws.com/Images/Category/coldcutweb.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </a>
            <a href="#">
              <div className="opt" id="deli">
                delicatessen & cheese
                <div className="box">
                  <div className="box11" id="img4">
                    <div className="box1">
                      <h6>fresh snacks & party food</h6>
                      <p>hors d'oeuvres</p>
                      <p>sandwiches & salads</p>
                      <p>platters & dips</p>
                      <p>pastries & desserts</p>
                      <h6>antipasti</h6>
                      <p>olives, capers & tapenades</p>
                      <p>gherkins & jalapenos</p>
                      <p>sundried tomatoes & others</p>
                      <h6>gourmet cheese shop</h6>
                      <p>brie,camembert & blue cheese</p>
                      <p>cheddar, gouda & edam</p>
                      <p>cream & cottage cheese</p>
                      <p>feta & halloumi</p>
                      <p>goat cheese & others</p>
                      <p>mozzarella, mascarpone & ricotta</p>
                      <p>paneer & tofu</p>
                      <p>parmesan & pecorino</p>
                      <p>smoked cheese</p>
                    </div>
                    <div className="box1">
                      <h6>cold cuts & sausages</h6>
                      <p>chicken & turkey cold cuts</p>
                      <p>park-bacon, proscuitto & cured ham</p>
                      <p>pork-salami, chorizo & pepperoni</p>
                      <p>pork & lamb sausages</p>
                      <p>pastrami</p>
                      <h6>cheese spread, slices & others</h6>
                      <p>cheese cubes, tins & others</p>
                      <p>cheese spreads & slices</p>
                      <p>recipe fest</p>
                      <p>cheese fest</p>
                    </div>
                    <img
                      src="https://gnbdevcdn.s3.amazonaws.com/Images/Category/Freshartisinalbreadsweb.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </a>
            <a href="#">
              <div className="opt" id="cui">
                international cuisine
                <div className="box">
                  <div className="box11" id="img5">
                    <div className="box1">
                      <h6>italian & continental</h6>
                      <p>pasta</p>
                      <p>whole wheat & other pasta</p>
                      <p>arborio rice & polenta</p>
                      <p>sauces,pastes & marinad</p>
                      <p>olives, capers & tapenad</p>
                      <h6>middle-eastern</h6>
                      <p>couscous & sauces</p>
                      <p>pastes & condiments</p>
                      <p>breads, hummus</p>
                      <h6>condiments</h6>
                      <p>dried herbs</p>
                      <p>spices & seasoning</p>
                      <p>mustards, ketchup & mayo</p>
                      <h6>flours, grains & more</h6>
                      <p>couscous & polenta</p>
                      <p>rice & quinoa</p>
                      <p>flours</p>
                      <p>amaranth, buckwheat</p>
                    </div>
                    <div className="box1">
                      <h6>mexican</h6>
                      <p>tortillas, tacos & others</p>
                      <p>sauces & pastes</p>
                      <p>baked beans</p>
                      <h6>salad dressing</h6>
                      <p>french, italian & greek ..</p>
                      <p>vinaigrettes & thin dres..</p>
                      <p>salad cream & mayonnaise</p>
                      <h6>vinegars & mustards</h6>
                      <p>balsamic & cide vinegar</p>
                      <p>other vinegars</p>
                      <p>mustards</p>
                      <h6>salt, sugar & substitutes</h6>
                      <p>icing & castor sugar</p>
                      <p>sweetner & substitutes</p>
                      <p>salt, flavored & sea salt</p>
                    </div>
                    <div className="box1">
                      <h6>pan-asian</h6>
                      <p>noodles & rice</p>
                      <p>sauces, curries & pastes</p>
                      <p>japenese essentials</p>
                      <p>wraps, rolls & others</p>
                      <h6>oils</h6>
                      <p>seeds & nuts</p>
                      <p>vegetable oils</p>
                      <p>olive & extravirgin olive oils</p>
                      <p>cold-pressed oils</p>
                      <p>infused oils</p>
                      <p>oil sprays</p>
                      <h6>soups</h6>
                      <p>continental soups</p>
                      <p>oriental soups</p>
                    </div>
                    <img
                      src="https://gnbdevcdn.s3.amazonaws.com/Images/Category/internationalcusineweb.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </a>
            <a href="#">
              <div className="opt" id="hea">
                health
                <div className="box">
                  <div className="box11" id="img6">
                    <div className="box1">
                      <h6>weight management foods</h6>
                      <p>butters & oil</p>
                      <p>dry fruits, museli & bran</p>
                      <p>flours and grains</p>
                      <p>rice, couscous & quinoa</p>
                      <p>seafood</p>
                      <p>soups & dressings</p>
                      <p>soya snacks, biscuits</p>
                      <p>supplements</p>
                      <p>tea & beverages</p>
                      <h6>heart-healthy foods</h6>
                      <p>amaranth, couscous & quinoa</p>
                      <p>flours, rice & condiments</p>
                      <p>bread & Breakfast</p>
                      <p>butters & oils</p>
                      <p>Dry fruit, seeds & powders</p>
                      <p>seafood & lean meats</p>
                      <p>snacks & others</p>
                    </div>
                    <img
                      src="https://gnbdevcdn.s3.amazonaws.com/Images/Category/hearthealthyfoodsweb.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </a>
            <a href="#">
              <div className="opt" id="ind">
                indian grocery
                <div className="box">
                  <div className="box11" id="img7">
                    <div className="box1">
                      <h6>flours, grains& more</h6>
                      <p>flours & grains</p>
                      <p>rice</p>
                      <p>pulses</p>
                      <p>indian breakfast favourites</p>
                      <p>nuts & dry fruits</p>
                      <h6>cooking pastes & sauces</h6>
                      <p>curry pastes & marinades</p>
                      <p>puree & coconut milk</p>
                      <p>cooking pastes & sauces</p>
                      <h6>cooking spices & powders</h6>
                      <p>ground spices</p>
                      <p>whole spices</p>
                      <p>blended spices</p>
                      <p>tamarind & others</p>
                    </div>
                    <img
                      src="https://gnbdevcdn.s3.amazonaws.com/Images/Category/indiangroceryweb.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </a>
            <a href="#">
              <div className="opt" id="pati">
                confectionary & patisserie
                <div className="box">
                  <div className="box11" id="img8">
                    <div className="box1">
                      <h6>Chocolates</h6>
                      <p>funsize packs & snacksize bars</p>
                      <p>milk, dark & mint chocolates</p>
                      <p>fudge & truffles</p>
                      <p>gift pack & bouquettes</p>
                      <h6>Dessert mixes, sauces & topping</h6>
                      <p>cakes,brownie & pancake mixes</p>
                      <p>canned fruit & pie filing</p>
                      <p>jellies & custard</p>
                      <p>nuts, seed & dried fruit</p>
                      <p>sauces & syrups</p>
                      <p>sprinklers & toppings</p>
                      <h6>ice creams & desserts</h6>
                      <p>ice-cream & kulfi</p>
                      <p>frozen yogurts</p>
                      <p>pastries & desserts</p>
                      <p>indian sweets</p>
                    </div>
                    <img
                      src="https://gnbdevcdn.s3.amazonaws.com/Images/Category/confectionaryweb.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </a>
            <a href="#">
              <div className="opt" id="sea">
                meat,seafood and eggs
                <div className="box">
                  <div className="box11" id="img9">
                    <div className="box1">
                      <h6>chicken,mutton,fish</h6>
                      <p>fresh chicken</p>
                      <p>fish & seafood</p>
                      <p>prawns,lobsters,scampi</p>
                      <p>fresh mutton</p>
                      <p>marination-ready to cook</p>
                      <h6>plant based meat</h6>
                      <p>caviar & pates</p>
                      <p>kebab,mince,biryani,tikka</p>
                      <p>mackarel,kipper & herrings</p>
                      <p>nuggets,burger patty</p>
                      <p>sausages,salami</p>
                      <p>vegan & mock meat</p>
                    </div>
                    <img
                      src="https://gnbdevcdn.s3.amazonaws.com/Images/Category/coldcutweb.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </a>
            <a href="#">
              <div className="opt" id="sna">
                snack bar
                <div className="box">
                  <div className="box11" id="img10">
                    <div className="box1">
                      <h6>frozen non veg</h6>
                      <p>non veg marinades</p>
                      <p>non veg nuggets & snack</p>
                      <p>non veg pizza & momos</p>
                      <p>non veg salami & sausages</p>
                      <p>non veg spread & currys</p>
                      <p>non veg stuffed parathas</p>
                      <p>non veg burger patty</p>
                      <p>non veg kababs</p>
                      <h6>frozen veg</h6>
                      <p>potato snack, fries</p>
                      <p>stuff pastry & fruit pulp</p>
                      <p>veg nuggets & snack</p>
                      <p>veg paratha</p>
                      <p>veg pizza & momos</p>
                    </div>
                    <img
                      src="https://gnbdevcdn.s3.amazonaws.com/Images/Category/Readytoeatweb.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </a>
            <a href="#">
              <div className="opt" id="bev">
                snacks & beverages
                <div className="box">
                  <div className="box11" id="img11">
                    <div className="box1">
                      <h6>cookies & crackers</h6>
                      <p>biscuits</p>
                      <p>cookies</p>
                      <p>crackers</p>
                      <p>digestives</p>
                      <p>straws</p>
                      <p>wafers & pastry rolls</p>
                      <h6>coffee</h6>
                      <p>instant coffee</p>
                      <p>coffee beans</p>
                      <p>filter coffee</p>
                      <p>ready to drink</p>
                      <h6>teas</h6>
                      <p>black teas</p>
                      <p>green,white teas</p>
                      <p>herbal teas</p>
                      <p>fruit & flower infused teas</p>
                      <p>iced tea</p>
                      <p>selection packs</p>
                    </div>
                    <img
                      src="https://gnbdevcdn.s3.amazonaws.com/Images/Category/fineteasweb.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </a>
            <a href="#">
              <div className="opt" id="pack">
                packing material
                <div className="box">
                  <div className="box11" id="img12">
                    <div className="box1">
                      <h6>bags</h6>
                      <p>bags</p>
                      <p>cloth bag</p>
                    </div>
                    <img
                      src="https://www.naturesbasket.co.in/Images/NaturesBasketGifting.jpeg?v=7"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className="heading">
          <a>MY ORDERS</a>
        </div>
        <div className="heading">
          <a href="raj.html">GIFTING</a>
        </div>
        <div className="heading">
          <a>REWARDS</a>
        </div>
        <div className="heading">
          <a href="blogm.html">BLOG</a>
          <div className="submenu2">
            <a href="">
              <div className="opt">Gift Hampers</div>
            </a>
            <a href="">
              <div className="opt">fruits & vegetables</div>
            </a>
            <a href="">
              <div className="opt">cheese,meat & fruit</div>
            </a>
            <a href="#">
              <div className="opt">delicatessen & cheese</div>
            </a>
          </div>
        </div>
        <div className="heading">
          <a href="#">OFFERS</a>
        </div>
        <div className="heading">
          <a href="#">CONNOISSEUR'S SELECTION</a>
        </div>
        <div className="heading" id="moveleft">
          <a href="#">BOOK STORE VISIT</a>
        </div>
      </div>

      <div id="poster1">
        <img
          src="//gnbdevcdn.s3-ap-southeast-1.amazonaws.com/Marketing/d8cc09f5-5d68-4853-ae9a-233ceabe3acd.jpg"
          alt=""
        />
      </div>
      <div id="poster2">
        <img src={movingImg} alt="err" />
      </div>
      <div id="poster3">
        <div>
          <img
            src="https://www.naturesbasket.co.in/Images/NaturesBasketGifting.jpeg?v=7"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://www.naturesbasket.co.in/Images/Japanesecuisine-webbox.png?v=9"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://www.naturesbasket.co.in/Images/Gluten-free-web%20box%20banner.png?v=15"
            alt=""
          />
        </div>
      </div>
      <br></br>
      <h1 style={{ width: "90%" }}>SHOP BY CATEGORY</h1>
      {/* <ChevronLeftIcon color="red.600"/> */}
      
      <SliderComp />

      <div id="poster4">
        <img
          src="https://www.naturesbasket.co.in/Images/homepageblogbanner/NB_paneerBlog_banner.jpg"
          alt=""
        />
      </div>
      <h1>WHAT'S TRENDING</h1>
      <div id="trend">
        {trenddata.map((el, i) => {
          return (
            <div className="trendbox">
              <p className="dely">DELIVERY IN 90 MINUTES</p>
              <img className="imgift" src={el.img} alt="err"></img>
              <p className="des">{el.name}</p>
              <p className="pri">MRP ₹ {el.price}</p>
              <img
                className="cartthg"
                src="https://www.naturesbasket.co.in/Images/CartAddBtn.PNG"
                alt=""
                onClick={()=>{
                  //dispatch(setcartLength)
                  
                      topushincart.push(el)
                  localStorage.setItem("cartmei", JSON.stringify(topushincart));
                  dispatchA(setcartLength(topushincart.length))
                }}
              ></img>
            </div>
          );
        })}
      </div>
      <h1>OUR EVENTS</h1>
      <div id="event">
        <div className="evenbox">
          <img
            src="https://www.naturesbasket.co.in/Images/PhotoGallery/SanjeevKapoor_at_KolkataGallary.jpg"
            alt=""
          />
        </div>
        <div className="evenbox">
          <img
            src="https://www.naturesbasket.co.in/Images/PhotoGallery/2-ph150419.jpeg"
            alt=""
          />
        </div>
        <div className="evenbox">
          <img
            src="https://d1z88p83zuviay.cloudfront.net/Images/PhotoGallery/Laffaire_Event_Thumbnail.png"
            alt=""
          />
        </div>
      </div>
      <h1>SHOP BY WORLD BRANDS</h1>
      <div id="brand">
        <div className="brandimg">
          <img
            src="https://d1z88p83zuviay.cloudfront.net/Images/davidoff-cafe.jpg"
            alt=""
          />
        </div>
        <div className="brandimg">
          <img
            src="https://d1z88p83zuviay.cloudfront.net/Images/lexlusif.jpg"
            alt=""
          />
        </div>
        <div className="brandimg">
          <img
            src="https://d1z88p83zuviay.cloudfront.net/Images/healthy.jpg"
            alt=""
          />
        </div>
        <div className="brandimg">
          <img
            src="https://d1z88p83zuviay.cloudfront.net/Images/cambay-tiger.jpg"
            alt=""
          />
        </div>
        <div className="brandimg">
          <img
            src="https://d1z88p83zuviay.cloudfront.net/Images/real-thai.jpg"
            alt=""
          />
        </div>
      </div>
      <div id="info">
        <h2>Online Grocery Store India</h2>
        <p>
          Nature’s Basket is a grocery store operating in Mumbai, Bangalore and
          Pune with deliveries to all cities across India including Hyderabad,
          Delhi, Kolkata, Chennai, Surat and more. We offer a wide range of food
          products for all your everyday needs and even offer grocery home
          delivery as well as a grocery shop online for you to purchase from.
          Our online grocery store has fresh fruits and vegetables, fresh and
          frozen meats and seafood, a wide range of breads and other packaged
          bakery products as well as a range of fresh cheeses from around the
          world. We even have a range of every staple and international cuisine
          product to meet your needs along with organic products for fresh and
          packaged food items. With our offerings, we have the best online food
          shop & online grocery shopping platform available for all your grocery
          products as well as physical grocery stores in select cities.
        </p>
        <h2>Best Online Grocery Supermarket India</h2>
        <p>
          With stores in Mumbai, Pune and Bangalore and online delivery
          services, you can now have all your grocery supermarket shopping done
          online. We have a wide range of grocery products to offer at our
          stores for you to buy groceries from a channel convenient to you.
          Choose from fresh produce to packaged goods, buy groceries online and
          get them delivered straight to your doorstep, thus making it a
          convenient and quick process. You can pay for the shopping using
          credit cards, cash, coupons or online banking facility. We are sure to
          have all the grocery products for your daily dietary needs from
          regular local Indian brands and products to exotic and international
          imported ones.
        </p>
        <h2>Online Grocery Supermarket Shopping India</h2>
        <p>
          With our wide range of groceries available, Nature’s Basket is a large
          online supermarket and grocery store for all your everyday food needs.
          We offer you the best quality grocery products which you can buy
          online and have them delivered to you conveniently. We have our
          grocery stores in Mumbai, Pune and Bangalore where you can buy
          groceries and food items. We also have the best online grocery store
          to shop for fruits and vegetables, meats and seafood, breads and other
          bakery items as well as cheese and dairy. Order groceries online from
          the best quality grocery store at best prices.
        </p>
        <p>
          Find a variety of Best Christmas gifts such as delightful Cakes,
          Chocolates, Cookies, Turkey, Stollen, Gourmet Gift Baskets, Sweets &
          Lots More Here
        </p>
      </div>
    </>
  );
}

export default Home;
