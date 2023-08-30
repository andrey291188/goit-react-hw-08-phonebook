import { useDispatch, useSelector } from "react-redux";
import { filterContact } from "store/phonebook/FilterReducer";


const FilterList = () => {
  const { filter } = useSelector(state => state.filter)
  const dispatch = useDispatch();

  const changeFilter = e => {
    const filterValue = e.currentTarget.value;
    dispatch(filterContact(filterValue))
  };

  return (
    <form className="d-flex top" role="search">
    <input className="form-control me-2" type="text" placeholder="Search" value={filter} onChange={changeFilter}/>
  </form>

  );
};

export default FilterList