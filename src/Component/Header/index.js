/* eslint-disable jsx-a11y/alt-text */
import logo from "./../../Images/ING_logo.jpg"
import headImg from "./../../Images/headerBG.jpg"

function Header() {
  return (
    <div className="head">
      <div className="ourHead">
        <div className="nav"  style={{backgroundImage : `linear-gradient( rgba(0, 0,0,0.1), rgba(0, 0, 0,0.1) ) ,url(${headImg})`}}>
          <div className="logo">
                      <img
              src={logo} />
          </div>
          <div className="nav-links">
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Download</li>
              <li>Contact</li>
              <li>Products</li>
            </ul>
          </div>
        </div>
        <div className="outerNav">
        <div class="navItems">
          <h3>COME AND BUILD THE FUTURE</h3>
          <button class="btn">JOIN US</button>
        </div>
        </div>
      </div>

       
</div>
    



  );
}

export default Header;
