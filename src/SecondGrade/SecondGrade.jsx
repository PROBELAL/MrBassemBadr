import styles from "./SecondGrade.module.css"
import { useSelector, useDispatch } from "react-redux"
import { useState } from "react"
import Card from "../Card/Card"
import { addProduct } from "../Store/ProductSlice" 
import { GiFullPizza } from "react-icons/gi"; 
import { TbMeat } from "react-icons/tb";
import { LuSalad } from "react-icons/lu";
import { CiFries } from "react-icons/ci";
import { GiHamburger } from "react-icons/gi";

const BurgerSection = () => {
    const dispatch = useDispatch();
    const Products = useSelector((state) => state.ProductData.Products);
    const searchTerm = useSelector((state) => state.ProductData.searchTerm);
    
    const burgerItems = Products.filter((element)=>element.category==="تانيه ثانوى"&& 
            element.title.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const isAdmin = useSelector((state)=>state.AuthReducer.isAdmin);
    
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [formData, setFormData] = useState({
        title: "",
        image: "",
        price: "",
        description: "",
        category: "Burger" 
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
            category: "Burger", 
            ingredients: [
                { name: formData.category , icon: GiHamburger },
                { name: "Meat", icon: TbMeat },
                { name: "Fries", icon: CiFries}
            ] 
        };

        dispatch(addProduct(newBurger));
        
        setFormData({ title: "", image: "", price: "", description: "", category: "Burger" });
        setIsModalOpen(false);
    };

    return (
        <section id="burger-section" className={styles["container"]}>

            <div className={styles["title"]}>
                <h2>تانيه ثانوى</h2>
            </div>

            <div className={styles["cards"]}>
                
                { burgerItems.length > 0? burgerItems.map((item) => <Card key={item.id} item={item} />):"Nothing matches your search 🥲"}
                
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