import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";
import { useSelector } from "react-redux";
import { selectNameFilter } from "../../redux/filtersSlice";
import s from './SearchBox.module.css';

const SearchBox = () => {
  const filter = useSelector(selectNameFilter);
  const dispatch = useDispatch();
  const handleFilter = (event) => dispatch(changeFilter(event.target.value));
  return (

    <div className={s.searchBoxContainer}>
      <label className={s.searchBoxLabel}>
        Find contacts by name
        <input
          className={s.searchBoxInput}
          type="text"
          value={filter}
          onChange={handleFilter}
        />
      </label>
    </div>
  );
};


export default SearchBox;