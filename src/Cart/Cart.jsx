import styles from "./Cart.module.css"
import { useSelector, useDispatch } from 'react-redux'; 

import CartItem from "../CartItem/CartItem";
const Cart = () => {
    const cartItems = useSelector((state) => state.cartReducer.items);
    const total_cost = cartItems.reduce((total, item) => total + item.price, 0);
    const handleConfirmation=()=>{
        if(total_cost>0){
            const phoneNumber = "";
            const message =`طلبك فى الطريق اليك بسعر ${total_cost}شامل التوصيل خلال 45 دقيقه `;
            const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
            window.open(url, '_blank'); 
        }
        else{
            alert("You need to buy a meal");
        }
        
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