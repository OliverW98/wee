import Square from "./Square";
function Board(props) {
  const style = {
    border: "4px solid darkblue",
    borderRadius: "10px",
    width: "250px",
    height: "250px",
    margin: "0 auto",
    display: "grid",
    gridTemplate: "repeat(3, 1fr) / repeat(3, 1fr)",
  };

  return (
    <div style={style}>
      {props.squares.map((square, index) => (
        <Square
          key={index}
          index={index}
          value={square}
          handleClick={props.handleClick}
        />
      ))}
    </div>
  );
}
export default Board;
