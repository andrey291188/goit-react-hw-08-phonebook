import UserMenu from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const authSelector = state => {
  return state.auth;
};
// nav nav-pills nav-fill d-flex align-items-center justify-content-between
const Headers = () => {
  const {isLoggedIn} = useSelector(authSelector)

  return (
    <nav className="bg-primary" data-bs-theme="dark">
      <ul className=" d-flex align-items-center justify-content-between">
        {!isLoggedIn && <li className="">
          <NavLink to="/" className="btn btn-secondary " aria-current="page">
            Home
          </NavLink>
        </li>}
        <div className="d-flex p-2 justify-content-between">
        {isLoggedIn && <li className="">
          <NavLink to="/contacts" className="btn btn-secondary">
            Contacts
          </NavLink>
        </li>}
        {!isLoggedIn && <li className="">
          <NavLink to="/registered" className="btn btn-secondary ">
            Registred
          </NavLink>
        </li>}
        {!isLoggedIn && <li className="">
          <NavLink to="/login" className="btn btn-secondary ">
            LogIn
          </NavLink>
        </li>}
        </div>
        {isLoggedIn && <li className="">
          <UserMenu className="nav-link" />
        </li>}
      </ul>
    </nav>
  );
};

export default Headers;
