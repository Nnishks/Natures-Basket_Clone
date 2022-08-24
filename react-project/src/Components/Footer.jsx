import "./Footer.css"

function Footer() {
    return ( 
    <div id="mfoot">
    <div id="foot-container">
      <div className="download-section">
        <h4 className="foot-h4">DOWNLOAD THE APP</h4>
        <img
        style={{width: "170px", marginTop: "10px"}}
        //   style="width: 170px; margin-top: 10px"
          src="https://cdn.worldvectorlogo.com/logos/get-it-on-google-play.svg"
          alt="Google Play"
        />
        <img
        style={{width: "170px", marginTop: "10px"}}
        //   style="width: 170px; margin-top: 10px"
          src="https://cdn.worldvectorlogo.com/logos/available-on-the-app-store.svg"
          alt="Apple Store"
        />
      </div>
      <div className="about-section">
        <h4 className="foot-h4">ABOUT US</h4>
        <div className="foot-hf">
          <a href="#">About Us</a>
        </div>
        <div className="foot-hf">
          <a href="">Our Vision & Purpose</a>
        </div>
        <p className="foot-p">Quality standards</p>
        <p className="foot-p">Awards</p>
        <p className="foot-p">FAQS</p>
        <p className="foot-p">Available Delivery Slot</p>
        <p className="foot-p">Vendor Connect</p>
        <h4 className="foot-h4">CAREERS</h4>
        <p className="foot-p">Work with us</p>
      </div>
      <div className="news-section">
        <h4 className="foot-h4">NEWS & MEDIA</h4>
        <p className="foot-p">Press release</p>
        <p className="foot-p">Newsletters</p>
        <p className="foot-p">Events</p>
        <p className="foot-p">Photo gallery</p>
        <p className="foot-p">Recips</p>
        <p className="foot-p">NBTV</p>
        <p className="foot-p">Our Virtual Store</p>
      </div>
      <div className="our-section">
        <h4 className="foot-h4">OUR POLICIES</h4>
        <p className="foot-p">Privacy policy</p>
        <p className="foot-p">Payment policy</p>
        <p className="foot-p">Disclaimer</p>
        <p className="foot-p">Statutory Compliance</p>
        <p className="foot-p">Data Protection Policy</p>
        <p className="foot-p">Grievance Officer</p>
        <p className="foot-p">Information Security Policy</p>
      </div>
      <div className="sign-section">
        <h4 className="foot-h4">SIGN UP TO STAY UPDATED</h4>
        <input
          className="foot-input"
          type="email"
          placeholder="ENTER YOUR EMAIL ADDRESS"
          // required
        />
        <button

        //   style="cursor: pointer"
          type="submit"
          className="btnn"
        //   onclick="openPopup()"
        >
          SUBSCRIBE
        </button>
        <div className="popup" id="btnn">
          <img alt="" src="https://raw.githubusercontent.com/sranbir392/Project_1/product/404-tick.png" />
          <h2>Thank You!</h2>
          <p>Your details has been successfully submitted. Thanks!</p>
          <button type="button">OK</button>
        </div>
      </div>
    </div>
    <hr />
    <div id="child-container">
      <div className="paymentMethod">
        Payment Method
        <img
          src="https://www.naturesbasket.co.in/Images/icons-card-payments-mode.png"
          alt="visa"
        />
      </div>
      <div className="socialbtn">
        Keep in Touch
        <img
        style={{width: "20px", marginTop: "17px",height: "20px"}}
        //   style="width: 20px; height: 20px; margin-top: 17px"
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.famille-epanouie.fr%2Fwp-content%2Fuploads%2F2020%2F05%2F519-5190929_facebook-icon-svg-grey-hd-png-download.png&f=1&nofb=1"
          alt="fb"
        />
        <img
        style={{width: "20px", marginTop: "17px",height: "20px"}}
        //   style="width: 20px; height: 20px; margin-top: 17px"
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.Hiyq_zU4v_q9AIowgWVeFAHaGT%26pid%3DApi&f=1"
          alt="twitter"
        />
        <img
        style={{width: "20px", marginTop: "17px",height: "20px"}}
        //   style="width: 20px; height: 20px; margin-top: 17px"
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.zKP6ojEoanFJq-T_5TYT-gAAAA%26pid%3DApi&f=1"
          alt="youtube"
        />
        <img
        style={{width: "20px", marginTop: "17px",height: "20px"}}
        //   style="width: 20px; height: 20px; margin-top: 17px"
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.yb9gdlGvOGah48ZvmVPkjgHaHa%26pid%3DApi&f=1"
          alt="instagram"
        />
        <img
        style={{width: "20px", marginTop: "17px",height: "20px"}}
        //   style="width: 20px; height: 20px; margin-top: 17px"
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.eyR2wIf2b7Eo9FcghaNrbwAAAA%26pid%3DApi&f=1"
          alt="pintrest"
        />
      </div>
    </div>
    <hr />
    <div id="foot-container">
      <div>
        <h4 className="foot-h4">FRESH & FAST</h4>
        <h4 className="foot-h4">GIFT HAMPERS</h4>
        <p className="foot-p">Birthday & Anniversary Gift Hampers</p>
        <p className="foot-p">World cuisine Gift Hampers</p>
        <p className="foot-p">Organic & Health Gift Hampers</p>
        <p className="foot-p">Coffee & Tea Gift Hampers</p>
        <p className="foot-p">Get Well Soon Gift Hampers</p>
        <p className="foot-p">Cheese & Meat Platters</p>
        <h4 className="foot-h4">FRUITS & VEGETABLES</h4>
        <p className="foot-p">Vegetables</p>
        <p className="foot-p">Exotic Vegetables</p>
        <p className="foot-p">Fruits</p>
        <p className="foot-p">Organic Fruits & Vegetables</p>
        <p className="foot-p">Exotic Fruits</p>
        <p className="foot-p">Canned & Frozen</p>
        <p className="foot-p">Cold - Pressed Fresh Juices</p>
        <h4 className="foot-h4">DELICATESSEN & CHEESE</h4>
        <p className="foot-p">Fresh Snacks & Party Food</p>
        <p className="foot-p">Antipasti</p>
        <p className="foot-p">Gourment Cheese Shop</p>
        <p className="foot-p">Cold Cuts & Sausages</p>
        <p className="foot-p">Cheese Spread, Slice & Others</p>
      </div>
      <div>
        <h4 className="foot-h4">INTERNATIONAL CUISINE</h4>
        <p className="foot-p">Italian & Continental</p>
        <p className="foot-p">Middle-Eastern</p>
        <p className="foot-p">Condiments</p>
        <p className="foot-p">Flours, Grain & More</p>
        <p className="foot-p">Mexican</p>
        <p className="foot-p">Salad Dressing</p>
        <p className="foot-p">Vinegars & Mustards</p>
        <p className="foot-p">Salt, Sugar & Substitutes</p>
        <p className="foot-p">Pan-Asian</p>
        <p className="foot-p">Baking Ingredients</p>
        <p className="foot-p">Oils</p>
        <p className="foot-p">Soups</p>
        <h4 className="foot-h4">HEALTH</h4>
        <p className="foot-p">Weight Management Foods</p>
        <p className="foot-p">Heart - Healthy Foods</p>
        <p className="foot-p">Wellness & Immunity Boosters</p>
        <p className="foot-p">Diabetic - Friendly Foods</p>
        <p className="foot-p">Problem Solution Foods</p>
        <p className="foot-p">Organic</p>
      </div>
      <div>
        <h4 className="foot-h4">CONFECTIONARY & PATISSERIE</h4>
        <p className="foot-p">Chocolates</p>
        <p className="foot-p">Dessert Mixes, Sauces & Toppings</p>
        <p className="foot-p">Ice Creams & Desserts</p>
        <p className="foot-p">Confectionery</p>
        <p className="foot-p">Baking Ingredients</p>
        <p className="foot-p">Patisserie</p>
        <h4 className="foot-h4">MEATS, SEAFOOD AND EGGS</h4>
        <p className="foot-p">Fresh Meats & Seafood</p>
        <p className="foot-p">Cold Cuts & Sausages</p>
        <p className="foot-p">Packaged Sea food & Meats</p>
        <p className="foot-p">Eggs</p>
        <p className="foot-p">Frozen</p>
      </div>
      <div>
        <h4 className="foot-h4">BREAKFAST & DAIRY</h4>
        <p className="foot-p">Cerals, Bars & Others</p>
        <p className="foot-p">Jams, Preserves & Conserves</p>
        <p className="foot-p">Honey</p>
        <p className="foot-p">Indian Breakfast Favourites</p>
        <p className="foot-p">Spreads</p>
        <p className="foot-p">Milk, Yogurt & Other Dairy Drinks</p>
        <p className="foot-p">Butters & Margarines</p>
        <p className="foot-p">Bakery</p>
        <h4 className="foot-h4">INSTANT MEAL & AIDS</h4>
        <p className="foot-p">Ready to Cook</p>
        <p className="foot-p">Ready to Eat</p>
        <p className="foot-p">Accessories</p>
        <p className="foot-p">Books</p>
      </div>
      <div>
        <h4 className="foot-h4">SNACKS & BEVERAGES</h4>
        <p className="foot-p">Cookies & Crackers</p>
        <p className="foot-p">Frozen Snacks</p>
        <p className="foot-p">Antipasti</p>
        <p className="foot-p">Dry Snacks</p>
        <p className="foot-p">Fresh Snacks & party Food</p>
        <p className="foot-p">Relishes & Pickles</p>
        <p className="foot-p">Carbonated Drinks</p>
        <p className="foot-p">Teas</p>
        <p className="foot-p">Concentrate</p>
        <p className="foot-p">Energy Drinks & Milks Additives</p>
        <p className="foot-p">Juice</p>
        <p className="foot-p">Coffee</p>
        <p className="foot-p">Dairy Drinks</p>
        <p className="foot-p">Water</p>
        <h4 className="foot-h4">INDIAN GROCERY</h4>
        <p className="foot-p">Flours, Grains & More</p>
        <p className="foot-p">Cooking Pasters & Sauces</p>
        <p className="foot-p">Cooking Spices & Powders</p>
        <p className="foot-p">Salt, Sugar & Substitutes</p>
        <p className="foot-p">Oils</p>
      </div>
    </div>
    </div>  );
}

export default Footer;