import styled, { ThemeProvider, DefaultTheme } from "styled-components";
import Header from "./components/header";
import Tasks from "./components/Tasks";
import Empty from "./components/Tasks/components/Empty";
import Task from "./components/Tasks/components/Task";
import TasksProvider from "./contexts/TasksContext";
import GlobalStyles from "./styles/global";
import dark from "./styles/themes/dark";
import light from "./styles/themes/light";
import usePersistedState from "./utils/usePersistedState";

function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>("theme", dark);

  const toggleTheme = () => {
    setTheme(theme.title === "dark" ? light : dark);
  };

  return (
    <ThemeProvider theme={theme}>
      <TasksProvider>
        <Home>
          <GlobalStyles />
          <Header toggleTheme={toggleTheme} taskContent={""} />
          <Tasks/>
        </Home>
      </TasksProvider>
    </ThemeProvider>
  );
}

export default App;

const Home = styled.div``;
