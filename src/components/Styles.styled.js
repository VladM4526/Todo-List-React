import styled from "styled-components";

import { GoPlus } from "react-icons/go";
import { MdDone } from "react-icons/md";
import { FaPen, FaTrashAlt } from "react-icons/fa";

export const TitleApp = styled.h1`
  font-size: 36px;
  font-weight: 250;
  line-height: 1.1;
  text-align: center;
  margin-top: 60px;
`;

export const Container = styled.div`
  width: 700px;
  display: block;
  position: relative;
  margin: 0 auto;
  margin-top: 30px;
`;

export const TextInput = styled.input`
  width: 640px;
  border-radius: 20px;
  border: 5px solid #000;
  outline: none;
  padding: 14px 24px;
  font-size: 36px;
  font-weight: 250;
  line-height: 1.1;
`;

export const ButtonAdd = styled.button`
  border: none;
  outline: none;
  position: absolute;
  width: 50px;
  height: 50px;
  top: 11px;
  right: 28px;
  background: #1ac63f;
  padding: 11px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

export const IconPlus = styled(GoPlus)`
  width: 30px;
  height: 30px;
  color: #fff;
`;

export const ContainerTaskList = styled.ul`
  margin: 0 auto;
`;

export const ContainerTaskListItem = styled.li`
  width: 649px;
  background: #1ac63f;
  border-radius: 20px;
  padding: 14px 24px;
  margin-top: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:first-child {
    margin-top: 42px;
  }
`;

export const TitleTask = styled.p`
  font-size: 36px;
  font-weight: 600;
  line-height: 1.1;
  color: #fff;
`;

export const ContainerIconsList = styled.ul`
  display: flex;
`;

export const ContainerIconsListItem = styled.li`
  margin-left: 16px;

  &:first-child {
    margin-left: 0px;
  }
`;

export const IconEditContainer = styled.div`
  width: 32px;
  height: 32px;
  background: #e21313;
  padding: 9px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  cursor: pointer;
`;

export const IconEdit = styled(FaPen)`
  width: 14px;
  height: 14px;
  color: #fff;
`;

export const IconDeleteContainer = styled.div`
  width: 32px;
  height: 32px;
  background: #e21313;
  padding: 9px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  cursor: pointer;
`;

export const IconDelete = styled(FaTrashAlt)`
  width: 14px;
  height: 14px;
  color: #fff;
`;

export const ContainerFormEdit = styled.form`
  margin-top: 42px;
`;

export const ContainerFormEditTasks = styled.div`
  width: 699px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

export const FormEditTasksInput = styled.input`
  width: 649px;
  background: #1ac63f;
  border: none;
  outline: none;
  padding: 19px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 36px;
  font-weight: 600;
  line-height: 1.1;
  border-radius: 20px;
  color: #fff;
`;

export const FormEditTasksInputButton = styled.button`
  position: absolute;
  top: 15px;
  right: 28px;
  border: none;
  outline: none;
  background: transparent;
`;

export const IconDone = styled(MdDone)`
  width: 24px;
  height: 24px;
  color: #fff;
`;
