import { Button } from 'components/Button/Button';
import { ButtonsList, Title } from './Filter.styled';

export const Filter = () => {
  return (
    <div>
      <Title>Filter by status</Title>
      <ButtonsList>
        <li>
          <Button>All</Button>
        </li>
        <li>
          <Button>Active</Button>
        </li>
        <li>
          <Button>Completed</Button>
        </li>
      </ButtonsList>
    </div>
  );
};
