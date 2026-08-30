import styles from "./CartItem.module.css";
import { FaRegTrashAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { removeItem } from "../Store/cartSlice"; 


const CartItem = ({ item }) => {
    
    const dispatch = useDispatch();
    const  handleDelete= async()=>{
        try{
            const response= await fetch(`https://mr-bassem-badr-backend.vercel.app/cartitem/${item._id}`,{method: 'DELETE'});
            if (response.ok) {
                dispatch(removeItem(item._id));
            } else {
                console.error("REMOVE WENT WRONG ");
            }

        }catch(error){
            console.error(error);
        }
        

    }

    return (
        <div className={styles.cartItem}>
            
           
            <div className={styles.imageContainer}>
                <img src={item.image} alt={item.title} />
            </div>

           
            <div className={styles.details}>
                <h3>{item.title}</h3>
                <p className={styles.price}>{item.price} جنيه</p>
            </div>

            
            <button 
                className={styles.removeBtn} 
                onClick={(e)=>handleDelete(e)}
            >
                <FaRegTrashAlt />
            </button>
            
        </div>
    );
};

export default CartItem;