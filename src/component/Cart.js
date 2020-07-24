import React, { useState, useEffect } from "react";

const Cart = ({ selectedItem, products, onDelete }) => {
  const [Total, setTotal] = useState(0);

  useEffect(() => {
      let totl=0
    selectedItem.map((item) => {
      products.map((prod) => {
        if (prod.value === item.value) {
            totl=totl + (prod.price * item.qty)
        }
      });
    });
    setTotal(totl);
    // return () => {
    //   document.body.removeEventListener('click', onBodyClick);
    // };
  }, [selectedItem]);
  const showItems = selectedItem.map((item) => {
    return products.map((prod) => {
      //   console.log(prod.value, item.value);

      if (prod.value === item.value) {
        return (
          <tr>
            <td>{prod.label}</td>
            <td>{prod.price}</td>
            <td>{item.qty}</td>
            <td>{prod.price * item.qty}</td>
            <td>
              <i
                class="trash alternate icon"
                onClick={() => onDelete(item.value)}
              ></i>
            </td>
          </tr>
        );
      } else {
        return null;
      }
    });
  });

  return (
    <div>
      <div>
        <h1 className="ui huge header center">Cart section</h1>
      </div>
      <div>
        <table class="ui celled table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Unit Price</th>
              <th>Quantity</th>
              <th>Final Price</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {showItems}
          </tbody>
        </table>
      </div>
      <div>
        <h3 className="ui huge header center">Total : {Total}</h3>
            

      </div>
    </div>
  );
  //   return <div>{showItems}</div>;
};
export default Cart;
