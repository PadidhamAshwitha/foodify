// // import { useContext, useEffect, useState } from "react";
// // import UserContext from "../utilities/UserContext";

// // const Header = () => {
// //     const { loggedInUser } = useContext(UserContext);

// //     // console.log(loggedInUser);
    
// //     return (
// //         <div className="flex justify-between border border-solid border-black rounded-md p-4 bg-green-100">
            
// //             <div className="flex items-center">
// //                 <ul className="flex  ">
// //                     <li className="p-2"><Link to= "/"> Home </Link></li>
// //                     <li className="p-2"><Link to= "/about"> About Us </Link></li>
// //                     <li className="p-2"><Link to= "/contact"> Contat Us</Link></li>
// //                     <li className="p-2 font-bold"><Link to= "/cart" > Cart - {cartItems.length} items </Link></li>
                    
// //                     <li className="p-2"> {loggedInUser} </li>
// //                 </ul>
                
// //             </div>
// //         </div>

// //     );
// // };

// // export default Header;




// // import UserContext from "../utilities/UserContext";
// // import UserClass from "./UserClass";
// // import React from "react";

// // class About extends React.Component {
// //     constructor(props) {
// //         super(props);
// //         //console.log("parent constructor called");
// //     };

// //     render() {
// //         return (
// //             <div>
// //                 <h1>About Us</h1>
// //                 <UserContext.Consumer>
// //                     {({ loggedInUser }) => <h1 className="text-xl font-bold">{loggedInUser}</h1>}
// //                 </UserContext.Consumer>
// //                 <h2>We are from ashwitha solutions about page</h2>
// //                 <UserClass name={"First "} location={"Hyderabad (class)"}/>
// //                 <User/>
// //             </div> 
// //         );
// //     };
// // };

// // export default About;



// const Sum = ({items}) => {
//     const makeCostList = ({items}) => {
//         const itemsCost = [];
//         for(let i=0; i<items.length;i++){
//             const item = items[i];
//             itemsCost.push(item.card.info.defaultPrice ? item.card.info.defaultPrice / 100 : item.card.info.price / 100)
//             console.log(item);
//         }
//         return itemsCost;
//        // console.log(itemsCost);
//     }
// console.log(makeCostList(items));
// console.log(items);
//     return 
// };

// // module.exports = {sum};
// export default Sum;

