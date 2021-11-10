import AboutMe from "./AboutMe";
import TicTacToe from "./tictactoe/TicTacToe";
import TodoList from "./todolist/TodoList";
function MainContent() {
  return (
    <div class="container is-max-desktop">
      <AboutMe />
      <TicTacToe />
      <TodoList />
    </div>
  );
}
export default MainContent;
