import PropTypes from 'prop-types';
import s from './SearchBox.module.css';

const SearchBox = ({ value, onChange }) => {
  return (
    <div className={s.searchBoxContainer}>
      <label className={s.searchBoxLabel}>
        Find contacts by name
        <input
          className={s.searchBoxInput}
          type="text"
          value={value}
          onChange={onChange}
        />
      </label>
    </div>
  );
};

SearchBox.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SearchBox;