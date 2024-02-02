import { useNavigate } from "react-router-dom";
import styles from "./Button.module.css";

function Button({ children }) {
  const navigate = useNavigate();
  return (
    <button
      className={styles["btn-back"]}
      onClick={(e) => {
        e.preventDefault();
        navigate("/");
      }}
    >
      {children}
    </button>
  );
}

export default Button;
