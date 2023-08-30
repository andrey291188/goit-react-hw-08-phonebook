import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { registerThunk } from "store/authorization/thunkAuth";


const Register = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(registerThunk(values))
    resetForm();
  };

    return (
      <div className="container top">
      <Formik initialValues={{ name: '', email: '', password: '' }} onSubmit={handleSubmit}>
      <Form>
      <div className="mb-3">
          <label htmlFor="exampleInputName" className="form-label">
            Your name
          </label>
          <Field
            type="text"
            className="form-control"
            id="exampleInputName"
            name="name"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <Field
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            name="email"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <Field
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            name="password"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        </Form>
      </Formik>
      </div>
    )

}

export default Register