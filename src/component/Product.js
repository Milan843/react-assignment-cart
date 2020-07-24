import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
const Product = ({ products, setSelectedItem }) => {
  let [counter, setCounter] = useState({ value: "", qty: 0 });
  // console.log(products[0].label);
  const productList = products.map((prod) => {
    const displayCounter =
      prod.value === counter.value && counter.qty > 0 ? true : false;
    // let displayCounter
    // if(prod.value===counter.value && counter.qty > 0){
    //     displayCounter=true
    // }else{
    //     displayCounter=false
    //     setCounter({value:"",qty:0} )
    // }
    // console.log(displayCounter);

    let handleIncrement = (currentValue) => {
      //   console.log(counter,"1");
      if (counter.value === currentValue) {
        setCounter({ value: currentValue, qty: counter.qty + 1 });
      } else {
        setCounter({ value: currentValue, qty: 1 });
      }
    //   console.log(counter, "2");
    };

    let handleDecrement = (currentValue) => {
      setCounter({ value: currentValue, qty: counter.qty - 1 });
    };
    return (
      <div
        key={prod.value}
        // className="ui grid"
      >
        <div className="ui grid">
          <div className="four wide column">
            <label className="ui label"> {prod.label}</label>
          </div>
          <div className="four wide column">
            <label className="ui label"> {prod.price}</label>
          </div>
          <ButtonGroup
            className="four wide column"
            size="small"
            aria-label="small outlined button group"
          >
            <Button onClick={() => handleIncrement(prod.value)}>+</Button>
            {displayCounter && <Button disabled>{counter.qty}</Button>}
            {displayCounter && (
              <Button onClick={() => handleDecrement(prod.value)}>-</Button>
            )}
          </ButtonGroup>
          <div className="two wide column">
            <button onClick={() => setSelectedItem(counter,displayCounter)}> ADD</button>
            {/* <div class="ui mini message">This is a mini message.</div> */}
          </div>
        </div>
      </div>
    );
  });
  return (
    <div>
      <h1 className="ui huge header center">Product section</h1>
      {productList}
    </div>
  );
};
export default Product;
