import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ButtonAdd, Container, IconPlus, TextInput } from "./Styles.styled";

export const TodoForm = ({ addTodo, editTodo }) => {
  const [value, setValue] = useState("");

  const sendSubmit = (e) => {
    e.preventDefault();

    if (value === "") {
      toast.warn("Please, fill field", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000,
      });
      return;
    }

    setValue("");
    addTodo(value);

    if (value) {
      toast.success("Task added", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000,
      });
      return;
    }

    if (value) {
      toast.success("Task success edited", {
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

        <ToastContainer newestOnTop={false} />
      </form>
    </div>
  );
};
