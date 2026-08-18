import styles from "./Cart.module.css"
import { useSelector, useDispatch } from 'react-redux'; 

import CartItem from "../CartItem/CartItem";
const Cart = () => {
    const cartItems = useSelector((state) => state.cartReducer.items);
    const total_cost = cartItems.reduce((total, item) => total + item.price, 0);
    const handleConfirmation=()=>{
        const phoneNumber = "201094752357";
        const message =`طلبك فى الطريق اليك بسعر ${total_cost}شامل التوصيل خلاص 45 دقيقه `;
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank'); 
    }

    return(
        <>
        <section className={styles["container"]}>
                <div className={styles["Purchese"]}>
                    {cartItems.map((item)=><CartItem key={item.uniqueId} item={item}/>)}

                </div>
                <div className={styles["purchese-info"]}>
                    <h2>Total Price is : {total_cost} </h2>
                    <div className={styles["purchases-container"]}>
                        
                        <button onClick={handleConfirmation} >Confirm Payment</button>

                    </div>

                </div>
                
        </section>
        
        </>

    );
   
}
export default Cart;