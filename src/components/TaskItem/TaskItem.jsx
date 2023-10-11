export const TaskItem = ({ task: { completed, text } }) => {
  return (
    <div>
      <input type="checkbox" checked={completed} />
      <p>{text}</p>
      <button>Delete</button>
    </div>
  );
};
