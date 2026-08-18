import styles from "./Slider.module.css";
import sliderImg1 from "../assets/imgSlider1.jpg";
import sliderImg2 from "../assets/imgSlider2.jpg";
import sliderImg3 from "../assets/imgSlider3.jpg";

const Slider = () => {
    // دي الدالة اللي هتحرك السلايدر للصورة المطلوبة بدقة
    const handleScrollToImage = (imageId) => {
        const imageElement = document.getElementById(imageId);
        if (imageElement) {
            imageElement.scrollIntoView({
                behavior: "smooth",
                inline: "start", 
                block: "nearest" 
            });
        }
    };

    return (
        <section className={styles["container"]}>
            <div className={styles["slider-wrapper"]}>
                <div className={styles["slider"]}>
                    <img src={sliderImg1} id="img-1" alt="slide 1"/>
                    <img src={sliderImg2} id="img-2" alt="slide 2"/>
                    <img src={sliderImg3} id="img-3" alt="slide 3"/>
                </div>
                <div className={styles["slider-nav"]}>
                    
                    <button onClick={() => handleScrollToImage("img-1")}></button>
                    <button onClick={() => handleScrollToImage("img-2")}></button>
                    <button onClick={() => handleScrollToImage("img-3")}></button>
                </div>
            </div>
        </section>
    );
}

export default Slider;