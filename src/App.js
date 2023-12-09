import { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { nanoid } from "nanoid";
import { Title } from "./components/Title";
import { TodoForm } from "./components/ToDoForm";
import { EditTodoForm } from "./components/TodoEditForm";
import { TodoList } from "./components/TodoList";
import { Container } from "./components/Styles.styled";

const KEY_TODO_LIST = "tasks";

export const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem(KEY_TODO_LIST));
    if (storedTasks) {
      setTodos(storedTasks);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(KEY_TODO_LIST, JSON.stringify(todos));
  }, [todos]);

  const AddTask = (todo) => {
    setTodos([
      ...todos,
      { id: nanoid(), task: todo, completed: false, isEditing: false },
    ]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));

    if (setTodos) {
      toast.success("Task deleted", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const editTask = (task, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  };

  return (
    <>
      <Title />
      <Container>
        <TodoForm addTodo={AddTask} />
        {todos.map((todo) =>
          todo.isEditing ? (
            <EditTodoForm editTodo={editTask} task={todo} key={todo.id} />
          ) : (
            <TodoList
              key={todo.id}
              task={todo}
              deleteTodo={deleteTodo}
              editTodo={editTodo}
              toggleComplete={toggleComplete}
            />
          )
        )}
      </Container>

      <ToastContainer />
    </>
  );
};
