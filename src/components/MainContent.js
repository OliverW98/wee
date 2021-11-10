import AboutMe from "./AboutMe";
import TicTacToe from "./tictactoe/TicTacToe";
import TodoList from "./todolist/TodoList";
function MainContent(props) {
  return (
    <div className="container is-max-desktop">
      {props.pagesDisplayed[0].isDisplayed ? <AboutMe /> : null}

      {props.pagesDisplayed[1].isDisplayed ? <TodoList /> : null}

      {props.pagesDisplayed[2].isDisplayed ? <TicTacToe /> : null}
    </div>
  );
}
export default MainContent;
