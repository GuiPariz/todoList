import React, { useState, createContext, Dispatch, SetStateAction } from "react";
import ITask from '../types/task';

interface TasksContextProps {
  tasks: ITask[];
  setTasks: Dispatch<SetStateAction<ITask[]>>;
}

export const TasksContext = createContext<TasksContextProps>({ tasks: [], setTasks: () => {}});

export default function TasksProvider({ children }: any) {
  const [tasks, setTasks] = useState<ITask[]>([]);
  return (
    <TasksContext.Provider value={{ tasks, setTasks }}>
      {children}
    </TasksContext.Provider>
  )
}
