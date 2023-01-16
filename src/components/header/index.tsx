import styled from "styled-components";
import Logo from "../../assets/logo";
import Switch from "react-switch";
import { FormEvent, SetStateAction, useContext, useState } from "react";
import { ThemeContext } from "styled-components";
import PlusIcon from "../../assets/plusIcon";
import { TasksContext } from "../../contexts/TasksContext";

interface HeaderProps {
  toggleTheme(): void;
  taskContent: string;
}

function handleCreateNewTask(event: FormEvent) {
  event?.preventDefault();
}

export default function Header(props: HeaderProps) {
  const { toggleTheme } = props;
  const { colors, title } = useContext(ThemeContext);
  const { tasks, setTasks } = useContext(TasksContext);
  const [textInput, setTextInput] = useState("");

  const inputEmpty= textInput.length === 0


  function handleInputValue(event: {
    target: { value: SetStateAction<string> };
  }) {
    const value = event.target.value;
    setTextInput(value);
  }

  function handleCreateTask() {
    setTasks([...tasks, { key:'', id: `${tasks.length + 1}`, content: textInput }]);
    setTextInput('')
  }
  console.log(tasks)
  return (
    <Head onSubmit={handleCreateNewTask}>
      <Title>
        <Logo />
        <Switch
          onClick={() => {}}
          onChange={toggleTheme}
          checked={title === "light"}
          checkedIcon={false}
          uncheckedIcon={false}
          height={20}
          width={40}
          handleDiameter={30}
          onColor={colors.base.blue_dark}
          offColor={colors.gray[300]}
        />
      </Title>
      <InputArea>
        <input
          type="text"
          placeholder="Adicione uma nova tarefa"
          value={textInput}
          onChange={handleInputValue}
        />
        <Button type="submit" disabled={inputEmpty} onClick={handleCreateTask}>
          Criar
          <PlusIcon />
        </Button>
      </InputArea>
    </Head>
  );
}

const Head = styled.form`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2.5rem;
  width: 100%;
  background: ${(props) => props.theme.colors.background.header};
`;
const Title = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const InputArea = styled.div`
  display: flex;
  position: absolute;
  bottom: -1.5rem;
  left: 50%;
  transform: translateX(-23rem);
  width: 46rem;
  gap: 0.5rem;
  input {
    width: 100%;
    border: none;
    border-radius: 8px;
    padding: 1rem;
    font-size: 1rem;
    color: ${(props) => props.theme.colors.gray[300]};
    background: ${(props) => props.theme.colors.background.input};
    box-shadow: 1px 1px 3px ${(props) => props.theme.colors.background.shadowD};
    :focus {
      outline: 2px solid ${(props) => props.theme.colors.base.outline};
    }
  }
`;
const Button = styled.button`
  border: none;
  border-radius: 8px;
  padding: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #fff;
  font-family: "Inter", sans-serif;
  font-weight: 700;
  font-size: 0.875rem;
  line-height: 1.4;
  background-color: ${(props) => props.theme.colors.base.primary};
  cursor: pointer;
  :not(:disabled):hover {
    background-color: ${(props) => props.theme.colors.base.blue_dark};
  }
  :disabled{
    opacity: 80%;
    cursor: not-allowed;
  }
`;
function setTasks() {
  throw new Error("Function not implemented.");
}
