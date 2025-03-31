import css from "./SearchBox.module.css";
import { useSelector, useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filterSlice";
import { selectNameFilter } from "../../redux/filterSlice";
import { useCallback } from "react";

function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleFilterChange = useCallback(
    (event) => dispatch(changeFilter(event.target.value)),
    [dispatch]
  );

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
