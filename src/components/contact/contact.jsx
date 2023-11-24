import React from "react";

import styles from "./contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:luisangelherreraacosta@gmail.com">luisangelherreraacosta@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/luis-angel-herrera-acosta-221467281/">https://www.linkedin.com/in/luis-angel-herrera-acosta-221467281/</a>
        </li>
      </ul>
    </footer>
  );
};