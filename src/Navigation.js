import "./Navigation.css";
import { NavLink, Link } from "react-router-dom";

/** Navigation component to go to different pages
 *
 * Props:
 * - user - null or {username, firstName, lastName, email, isAdmin}
 *
 * States:
 * - None
 *
 * App -> Navigation
*/

function Navigation({ logout, user }) {
  return (
    <nav className="Navigation">
      <NavLink to="/">Jobly</NavLink>
      <div className="Navigation-pages">
      {
        user === null
        ? <div>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/signup">Signup</NavLink>
          </div>
        : <div>
            <NavLink to="/companies">Companies</NavLink>
            <NavLink to="/jobs">Jobs</NavLink>
            <Link onClick={logout} to='/'>Logout {user.username}</Link>
          </div>
      }
      </div>
    </nav>
  );
}

export default Navigation;
