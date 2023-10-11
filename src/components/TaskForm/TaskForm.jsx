import { Button } from 'components/Button/Button';
import { Form, Input } from './TaskForm.styled';

export const TaskForm = () => {
  return (
    <Form>
      <Input type="text" placeholder="Enter task text..." />
      <Button type="submit">Add Task</Button>
    </Form>
  );
};
