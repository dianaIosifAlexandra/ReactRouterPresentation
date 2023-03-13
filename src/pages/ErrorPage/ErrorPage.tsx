import noResultsImage from "../../assests/no-results-illustration-a.svg";

import styles from "./errorPage.module.scss";

const ErrorPage = () => {
  console.log("Error page log");

  return (
    <div className={styles.noResultsContainer}>
      <div className={styles.innerContainer}>
        <img
          className={styles.noResultsTextMessage}
          src={noResultsImage}
          height={300}
          alt=""
        />
        <h2 className={styles.noResultsTextMessage}>This page is not found</h2>
      </div>
    </div>
  );
};

export default ErrorPage;
