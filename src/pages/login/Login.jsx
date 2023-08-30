import { Field, Form, Formik, } from "formik";
import { useDispatch } from "react-redux";
import { logInThunk } from "store/authorization/thunkAuth";

const Login = () => {
  const dispatch = useDispatch();
  
  const handleSubmit = (values, { resetForm }) => {
    dispatch(logInThunk(values))
    resetForm();
  };
  return (
    <div className="container top">
      <Formik initialValues={{ email: '', password: '' }} onSubmit={handleSubmit}>
        <Form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <Field
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            name="email"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <Field
            type="password"
            className="form-control"
            name="password"
            id="exampleInputPassword1"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        </Form>
      </Formik>
    </div>
  );
};

export default Login;
