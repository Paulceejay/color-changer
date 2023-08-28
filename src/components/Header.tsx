import "./Header.css"

const Header = ({simpleClick, hexClick}:any) => {
 
  return (
    <header>
      <div className="header">
        <h1>Color Flipper</h1>
        <div className="btn">
          <button onClick={simpleClick}> Simple</button>
          <button onClick={hexClick}> Hex</button>
        </div>
      </div>
    </header>
  );
};

export default Header;