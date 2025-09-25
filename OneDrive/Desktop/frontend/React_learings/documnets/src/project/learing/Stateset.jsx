import React, { Component, useState } from "react";


// in class level state

// class Stateset extends Component{
//     constructor(props){
//         super(props);
//         this.state={
//             count: 0,
//             message: "srinath"
//         };
//     }
//     increment= () =>{
//       this.setState({count: this.state.count + 1});
//     };
//     decrement= () =>{
//       this.setState({count: this.state.count - 1});
//     };
//     render(){
//         return(
//             <div>
//                 <h1>{this.state.count}</h1>
//                 <button onClick={this.increment}>+</button>
//                 <button onClick={this.decrement}>-</button>
//             </div>
//         );

//     }
// }




// function Stateset (props){
//    const [count,setCount]=useState(0);
//     return(
//        <div>
//            <h1>count:{count}</h1>
//            <button onClick={()=>setCount(count+1)}>++</button>
//             <button onClick={()=>setCount(count-1)}>--</button>
//        </div>
//     )
// }


// REAL TIME EXAMPLE

// function Stateset ({initialCount,name}){
//   const [count,setCount]=useState(initialCount);
//   const[message,setMessage]=useState("Message!")
//   const increment=()=>{
//        setCount(count+1);
//        setMessage("You clicked +1")
//   }
//   const decrement=()=>{
//        setCount(count-1);
//        setMessage("You clicked -1")
//   }
//   return(
//     <div>
//          <h1>{name}counter</h1>
//          <p>Count: {count}</p>
//          <p>{message}</p>
//          <button onClick={increment}>++</button>
//          <button onClick={decrement}>--</button>
//     </div>
//   )
// }
// main.jsx
// {/* <Stateset initialCount ={0} name="srinath"/> */}
    // <Stateset initialCount ={5} name="Nani"/>



// Shopping Cart Item (Props + State)

// function Stateset ({name,price}){
//   const[quantity,setQuantity]=useState(0)
//   const increase =()=>{
//     setQuantity(quantity+1);
//   }
//   const decrease =()=>{
//     setQuantity(quantity>0 ? quantity-1 :0);
//   }
//   return(
//     <div>
//           <h1>{name}</h1>
//           <p>${price}</p>
//           <p>{quantity}</p>
//           <button onClick={increase}>++</button>
//           <button onClick={decrease}>--</button>
//           <p>Total :{price * quantity}</p>
//     </div>
//   )
// }
// Real-time Search Filter

function Stateset() {
  const fruits = ["Apple", "Banana", "Orange", "Mango"];

  function Search({ placeholder, data }) {
    const [query, setQuery] = useState("");
    const filtered = data.filter(item =>
      item.toLowerCase().includes(query.toLowerCase())
    );

    return (
      <div>
        <input
          type="text"
          placeholder={placeholder}
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
        <ul>
          {filtered.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }

  // Here is how we call it in the UI
  return (
    <div>
      <h1>Fruit Search</h1>
      <Search placeholder="Search fruits..." data={fruits} />
    </div>
  );
}




export default Stateset;
