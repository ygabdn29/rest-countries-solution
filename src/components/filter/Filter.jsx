import styles from "./Filter.module.css";

function Filter({ regionFilter, onFilter }) {
  return (
    <select
      name="region"
      className={styles["country__filter-select"]}
      defaultValue={""}
      onChange={(e) => {
        e.preventDefault();
        onFilter(e.target.value);
      }}
      aria-label="Select for filtering countries based on region"
    >
      <option value={""}>Filter by Region</option>
      <option value={"Africa"}>Africa</option>
      <option value={"America"}>America</option>
      <option value={"Asia"}>Asia</option>
      <option value={"Europe"}>Europe</option>
      <option value={"Oceania"}>Oceania</option>
    </select>
  );
}

export default Filter;
