import styles from "./CartItem.module.css";
import { FaRegTrashAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { removeItem } from "../Store/cartSlice"; 

const CartItem = ({ item }) => {
    const dispatch = useDispatch();

    return (
        <div className={styles.cartItem}>
            
           
            <div className={styles.imageContainer}>
                <img src={item.image} alt={item.title} />
            </div>

           
            <div className={styles.details}>
                <h3>{item.title}</h3>
                <p className={styles.price}>{item.price}$</p>
            </div>

            
            <button 
                className={styles.removeBtn} 
                onClick={() => dispatch(removeItem(item.uniqueId))}
            >
                <FaRegTrashAlt />
            </button>
            
        </div>
    );
};

export default CartItem;