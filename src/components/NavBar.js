import NavBarButton from "./NavBarButton";

function NavBar(props) {
  const projectButtons = props.pagesDisplayed.map((page, index) => {
    if (index === 0) {
      return null;
    } else {
      return (
        <NavBarButton
          key={page.name}
          name={page.name}
          handleClick={props.handleClick}
          label={page.label}
          className={page.className}
        />
      );
    }
  });

  return (
    <nav
      className="navbar is-primary"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <div className="navbar-item">
          <img
            src="https://bulma.io/images/bulma-logo-white.png"
            alt="yeppers"
            width="112"
            height="28"
          />
        </div>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <NavBarButton
            name={props.pagesDisplayed[0].name}
            handleClick={props.handleClick}
            label={props.pagesDisplayed[0].label}
            className={props.pagesDisplayed[0].className}
          />
          <div className="navbar-item has-dropdown is-hoverable">
            <span className="navbar-link">Project</span>

            <div className="navbar-dropdown">{projectButtons}</div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
