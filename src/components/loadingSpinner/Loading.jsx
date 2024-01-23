import styles from "./Loading.module.css";

function Loading() {
  return (
    <div className={styles["loading-container"]}>
      <p className={styles["loading__text"]}>Loading...</p>
    </div>
  );
}

export default Loading;
