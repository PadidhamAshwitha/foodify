import { useDispatch, useSelector } from "react-redux";
// import ItemMenuList from "./ItemMenuList";
import CartItemsList from "./CartItemsList";
import { clearCart } from "../utilities/cartSlice";
import Sum from "./sum";

const Cart = () =>{
    const cartItems = useSelector((store)=>store.cart.items);

    // console.log(cartItems);
    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart());
    }
    
    return (
        <div className="p-4 m-4 text-center ">
            <div className="flex justify-center">
            <h1 className="font-bold text-lg m-4">Cart Items</h1>
            <button className="bg-black text-white m-2 p-2 rounded-lg" onClick={handleClearCart}>Clear Cart</button>
            </div>
            {cartItems.length === 0 ? <h3>Add items to the Cart </h3> : <h3>Here are the items you added to cart</h3> }
            <div className="w-6/12 m-auto border">
                <CartItemsList items={cartItems} />
            </div>
            <div>
                {/* <Sum items={cartItems} /> */}
            </div>
        </div>
    );
};
export default Cart;