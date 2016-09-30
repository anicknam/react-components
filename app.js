// TODO

// var GroceryList = () => (
//   <ul>
//     <li>Milk</li>
//     <li>Bread</li> 
//   </ul>
// );

// ReactDOM.render(<GroceryList/>, document.getElementById("app"));

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// var Milk = () => (
//     <li>Milk</li>
// );

// var Bread = () => (
//    <li>Bread</li>
// );


// var GroceryList = () => (
// 	<ul> Grocery List
//      <Milk/>
//      <Bread/>
// 	</ul>
// );

// ReactDOM.render(<GroceryList/>, document.getElementById("app"));


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// var GroceryList = (props) => (
//   <ul> 
//     <li>{props.groceryItems[0]}</li>
//     <li>{props.groceryItems[1]}</li>
//     <li>{props.groceryItems[2]}</li>
//   </ul>
// );


// var App = () => (
//   <div> My Dynamic Grocery List
//   <GroceryList groceryItems={['Milk','Bread','Banana']}/>
//   </div>
// );


// ReactDOM.render(<App/>,document.getElementById('app'))


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// class GroceryListItem extends React.Component {

//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return (
//       <li>{this.props.groceryItem}</li>
//     );
//   }

// }

// var GroceryList = (props) => (
//   <ul>
//     {props.groceryItems.map(groceryItem =>
//       <GroceryListItem groceryItem={groceryItem} />
//     )}
//   </ul>
// );


// var App = () => (
//   <div> My Dynamic Grocery List
//   <GroceryList groceryItems={['Milk','Bread','Banana']}/>
//   </div>
// );

// ReactDOM.render(<App/>,document.getElementById('app'))

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

class GroceryListItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    	bold: false
    }
  }

  onListItemHover() {
    this.setState({
      bold: !this.state.bold
    });
  }

  render() {

  	var style = {
      fontWeight: this.state.bold ? 'bold' : 'normal'
    };

    return (
      <li style={style} 
      onMouseEnter={this.onListItemHover.bind(this)}
      onMouseLeave={this.onListItemHover.bind(this)}>
      {this.props.groceryItem}</li>
    );
  }

}

var GroceryList = (props) => (
  <ul>
    {props.groceryItems.map(groceryItem =>
      <GroceryListItem groceryItem={groceryItem} />
    )}
  </ul>
);


var App = () => (
  <div> My Dynamic Grocery List
  <GroceryList groceryItems={['Milk','Bread','Banana']}/>
  </div>
);

ReactDOM.render(<App/>,document.getElementById('app'))
















