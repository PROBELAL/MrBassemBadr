import { Link } from "react-router-dom";
import logoImg from "../assets/logo3.jpg"
import styles from "./Header.module.css";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux"
import {toggleIsLoggedIn, toggleIsAdmin} from "../Store/AuthSlice"
import SearchBar from "../SearchBar/SearchBar";
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem("userToken");
    const cartItems = useSelector((state) => state.cartReducer.items);
    const isAdmin = useSelector((state)=>state.AuthReducer.isAdmin);
    const dispatch= useDispatch();
    const handleLogout = () => {
        
        localStorage.removeItem("userToken");
        
       
        navigate("/");
    };
    
    return (
        <header className={styles.headerContainer}>
            
            
            <div className={styles.logoContainer}>
                <Link to="/">
                    <h2>باسم بدر</h2>
                </Link>
            </div>
            
           
            <ul className={styles["nav-links"]}>
                <li><a href="#pizza-section">اولى ثانوى</a></li>
                <li><a href="#burger-section">تانيه ثانوى</a></li>
                <li><a href="#shawerma-section">تالته ثانوى</a></li>
            </ul>
            
            
            <div className={styles["headerFuncs"]}>
                <SearchBar/>
                <Link to="/cart" className={styles.cartIconContainer}>
                   {token ? (<FaShoppingCart size={24} />):(<FaShoppingCart size={24} style={{display:"none"}} />)} 
                    {cartItems.length > 0 && (
                        <span className={styles.badge}>
                            {cartItems.length}
                        </span>
                    )}
                </Link>
                {/*<button onClick={() => dispatch(toggleIsAdmin())}>isAdmin</button> */}
                {token ? (
                    <button onClick={handleLogout} className={styles["loginBtn"]}>تسجيل الخروج</button>
                    ) : (
                    <Link to="/login">
                        <button className={styles["loginBtn"]}>تسجيل الدخول</button>
                    </Link>
                )}
                
            </div>
                
        </header>
    );
}

export default Header;