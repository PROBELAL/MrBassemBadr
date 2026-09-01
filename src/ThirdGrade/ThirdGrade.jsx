import styles from "./ThirdGrade.module.css"
import { useSelector, useDispatch } from "react-redux"
import { useState } from "react"
import Card from "../Card/Card"
import { addProduct } from "../Store/ProductSlice" 
import { GiSandwich } from "react-icons/gi";
import { TbMeat } from "react-icons/tb";
import { CiFries } from "react-icons/ci";
import axios from 'axios';

const ShawermaSection = () => {
    
    const dispatch = useDispatch();
    const Products = useSelector((state) => state.ProductData.Products);
    const searchTerm = useSelector((state) => state.ProductData.searchTerm);
    
    const shawermaItems = Products.filter((element) => element.category === "تالته ثانوى" && 
            element.title.toLowerCase().includes(searchTerm.toLowerCase())); 
    
    const userRole = localStorage.getItem("userRole");
    const isAdmin = userRole === "admin";
    
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [formData, setFormData] = useState({
        title: "",
        image: "",
        price: "",
        description: "",
        category:"Shawerma" 
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); 

        try {
            const token = localStorage.getItem("userToken");

            const productData = {
                title: formData.title,
                image: formData.image,
                price: Number(formData.price), 
                description: formData.description,
                category: "تالته ثانوى",
                ingredients: [
                    { name: formData.category , icon: "GiSandwich" },
                    { name: "Meat", icon: "TbMeat" },
                    { name: "Fries", icon: "CiFries" }
                ] 
            };

            const response = await axios.post("https://mr-bassem-badr-backend.vercel.app/product", productData, {
                headers: {
                    "Authorization": token 
                }
            });

            dispatch(addProduct(response.data));
            
            alert("تم إضافة المنتج بنجاح في قاعدة البيانات!");
            setFormData({ 
                title: "",
                image: "",
                price: "",
                description: "",
                category: "Shawerma" 
            });
            setIsModalOpen(false);

        } catch (error) {
            console.error(error);
            if (error.response) {
                alert(error.response.data.message); 
            } else {
                alert("حدث خطأ في الاتصال بالسيرفر");
            }
        }
    };

    return (
        <section id="shawerma-section" className={styles["container"]}>

            <div className={styles["title"]}>
                <h2>تالته ثانوى</h2>
            </div>

            <div className={styles["cards"]}>
                
                {shawermaItems.length > 0 ? shawermaItems.map((item) => <Card key={item._id} item={item} />):"Nothing matches your search 🥲"}
                
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

export default ShawermaSection;