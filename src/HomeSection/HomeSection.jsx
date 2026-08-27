import styles from "./HomeSection.module.css"
import HomeImg from "../assets/Home img 2.png"

const HomeSection = ()=>{
    return(<>
    <section className={styles["Container"]}>
        <div className={styles["imgContainer"]}>
            <img src={HomeImg} alt="no img"/>
        </div>
        <div className={styles["infoContainer"]}>
            <h3>السلام عليكم,انا</h3>
            <h1>مستر باسم بدر</h1>
            <p>
               معلم لغه عربيه
            </p>
        </div>

    </section>
    
    </>)
}
export default HomeSection;