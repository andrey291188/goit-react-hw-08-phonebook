import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './Loyaout';
import { useDispatch, useSelector } from 'react-redux';
import { lazy, useEffect } from 'react';
import { currentUserThunk } from 'store/authorization/thunkAuth';
import PrivateRoute from 'components/PrivateRoute/PrivateRoute';
import PublicRoute from 'components/PublicRoute/PublicRoute';

const Homepage = lazy(() => import('pages/homepage/Homepage'));
const Contacts = lazy(() => import('pages/contacts/Contacts'));
const Register = lazy(() => import('pages/register/Register'));
const Login = lazy(() => import('pages/login/Login'));

const authSelector = state => {
  return state.auth;
};

export const App = () => {
  const { isRefreshing } = useSelector(authSelector);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(currentUserThunk());
  }, [dispatch]);

  return isRefreshing ? (<b>Refreshing user...</b>) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <PublicRoute>
              <Homepage />
            </PublicRoute>
          }
        />
        <Route
          path="contacts"
          element={
            <PrivateRoute>
              <Contacts />
            </PrivateRoute>
          }
        />
        <Route
          path="registered"
          element={
            <PublicRoute>
              <Register />
            </PublicRoute>
          }
        />
        <Route
          path="login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route path="*" element={<Navigate to={'/'} />} />
      </Route>
    </Routes>
  );
};
