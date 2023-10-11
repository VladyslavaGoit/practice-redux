import { useState } from 'react';
import { AppBar } from './AppBar/AppBar';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout/Layout';
import { TaskForm } from './TaskForm/TaskForm';
import { TaskList } from './TaskList/TaskList';

export const App = () => {
  const [tasks, setTasks] = useState([]);

  return (
    <Layout>
      <AppBar />
      <TaskForm onAdd={setTasks} />
      {tasks && <TaskList tasks={tasks} />}
      <GlobalStyle />
    </Layout>
  );
};
