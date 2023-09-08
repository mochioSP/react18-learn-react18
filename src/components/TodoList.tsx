import { useQuery } from "@tanstack/react-query";
import axios from "axios";

type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

const fetchTodos = async () => {
  const result = await axios.get<Todo[]>("https://jsonplaceholder.typicode.com/todos");
  return result.data;
};

export const Todo = () => {
  const { data } = useQuery<Todo[]>(["Todos"], fetchTodos);
  return (
    <div style={{ height: "300px", border: "2px solid gray", background: "mistyrose", overflowY: "scroll" }}>
      <h2>Todo</h2>
      {data?.map((todo) => (
        <p key={todo.id}>{todo.title}</p>
      ))}
    </div>
  );
};
