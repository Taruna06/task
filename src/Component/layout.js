import { Outlet, Link } from "react-router-dom";

function layout() {
    return (
        <>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Blogs</Link>
            </li>
            <li>
              <Link to="/sign">Contact</Link>
            </li>
          </ul>
        </nav>
  
        <Outlet />
      </>
    );
  }
  
  export default layout;