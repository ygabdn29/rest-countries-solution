import styles from "./SearchInput.module.css";

function SearchInput({ search, onSearch }) {
  return (
    <div className={styles["country__search-container"]}>
      <input
        type="search"
        placeholder="Search a country..."
        className={styles["country__search-input"]}
        value={search}
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
}

export default SearchInput;
