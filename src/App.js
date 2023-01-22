import "./App.css";
import BakeryItem from "./components/BakeryItem";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */


function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const[CartContents, updateCart] = useState([]);
  const[CartTotal,updateTotal] = useState(0);

  function Click(item) {
    updateTotal(CartTotal + item.price)
    updateCart([...CartContents, item])
  }
  
  return (
    <div className="App">
      <h1>My Bakery</h1> {/* TODO: personalize your bakery (if you want) */}

      {bakeryData.map((item) => ( // TODO: map bakeryData to BakeryItem components
      <BakeryItem item={item} Click={Click} />// replace with BakeryItem component
      ))}

      <div>
        <h2>Cart</h2>
        {CartContents.map((item) => <p> {item.name} {item.price} </p>)}
        <p> Total {CartTotal} </p>
      </div>
    </div>
  );
}



export default App;
