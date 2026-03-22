import { cacheLife } from 'next/cache'
import TaskList from "../components/TaskList/TaskList";

type Todo = {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
};

async function getTasks(): Promise<Todo[]> {
  'use cache'
  cacheLife('hours')

  const res = await fetch(
    "https://jsonplaceholder.typicode.com/todos?_limit=10"
  );
  return res.json();
}

export default async function Page() {
  const tasks = await getTasks();

  return (
    <div style={{ minHeight: "100vh", background: "#f9fafb", padding: "48px 16px" }}>
      <TaskList tasks={tasks} />
    </div>
  );
}