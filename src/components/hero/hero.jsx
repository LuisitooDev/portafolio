import React from "react";

import styles from "./hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
    return( 
    <section className={styles.container}>
        <div>
            <h1 className={styles.title}>Hi, I am Luis Angel</h1>
            <p className={styles.description}>I'm a student who wants to be a full stack programmer, I'm every day learning new things about diferent technologies</p>
        </div>
        <img src={getImageUrl("hero/myaida.png")}/>
    </section>
)}