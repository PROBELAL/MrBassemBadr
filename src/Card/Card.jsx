import styles from "./Card.module.css"
import { useDispatch } from "react-redux";
import {addItem} from "../Store/cartSlice"

import { FaShoppingCart } from "react-icons/fa";




const Card=({item})=>{
    const dispatch=useDispatch();
    function addToCart(){
        dispatch(addItem(item))
    }
    return(<>
        <div className={styles["card-container"]}>
            
                <div 
                    className={styles["card-image"]} 
                    style={{ backgroundImage: `url(${item.image})` }} 
                />
            
            
            <div className={styles["card-info"]}>
                <h2>{item.title}</h2>
                

                <div className={styles["content-container"]}>{
                    item.ingredients.map((ingredient,index)=>
                    <div key={index} className={styles["content"]}>
                       {/*<ingredient.icon/>*/}
                        <h5>{ingredient.name}</h5>
                    </div>
                    )}  
                </div>


                <p className={styles["description"]}>
                    {item.description}
                </p>
                <div className={styles["purchases-container"]}>
                    <h2>{item.price}$</h2>
                    <button onClick={addToCart}><FaShoppingCart/> Add to cart</button>
                </div>
            </div>
        </div>
    </>);
}
export default Card