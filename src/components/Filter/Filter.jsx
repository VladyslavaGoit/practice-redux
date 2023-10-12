import { Button } from 'components/Button/Button';
import { useSelector } from 'react-redux';
import { filterStatus } from 'redux/constants';
import { getFilterStatus } from 'redux/selectors';
import { ButtonsList, Title } from './Filter.styled';

export const Filter = () => {
  const filter = useSelector(getFilterStatus);
  const { all, active, completed } = filterStatus;
  return (
    <div>
      <Title>Filter by status</Title>
      <ButtonsList>
        <li>
          <Button selected={filter === all}>All</Button>
        </li>
        <li>
          <Button selected={filter === active}>Active</Button>
        </li>
        <li>
          <Button selected={filter === completed}>Completed</Button>
        </li>
      </ButtonsList>
    </div>
  );
};
