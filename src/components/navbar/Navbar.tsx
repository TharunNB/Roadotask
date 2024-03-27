import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="clonify-logo-dark.svg" alt="" />
        <img src="/search.svg" alt="" className="icon-search" />
      </div>
      <div className="icons">
        <div className="notification">
          <img src="/notifications.svg" alt="" />
          <span>1</span>
        </div>
        <img src="/app.svg" alt="" className="icon" />
        <img src="/expand.svg" alt="" className="icon" />
        <div className="user">
          <img
            src="/noavatar.png"
            alt=""
          />
        </div>
        <img src="/settings.svg" alt="" className="icon" />
      </div>
    </div>
  );
};

export default Navbar;
