import TaskCard from "../TaskCard/TaskCard";

type Todo = {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
};

type Props = {
  tasks: Todo[];
};

const TaskList = ({ tasks }: Props) => {
  return (
    <div
      style={{
        maxWidth: "680px",
        margin: "0 auto",
        background: "#ffffff",
        borderRadius: "20px",
        padding: "36px 32px",
        boxShadow: "0 8px 40px rgba(0,0,0,0.08)",
      }}
    >
      <div style={{ marginBottom: "28px" }}>
        <h1
          style={{
            margin: 0,
            fontSize: "28px",
            fontWeight: 800,
            color: "#111827",
          }}
        >
          Task List
        </h1>
        <p style={{ margin: "6px 0 0", fontSize: "14px", color: "#9ca3af" }}>
          Нажмите на карточку, чтобы изменить статус задачи
        </p>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            id={task.id}
            userId={task.userId}
            title={task.title}
            completed={task.completed}
          />
        ))}
      </div>
    </div>
  );
};

export default TaskList;