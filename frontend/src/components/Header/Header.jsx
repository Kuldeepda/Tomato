import React from "react";
import "./Header.css"; // Assuming you have a CSS file for styling
const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>Order your favourite food here</h2>
        <p>
          Choose form a diverse menu featuring a delectable array of dishes
          crafted with the finest ingredients and culinary expertise. Our meal
          satisfy your cravings and elevate your dining experience,delicious
          meal at a time.
        </p>
        <button>Veiw Menu</button>
      </div>
    </div>
  );
};

export default Header;
