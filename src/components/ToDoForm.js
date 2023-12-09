import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ButtonAdd, Container, IconPlus, TextInput } from "./Styles.styled";

export const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const sendSubmit = (e) => {
    e.preventDefault();

    setValue("");

    if (!value) {
      toast.warn("Please, fill field", {
        position: toast.POSITION.TOP_RIGHT,
      });
      return;
    }

    addTodo(value);

    if (value) {
      toast.success("Task added", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  return (
    <div>
      <form onSubmit={sendSubmit}>
        <Container>
          <TextInput
            type="text"
            placeholder="Add task"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <ButtonAdd type="submit">
            <IconPlus />
          </ButtonAdd>
        </Container>

        <ToastContainer />
      </form>
    </div>
  );
};
