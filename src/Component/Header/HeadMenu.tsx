import { Link } from "react-router-dom";
import logoimg from "../../res/img/ic_cocktail.png";
import HeadMenuPage from "../../styled/HeadMenu";
import { useRecoilState } from "recoil";
import { SessionID } from "../atom";

const HeadMenu= () => {
  const [getSessionID, setSessionID] = useRecoilState<string|null>(SessionID);
  

  return (
      <HeadMenuPage>
        <div className="container">
          <Link to="/" className="link-style">
            <div className="content">
              <img src={logoimg} alt="Cocktail Sense Logo" />
              <div className="logo">Cocktail Sense</div>
            </div>
          </Link>
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/" className="link-style">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/Recipe" className="link-style">
                Recipes
              </Link>
            </li>
            <li>
              <Link to="/MyRecipe" className="link-style">
                MyRecipes
              </Link>
            </li>
            <li>
              <Link to="/Store" className="link-style">
                Cocktail Bar
              </Link>
            </li>
            <li>
              <Link to="/OneDayClass" className="link-style">
                Class
              </Link>
            </li>
          </ul>
        </nav>
        
          {
            getSessionID?(
              <div className="login-button">
              <div className="link-style">
                <button onClick={() => {
                  setSessionID(null)
                }}> Log out </button>
              </div>
              </div>
            ):
            (
            <div className="login-button">
              <Link to="/login" className="link-style">
              Login
            </Link>
            <Link to="/signup" className="link-style">
              <button>Sign Up</button>
            </Link>
            </div>)
          }
          
        
        
      </HeadMenuPage>
   
  );
};

export default HeadMenu;
