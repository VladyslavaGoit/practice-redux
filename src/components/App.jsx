import { useState } from 'react';
import { AppBar } from './AppBar/AppBar';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout/Layout';
import { TaskForm } from './TaskForm/TaskForm';
import { TaskList } from './TaskList/TaskList';

export const App = () => {
  const [tasks, _] = useState([]);

  return (
    <Layout>
      <AppBar />
      <TaskForm />
      {tasks && <TaskList tasks={tasks} />}
      <GlobalStyle />
    </Layout>
  );
};
