import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logoImg from "../assets/logo2.png";
import styles from "./Header.module.css";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
    const cartItems = useSelector((state) => state.cartReducer.items);
    return (
        <header className={styles.headerContainer}>
           
            <Link to="/">
                <img className={styles.logo} src={logoImg} alt="Logo" />
            </Link>
            
            <ul className={styles["nav-links"]}>
                <li><a href="#pizza-section">Pizza</a></li>
                <li><a href="#pizza-section">Pizza</a></li>
                <li><a href="#pizza-section">Pizza</a></li>
            </ul>
            
           
            <Link to="/cart" className={styles.cartIconContainer}>
                <FaShoppingCart size={24} />
                
                
                {cartItems.length > 0 && (
                    <span className={styles.badge}>
                        {cartItems.length}
                    </span>
                )}
            </Link>
        </header>
    );
}

export default Header;