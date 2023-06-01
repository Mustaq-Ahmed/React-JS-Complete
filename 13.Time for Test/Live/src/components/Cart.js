import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../store/cartSlice";


const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();

    const clearCartHandler = () => {
        dispatch(clearCart());
    }

    return (
        <div>
            <h1 className="font-bold text-3xl">Cart Items</h1>
            <button onClick={clearCartHandler}
             className="p-2 m-2 bg-green-100 border">Clear Cart</button>
            {cartItems?.map((item) => <li className="font-bold text-xl p-2" key={item.id}>{item.name}</li>)}
        </div>
    )
}

export default Cart;