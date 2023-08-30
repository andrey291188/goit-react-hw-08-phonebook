import { useDispatch, useSelector } from "react-redux";
import { logOutThunk } from "store/authorization/thunkAuth";

const authSelector = state => {
  return state.auth;
};

const UserMenu = () => {
  const dispatch = useDispatch();
  const {user} = useSelector(authSelector)
  
 const handleLogOut = () => dispatch(logOutThunk())

  return (
     <div className="nav-item d-inline-flex p-2 d-flex align-items-center">
      <p className="align-bottom text-light">{user.name}</p>
      <button className="btn btn-danger" onClick={handleLogOut}>Logout</button>
    </div>
    
  );
};

export default UserMenu;
