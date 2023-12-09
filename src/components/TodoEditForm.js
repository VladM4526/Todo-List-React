import { useState } from "react";
import {
  ContainerFormEdit,
  ContainerFormEditTasks,
  FormEditTasksInput,
  FormEditTasksInputButton,
  IconDone,
  IconEditContainer,
} from "./Styles.styled";

export const EditTodoForm = ({ editTodo, task }) => {
  const [value, setValue] = useState(task.task);

  const handleSubmit = (e) => {
    e.preventDefault();
    editTodo(value, task.id);
  };
  return (
    <ContainerFormEdit onSubmit={handleSubmit}>
      <ContainerFormEditTasks>
        <FormEditTasksInput
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <FormEditTasksInputButton type="submit">
          <IconEditContainer>
            <IconDone />
          </IconEditContainer>
        </FormEditTasksInputButton>
      </ContainerFormEditTasks>
    </ContainerFormEdit>
  );
};
