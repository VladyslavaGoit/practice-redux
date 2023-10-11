import { TaskItem } from 'components/TaskItem/TaskItem';

export const TaskList = ({ tasks }) => {
  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>
          <TaskItem task={task} />
        </li>
      ))}
    </ul>
  );
};
