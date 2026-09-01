import styles from "./Card.module.css"
import { useDispatch } from "react-redux";
import { addItem } from "../Store/cartSlice"
import { deleteProduct } from "../Store/ProductSlice" 
import { FaShoppingCart, FaTrash } from "react-icons/fa";
import axios from 'axios';

const Card = ({ item }) => {
    const dispatch = useDispatch();
    
    const userRole = localStorage.getItem("userRole");
    const isAdmin = userRole === "admin";

    const addToCart = async () => {
        try {
            const token = localStorage.getItem("userToken");
            const response = await fetch('https://mr-bassem-badr-backend.vercel.app/cartitem', {
                method: "POST",
                headers: { "Content-Type": "application/json", "Authorization": token },
                body: JSON.stringify(item)
            });
            if (response.ok) {
                const savedItem = await response.json();
                dispatch(addItem(savedItem));
            } else {
                alert("يجب تسجيل الدخول أولاً لإضافة كورسات للسلة");
            }
        } catch (error) {
            console.error(error);
        }
    };

    const handleDelete = async () => {
        if (!window.confirm("هل أنت متأكد من مسح هذا المنتج؟")) return;

        try {
            const token = localStorage.getItem("userToken");
            
            await axios.delete(`https://mr-bassem-badr-backend.vercel.app/product/${item._id}`, {
                headers: {
                    "Authorization": token
                }
            });

            dispatch(deleteProduct(item._id));
            alert("تم مسح المنتج بنجاح!");

        } catch (error) {
            console.error(error);
            if (error.response) {
                alert(error.response.data.message);
            } else {
                alert("فشل مسح المنتج من السيرفر");
            }
        }
    };

    return (
        <div className={styles["card-container"]}>
            
            {isAdmin && (
                <button onClick={handleDelete} className={styles["deleteCardBtn"]}>
                    <FaTrash />
                </button>
            )}

            <div 
                className={styles["card-image"]} 
                style={{ backgroundImage: `url(${item.image})` }} 
            />
            
            <div className={styles["card-info"]}>
                <h2>{item.title}</h2>

                <div className={styles["content-container"]}>
                    {item.ingredients.map((ingredient, index) => (
                        <div key={index} className={styles["content"]}>
                            <h5>{ingredient.name}</h5>
                        </div>
                    ))} 
                </div>

                <p className={styles["description"]}>
                    {item.description}
                </p>

                <div className={styles["purchases-container"]}>
                    <h2>{item.price} جنيه</h2>
                    <button onClick={addToCart}>اضف الى السله <FaShoppingCart/></button>
                </div>
            </div>
        </div>
    );
}

export default Card;