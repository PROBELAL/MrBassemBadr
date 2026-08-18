 import styles from "./PizzaSection.module.css"

import Card from "../Card/Card"

import {PizzaItems} from "../data"

const PizzaSection=()=>{

    return(<>

        <section id="pizza-section" className={styles["container"]}>

            <div className={styles["title"]}>

                    <h2>Pizza Section</h2>

            </div>

            <div className={styles["cards"]}>

                {PizzaItems.map((pizza)=><Card key={pizza.id} item={pizza}/>)}



            </div>

        </section>

   

   

   

    </>);

}

export default PizzaSection;