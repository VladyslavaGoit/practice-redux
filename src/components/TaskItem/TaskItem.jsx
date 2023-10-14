import { useDispatch } from 'react-redux';
import { deleteTask, toggleCompleted } from 'redux/actions';

export const TaskItem = ({ task: { id, completed, text } }) => {
  const dispatch = useDispatch();
  const handleDeleteTask = () => dispatch(deleteTask(id));
  const handleToggle = () => dispatch(toggleCompleted(id));
  return (
    <div>
      <input type="checkbox" checked={completed} onChange={handleToggle} />
      <p>{text}</p>
      <button onClick={handleDeleteTask}>Delete</button>
    </div>
  );
};
