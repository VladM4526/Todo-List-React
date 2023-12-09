import {
  ContainerIconsList,
  ContainerIconsListItem,
  ContainerTaskList,
  ContainerTaskListItem,
  IconDelete,
  IconDeleteContainer,
  IconEdit,
  IconEditContainer,
  TitleTask,
} from "./Styles.styled";

export const TodoList = ({ task, deleteTodo, editTodo, toggleComplete }) => {
  return (
    <>
      <ContainerTaskList>
        <ContainerTaskListItem>
          <TitleTask
            className={`${task.finished ? "completed" : "incompleted"}`}
            onClick={() => toggleComplete(task.id)}
          >
            {task.task}
          </TitleTask>
          <ContainerIconsList>
            <ContainerIconsListItem>
              <IconEditContainer onClick={() => editTodo(task.id)}>
                <IconEdit />
              </IconEditContainer>
            </ContainerIconsListItem>
            <ContainerIconsListItem>
              <IconDeleteContainer onClick={() => deleteTodo(task.id)}>
                <IconDelete />
              </IconDeleteContainer>
            </ContainerIconsListItem>
          </ContainerIconsList>
        </ContainerTaskListItem>
      </ContainerTaskList>
    </>
  );
};
