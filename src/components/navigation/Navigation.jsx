import { useEffect, useState } from "react";
import styles from "./Navigation.module.css";

function Navigation() {
  const [isDark, setIsDark] = useState(false);

  useEffect(
    function () {
      isDark
        ? document.body.classList.add("dark-theme")
        : document.body.classList.remove("dark-theme");
    },
    [isDark]
  );

  function handleChecked() {
    setIsDark(!isDark);
  }

  return (
    <nav className={styles.header__navigation}>
      <ul className={styles["header__nav-list"]}>
        <li>
          <h1 className={styles["heading-primary"]}>Where in the world?</h1>
        </li>

        <li>
          <div className={styles["btn-dark-container"]}>
            <button
              onClick={() => handleChecked()}
              className={styles["btn-toggle-dark"]}
              role="button"
              aria-label="Dark Theme Toggle"
            >
              {isDark ? (
                <ion-icon
                  name="moon"
                  className={styles["icon-light-theme"]}
                ></ion-icon>
              ) : (
                <ion-icon
                  name="moon-outline"
                  className={styles["icon-light-theme"]}
                ></ion-icon>
              )}
            </button>

            <p className={styles["dark-theme-label"]}>Dark Mode</p>
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
