import TaskList from "../components/TaskList/TaskList";

type Todo = {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
};

export default async function Page() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/todos?_limit=10",
    { cache: "no-store" }
  );
  const tasks: Todo[] = await res.json();

  return (
    <div style={{ minHeight: "100vh", background: "#f9fafb", padding: "48px 16px" }}>
      <TaskList tasks={tasks} />
    </div>
  );
}