import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filter/filterSlice';
import { getFilterValue } from 'redux/filter/selectors';
import { Label, Input } from './Filter.styled';

function Filter() {
  const dispatch = useDispatch();
  const filterValue = useSelector(getFilterValue);
  return (
    <Label>
      Find contacts by name
      <Input
        name="filter"
        type="text"
        onChange={event => dispatch(setFilter(event.currentTarget.value))}
        value={filterValue}
      />
    </Label>
  );
}

export default Filter;
