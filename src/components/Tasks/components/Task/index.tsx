import styled from "styled-components";
import CheckIcon from "../../../../assets/checkIcon";
import TrashDefault from "../../../../assets/trashDefault";
import { uuid } from "uuidv4";
import { useContext, useState } from "react";
import { TasksContext } from "../../../../contexts/TasksContext";

interface TaskProps{
  key:string
  content: string
  id:string
  concluded:boolean
}

export default function Task(props: TaskProps) {
  const {content, concluded, id} = props

  const {tasks, setTasks} = useContext(TasksContext)

  function handleConcludeTask(){
    const newTasks =tasks.map(task=>{
      if(task.id === id){
          task.concluded = !task.concluded
      }
      return task
    })
    setTasks(newTasks)
  }

  function handleDeleteTask(){
    const tasksWithItemDeleted = tasks.filter(task => task.id !== id) 
    setTasks(tasksWithItemDeleted)
  }

  return (
    <TaskBox>
      <CheckBox onClick={handleConcludeTask} isConcluded={concluded}>
        <CheckButton  >
          {concluded? <CheckIcon/> : null}
        </CheckButton>
      </CheckBox>

      <TaskContent isConcluded={concluded}>
        {content}
      </TaskContent>

      <TrashButton>
        <button onClick={handleDeleteTask}>
          <TrashDefault/>
        </button>
      </TrashButton>
    </TaskBox>
  );
}

interface CompletedProps{
  isConcluded:boolean
}

const TaskBox = styled.div`
  position: relative;
  width: 46rem;
  display: flex;
  align-items: center;
  border-radius: 8px;
  padding: 1rem;
  gap: 0.75rem;
  color: ${props => props.theme.colors.base.text};
  border: 1px solid ${props => props.theme.colors.background.shadowL};
  background: ${props => props.theme.colors.background.input};
`;

const CheckBox = styled.div<CompletedProps>`
  display: flex;
  position: absolute;
  left: 1rem;
  top: 1rem;
  border: 2px solid ${props => props.theme.colors.base.primary};
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background: ${props => props.isConcluded? props.theme.colors.base.primary : null };
  :hover{
    background: ${props => props.theme.colors.base.blue_dark};
    cursor: pointer;
  }
  
`

const CheckButton = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TaskContent = styled.div<CompletedProps>`
  text-decoration-line: ${props => props.isConcluded? "line-through" : null };
  max-width: 36rem;
  margin-left: 2rem;
`;

const TrashButton = styled.div`
  position: absolute;
  right: 1rem;
  top: 1rem;
  
  button{
    border: none;
    background: transparent;
    padding: 2px;
  border-radius: 4px;
    :hover{
    cursor: pointer;
    background: ${props => props.theme.colors.background.shadowL};
    padding: 2px;
    border-radius: 4px;
  }
  }

`;
function uudi(): any {
  throw new Error("Function not implemented.");
}

