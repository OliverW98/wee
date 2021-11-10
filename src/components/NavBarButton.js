function NavBarButton(props) {
  return (
    <div className="navbar-item">
      <button
        name={props.name}
        onClick={props.handleClick}
        className={props.className}
      >
        {props.label}
      </button>
    </div>
  );
}
export default NavBarButton;
