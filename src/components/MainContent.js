import AboutMe from "./AboutMe";
import TicTacToe from "./tictactoe/TicTacToe";
import TodoList from "./todolist/TodoList";
import WeatherApp from "./WeatherApp";
function MainContent(props) {
  return (
    <div className="container mt-6 is-max-desktop">
      {props.pagesDisplayed[0].isDisplayed ? <AboutMe /> : null}

      {props.pagesDisplayed[1].isDisplayed ? <TodoList /> : null}

      {props.pagesDisplayed[2].isDisplayed ? <TicTacToe /> : null}
      {props.pagesDisplayed[3].isDisplayed ? <WeatherApp /> : null}
    </div>
  );
}
export default MainContent;
