import React, { Children, useContext } from "react";
import { useState } from "react";
import styled from "styled-components";
import { TasksContext } from "../../contexts/TasksContext";
import Empty from "./components/Empty";
import Task from "./components/Task";

interface FormProps {
}

export default function Tasks(props: FormProps) {
  const { tasks } = useContext(TasksContext);

  const totalTasks = tasks.length

  const tasksConcludeds = tasks.filter(task => task.concluded === true)

  return (
    <Container>
      <CompletedTasks>
        <Created>
          Tarefas criadas <Display>{totalTasks}</Display>
        </Created>
        <Completed>
          Tarefas concluídas <Display>{tasksConcludeds.length} de {totalTasks}</Display>
        </Completed>
      </CompletedTasks>
      <ContainerTasks>
        {tasks.map((task) => {
          return <Task key={task.id} id={task.id} content={task.content} concluded={task.concluded} />;
        })}
      </ContainerTasks>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  max-width: 46rem;
  margin: 5.68rem auto 0;
  color: ${(props) => props.theme.colors.gray[300]};
`;
const CompletedTasks = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;
`;

const Created = styled.div`
  font-weight: bold;
  gap: 0.5rem;
  display: flex;
  color: ${(props) => props.theme.colors.base.primary};
`;

const Completed = styled.div`
  font-weight: bold;
  gap: 0.5rem;
  display: flex;
  color: ${(props) => props.theme.colors.base.secundary};
`;
const ContainerTasks = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  padding-top: 1.5rem;
  gap: 0.75rem;
  box-shadow: 0px -1px 0px ${(props) => props.theme.colors.background.shadowL};
`;

const Display = styled.div`
  padding: 0 0.5rem;
  border-radius: 10px;
  color: ${(props) => props.theme.colors.base.text};
  background: ${(props) => props.theme.colors.background.shadowL};
`;
