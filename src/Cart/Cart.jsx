import styles from "./Cart.module.css"
import { useSelector, useDispatch } from 'react-redux'; 

import CartItem from "../CartItem/CartItem";
const Cart = () => {
    const cartItems = useSelector((state) => state.cartReducer.items);
    const total_cost = cartItems.reduce((total, item) => total + item.price, 0);
    const products_info = cartItems.map((Element) => {
    return {
        title: Element.title, 
        price: Element.price
    };
    });
    const products_names = cartItems.map((Element) => {
    return `${Element.title} (${Element.price}$)`; 
    });
    const handleConfirmation=()=>{
        if(total_cost>0){
            const phoneNumber = "201094752357";
            const names_price=products_names.join("\n");
            const message =`لقد طلبت ${names_price} \n والسعر الاجمالى ${total_cost}$`;
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