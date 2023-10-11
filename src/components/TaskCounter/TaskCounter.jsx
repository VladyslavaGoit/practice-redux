import { Title } from './TaskCounter.styled';

export const TaskCounter = () => {
  return (
    <div>
      <Title>Task</Title>
      <ul>
        <li>
          <p>Active: 0</p>
        </li>
        <li>
          <p>Completed: 0</p>
        </li>
      </ul>
    </div>
  );
};
