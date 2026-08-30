import React, { useState } from 'react';
import styles from "./Cart.module.css";
import { useSelector, useDispatch } from 'react-redux'; 
import CartItem from "../CartItem/CartItem";
import useFetchAndDispatch from "../CustomHooks/useFetchAndDispatch";
import { setCartItems } from "../Store/cartSlice";

const Cart = () => {
    const { loading, error } = useFetchAndDispatch('https://mr-bassem-badr-backend.vercel.app/cartitem', setCartItems);
    const cartItems = useSelector((state) => state.cartReducer.items);
    const total_cost = cartItems.reduce((total, item) => total + item.price, 0);
    
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        address: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const products_names = cartItems.map((Element) => {
        return `- ${Element.title} (${Element.price}جنيه )`; 
    });

    const handleConfirmation = () => {
        if (total_cost === 0) {
            alert("يجب اختيار كورس واحد على الأقل لإتمام الحجز");
            return;
        }

        if (!formData.name || !formData.phone || !formData.address) {
            alert("برجاء ملء جميع البيانات (الاسم، رقم التليفون، العنوان)");
            return;
        }

        const phoneNumber = "201094752357";
        const names_price = products_names.join("\n");
        
        const message = `طلب حجز جديد مع مستر باسم بدر \n\n` +
                        `البيانات الشخصية:\n` +
                        `الاسم: ${formData.name}\n` +
                        `رقم التليفون: ${formData.phone}\n` +
                        `العنوان: ${formData.address}\n` +
                        `الكورسات المطلوبة:\n` +
                        `${names_price}\n\n` +
                        `السعر الإجمالي: ${total_cost} جنيه`;

        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank'); 
    }

    if (loading) return <h2 style={{ textAlign: "center", marginTop: "50px" }}>جاري تحميل السلة...</h2>;
    if (error) return <h2 style={{ textAlign: "center", marginTop: "50px" }}>حدث خطأ: {error}</h2>;

    return (
        <>
        <section className={styles["container"]}>
                <div className={styles["Purchese"]}>
                    {cartItems.map((item) => <CartItem key={item._id} item={item}/>)}
                </div>
                
                <div className={styles["purchese-info"]}>
                    <div className={styles["FormContainer"]}>
                        <form className={styles["contact-form"]}>
                            
                            <div className={styles["input-group"]}>
                                <label htmlFor="name">الاسم</label>
                                <input type="text" id="name" className="btn" placeholder="الاسم" value={formData.name} onChange={handleChange} />
                            </div>

                            <div className={styles["input-group"]}>
                                <label htmlFor="phone">رقم التليفون</label>
                                <input type="number" id="phone" className="btn" placeholder="رقم التليفون" value={formData.phone} onChange={handleChange} />
                            </div>

                            <div className={styles["input-group"]}>
                                <label htmlFor="address">العنوان</label>
                                <input type="text" id="address" className="btn" placeholder="ادخل عنوانك" value={formData.address} onChange={handleChange} />
                            </div>

                        </form>
                    </div>
                    
                    <h2>السعر الإجمالي:{total_cost} جنيه</h2>                               

                    <div className={styles["purchases-container"]}>
                        <button type="button" onClick={handleConfirmation}>إتمام الشراء</button>
                    </div>

                </div>
        </section>
        </>
    );
}

export default Cart;