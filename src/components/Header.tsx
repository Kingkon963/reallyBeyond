import React from "react";
import styles from "@styles/Header.module.scss";

function Header() {
  return (
    <header className={`${styles.header} px-64`}>
      <div className={styles.container}>
        <div className={styles.nav}>
          <div className={styles.logoWrapper}>
            <a href="/">
              <span>REALLY</span>
              <span>BEYOND</span>
            </a>
          </div>
          <nav>
            <ul>
              <li className={styles.color}>COLOR</li>
              <li className={styles.bw}>B&W</li>
            </ul>
          </nav>
          <a href="#footer" className={styles.contactUs}>
            {" "}
            Contact us{" "}
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
