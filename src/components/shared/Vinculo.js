import styles from "./Link.module.css";
import { Link } from "react-router-dom";
function Vinculo({ Icon, text, to }) {
  return (
    <div>
      <Link to={to} className={styles.vinculo}>
        <Icon className={styles.icon} />
        {text && <span className={styles.text}>{text}</span>}
      </Link>
    </div>
  );
}
export default Vinculo;
