import { Link } from "react-router-dom";
import logoImg from "../assets/logo2.png";
import styles from "./Header.module.css";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux"
import {toggleIsLoggedIn, toggleIsAdmin} from "../Store/AuthSlice"
import SearchBar from "../SearchBar/SearchBar";

const Header = () => {
    const cartItems = useSelector((state) => state.cartReducer.items);
    const isAdmin = useSelector((state)=>state.AuthReducer.isAdmin);
    const dispatch= useDispatch();
    
    return (
        <header className={styles.headerContainer}>
            
            
            <div className={styles.logoContainer}>
                <Link to="/">
                    <img className={styles.logo} src={logoImg} alt="Logo" />
                </Link>
            </div>
            
           
            <ul className={styles["nav-links"]}>
                <li><a href="#pizza-section">Pizza</a></li>
                <li><a href="#burger-section">Burger</a></li>
                <li><a href="#shawerma-section">Shawerma</a></li>
            </ul>
            
            
            <div className={styles["headerFuncs"]}>
                <SearchBar/>
                <Link to="/cart" className={styles.cartIconContainer}>
                    <FaShoppingCart size={24} />
                    {cartItems.length > 0 && (
                        <span className={styles.badge}>
                            {cartItems.length}
                        </span>
                    )}
                </Link>
                <button onClick={() => dispatch(toggleIsAdmin())}>isAdmin</button>
            </div>
                
        </header>
    );
}

export default Header;