import styles from "./SearchBar.module.css"
import { useDispatch,useSelector } from "react-redux";
import { setSearchTerm } from "../Store/ProductSlice";
const SearchBar=()=>{
    const dispatch = useDispatch();
    const searchTerm = useSelector((state) => state.ProductData.searchTerm);
    const handleSearch=(e)=>{
        dispatch(setSearchTerm(e.target.value))
    }
    return(<>
        <section className={styles.searchContainer}>
            <input 
                type="text" 
                placeholder="Search for a meal..." 
                value={searchTerm}
                onChange={(e)=>handleSearch(e)}
                className={styles.searchInput}
            />
        </section>
    </>);
}
export default SearchBar