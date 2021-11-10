function Square(props) {
  const style = {
    background: "hsl(171, 100%, 41%)",
    border: "2px solid darkblue",
    fontSize: "30px",
    fontWeight: "800",
    cursor: "pointer",
    outline: "none",
  };

  return (
    <button value={props.index} style={style} onClick={props.handleClick}>
      {props.value}
    </button>
  );
}
export default Square;
