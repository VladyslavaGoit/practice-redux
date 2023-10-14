import { nanoid } from 'nanoid';

export const addTask = text => ({
  type: 'tasks/addTask',
  payload: {
    id: nanoid(),
    completed: false,
    text,
  },
});

export const deleteTask = id => ({
  type: 'tasks/deleteTask',
  payload: id,
});

export const toggleCompleted = id => ({
  type: 'tasks/toggleCompleted',
  payload: id,
});

export const setStatusFilter = value => ({
  type: 'filters/setStatusFilter',
  payload: value,
});
