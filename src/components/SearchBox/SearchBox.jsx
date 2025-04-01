import css from "./SearchBox.module.css";
import { useSelector, useDispatch } from "react-redux";
import { changeFilter, selectNameFilter } from "../../redux/filterSlice";

function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleFilterChange = (event) =>
    dispatch(changeFilter(event.target.value));

  return (
    <div className={css.container}>
      <p className={css.text}>Find contacts by name</p>
      <input
        className={css.input}
        type="text"
        value={filter}
        onChange={handleFilterChange}
        placeholder="Enter name..."
      />
    </div>
  );
}

export default SearchBox;
