function SortingDropdown(props) {
  return (
    <div className="sorting-dropdown">
      <label >Sort by:</label>
      <select id="sort" value={props.sortOption || ""}
        onChange={(e) => props.onSortChange(e.target.value)}
        className="sort-select"
      >
        <option value="">Select Option</option>
        <option value="lowest-price">Lowest Price</option>
        <option value="highest-price">Highest Price</option>
        <option value="most-popular">Most Popular</option>
      </select>
    </div>
  );
}

export default SortingDropdown;
