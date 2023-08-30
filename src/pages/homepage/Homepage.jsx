import { NavLink } from "react-router-dom"


const Homepage = () => {

    return (
        <div className="container top images">
            <ul className="d-grid gap-2 d-md-flex justify-content-md-end">
              <h2>Hello, this is an online contact book, you can register or login</h2>
            <li>
          <NavLink to="/registered" className="btn btn-primary" role="button">
            Registred
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" className="btn btn-primary" role="button">
            LogIn
          </NavLink>
        </li>
        </ul>
        </div>
    )

}

export default Homepage