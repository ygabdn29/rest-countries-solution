import styles from "./Navigation.module.css";

function Navigation() {
  return (
    <nav className={styles.header__navigation}>
      <ul className={styles["header__nav-list"]}>
        <li>
          <h1 className={styles["heading-primary"]}>Where in the world?</h1>
        </li>

        <li>
          <div>
            <input type="checkbox" name="btn-dark" id="btn-dark" />

            <label htmlFor="btn-dark" className={styles["btn-theme-label"]}>
              Dark Mode
            </label>
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
