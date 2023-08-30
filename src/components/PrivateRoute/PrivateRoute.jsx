const { useSelector } = require("react-redux")
const { Navigate } = require("react-router-dom")

const PrivateRoute = ({children}) => {
    const isAuth = useSelector((state)=> state.auth.access_token)
    return isAuth ? children : <Navigate to="/"/>
}

export default PrivateRoute