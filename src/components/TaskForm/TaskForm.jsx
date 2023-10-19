import { Button } from 'components/Button/Button';
import { useDispatch } from 'react-redux';
import { addTask } from 'redux/tasksSlice';
import { Form, Input } from './TaskForm.styled';

export const TaskForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    dispatch(addTask(form.elements.text.value));
    form.reset();
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Input type="text" name="text" placeholder="Enter task text..." />
      <Button type="submit">Add Task</Button>
    </Form>
  );
};
