import styles from "./BurgerSection.module.css"
import { useSelector, useDispatch } from "react-redux"
import { useState } from "react"
import Card from "../Card/Card"
import { addProduct } from "../Store/ProductSlice" 
import { GiFullPizza } from "react-icons/gi"; 
import { TbMeat } from "react-icons/tb";
import { LuSalad } from "react-icons/lu";

const BurgerSection = () => {
    const dispatch = useDispatch();
    const Products = useSelector((state) => state.ProductData.Products);
    
   
    const burgerItems = Products.filter((element)=>element.catigory==="Burger");
    
    const isAdmin = useSelector((state)=>state.AuthReducer.isAdmin);
    
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [formData, setFormData] = useState({
        title: "",
        image: "",
        price: "",
        description: "",
        catigory: "Burger" 
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault(); 

        
        const newBurger = {
            id: Date.now(), 
            title: formData.title,
            image: formData.image,
            price: Number(formData.price), 
            description: formData.description,
            catigory: "Burger", 
            ingredients: [
                { name: formData.catigory , icon: GiFullPizza },
                { name: "Meat", icon: TbMeat },
                { name: "Salad", icon: LuSalad }
            ] 
        };

        dispatch(addProduct(newBurger));

        
        setFormData({ title: "", image: "", price: "", description: "", catigory: "Burger" });
        setIsModalOpen(false);
    };

    return (
        <section id="burger-section" className={styles["container"]}>

            <div className={styles["title"]}>
                <h2>Burger Section</h2>
            </div>

            <div className={styles["cards"]}>
                
                {burgerItems.map((item) => <Card key={item.id} item={item} />)}
                
                {isAdmin &&(
                     <button 
                         className={styles["addBtn"]} 
                         onClick={() => setIsModalOpen(true)}
                    >
                    +
                    </button>
                )}
                
            </div>

            {isModalOpen && (
                <div className={styles["modalOverlay"]}>
                    <div className={styles["modalContent"]}>
                        
                        <button 
                            className={styles["closeBtn"]} 
                            onClick={() => setIsModalOpen(false)}
                        >
                            X
                        </button>

                        <h3>Add Product</h3>

                        <form onSubmit={handleSubmit} className={styles["addForm"]}>
                            <input 
                                type="text" 
                                name="title"
                                placeholder="Meal Title" 
                                value={formData.title}
                                onChange={handleChange}
                                required 
                            />
                            <input 
                                type="text" 
                                name="image"
                                placeholder="Img src" 
                                value={formData.image}
                                onChange={handleChange}
                                required 
                            />
                            <input 
                                type="number" 
                                name="price"
                                placeholder="Price" 
                                value={formData.price}
                                onChange={handleChange}
                                required 
                            />
                            <textarea 
                                name="description"
                                placeholder="Meal Description" 
                                rows="3"
                                value={formData.description}
                                onChange={handleChange}
                                required
                            ></textarea>
                            
                            <button type="submit">Add</button>
                        </form>

                    </div>
                </div>
            )}

        </section>
    );
}

export default BurgerSection;