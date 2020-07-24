import React from "react";
import Product from "./component/Product";
import Cart from "./component/Cart";
const products = [
  {
    label: "Mobile",
    value: "p1",
    price: 100,
  },
  {
    label: "Laptop",
    value: "p2",
    price: 220,
  },
  {
    label: "Tv",
    value: "p3",
    price: 400,
  },
  {
    label: "Bike",
    value: "p4",
    price: 200,
  },
];
class App extends React.Component {
  state = { selectedItem: [],total:0 };
  // componentDidMount(){
  //     this.setState({selectedItem:[123]})
  // }
  setSelectedItem = (obj,displayCounter) => {
    // console.log(obj);
    // console.log("zero",obj,displayCounter);
if(!displayCounter){
   return alert("Quantity for this product is zero!")
}
    ///check whether obj.value is in state if yes then replace else append
    let itemIndex = -1;
    this.state.selectedItem.map((ob, index) => {
      if (ob && ob.value === obj.value) {
        itemIndex = index;
      }
    });
    // console.log(itemIndex);
    let newItems = [];
    if (itemIndex === -1) {
      newItems = [...this.state.selectedItem, obj];
    } else {
      newItems = [...this.state.selectedItem];
      newItems[itemIndex] = obj;
    }
    //    let newItems=itemIndex===-1 ? [...this.state.selectedItem,obj] :this.state.selectedItem[itemIndex]= obj
    //     console.log(obj);
    //    let newItems=[...this.state.selectedItem,obj]
    //    console.log(newItems);
    //    let uniqueItems=[...new Set(newItems)]
    //    console.log(uniqueItems);

    // this.setState({selectedItem:[...this.state.selectedItem,obj]})
    // console.log(newItems);

    this.setState({ selectedItem: newItems });

    // this.setState({selectedItem:[123]})
  };

  onDelete = (value) => {
    // console.log(value);
    const filteredItem = this.state.selectedItem.filter(
      (item) => item.value !== value
    );
    // console.log(filteredItem);
    this.setState({ selectedItem: filteredItem });
  };

  render() {
    // console.log(this.state);
    return (
      <div >
        <div>
          <Product setSelectedItem={this.setSelectedItem} products={products} />
        </div>
        <div className="ui sizer vertical segment">
          <Cart
            onDelete={this.onDelete}
            selectedItem={this.state.selectedItem}
            products={products}
          />
        </div>
      </div>
    );
  }
}

export default App;
