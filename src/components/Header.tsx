import "./Header.css"

const Header = ({simpleClick, hexClick}:any) => {
 
  return (
    <header>
      <div className="header">
        <h1>Color Flipper</h1>
        <div className="btn">
          <li onClick={simpleClick}>
            <a href="/">Simple</a>
          </li>
          <li onClick={hexClick}>
            <a href="/">Hex</a>
          </li>
        </div>
      </div>
    </header>
  );
};

export default Header;