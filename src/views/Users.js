import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { addNewUser, updateThisUserAction } from "redux/actions/UserAction";

const Users = () => {
  const editUser = useSelector((state) => state.users.editUser);
  const [userValue, setUserValue] = useState([]);
  const dispatch = useDispatch();
  const history = useHistory();

  const initialValues = editUser
    ? {
        company: "AppsGenii",
        username: editUser.username,
        email: editUser.email,
        firstName: editUser.firstName,
        lastName: editUser.lastName,
        address: editUser.address,
        city: editUser.city,
        country: editUser.country,
        postalCode: editUser.postalCode,
        aboutMe: editUser.aboutMe,
      }
    : {
        company: "AppsGenii",
        username: "",
        email: "",
        firstName: "",
        lastName: "",
        address: "",
        city: "",
        country: "",
        postalCode: "",
        aboutMe: "",
      };

  // const initialValues = {
  //   company: "AppsGenii",
  //   username: "",
  //   email: "",
  //   firstName: "",
  //   lastName: "",
  //   address: "",
  //   city: "",
  //   country: "",
  //   postalCode: "",
  //   aboutMe: "",
  // };

  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    address: Yup.string().required("Address is required"),
    city: Yup.string().required("City is required"),
    country: Yup.string().required("Country is required"),
    postalCode: Yup.number().required("Postal Code is required"),
    aboutMe: Yup.string(),
  });

  const handleSubmit = (values, { resetForm }) => {
    // Handle form submission logic here
    console.log(values);
    // debugger;
    if (editUser != "") {
      let updatedUser = values;

      updatedUser.id = editUser.id;
      dispatch(updateThisUserAction(updatedUser));
    } else {
      let newUser = values;
      newUser.id = Date.now();
      dispatch(addNewUser(newUser));
    }

    // debugger;
    resetForm();
    history.push("/admin/usersList");
  };
  console.log("yess =", editUser);
  return (
    <>
      {(editUser !="" ? <h3>Edit User Profile</h3> : <h3>Add New User</h3>)}

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <label>Company</label>
          <Field className="form-control" name="company" type="text" disabled />

          <div className="form-group">
            <label>Username</label>
            <Field className="form-control" name="username" type="text" />
            <ErrorMessage
              name="username"
              component="div"
              className="error-message ErrorMsgColor"
            />
          </div>

          <div className="form-group">
            <label>Email Address</label>
            <Field className="form-control" name="email" type="email" />
            <ErrorMessage
              name="email"
              component="div"
              className="error-message ErrorMsgColor "
            />
          </div>

          <div className="form-group">
            <label>First Name</label>
            <Field className="form-control" name="firstName" type="text" />
            <ErrorMessage
              name="firstName"
              component="div"
              className="error-message ErrorMsgColor"
            />
          </div>

          <div className="form-group">
            <label>Last Name</label>
            <Field className="form-control" name="lastName" type="text" />
            <ErrorMessage
              name="lastName"
              component="div"
              className="error-message ErrorMsgColor"
            />
          </div>

          <div className="form-group">
            <label>Address</label>
            <Field className="form-control" name="address" type="text" />
            <ErrorMessage
              name="address"
              component="div"
              className="error-message ErrorMsgColor"
            />
          </div>

          <div className="form-group">
            <label>City</label>
            <Field className="form-control" name="city" type="text" />
            <ErrorMessage
              name="city"
              component="div"
              className="error-message ErrorMsgColor"
            />
          </div>

          <div className="form-group">
            <label>Country</label>
            <Field className="form-control" name="country" type="text" />
            <ErrorMessage
              name="country"
              component="div"
              className="error-message ErrorMsgColor"
            />
          </div>

          <div className="form-group">
            <label>Postal Code</label>
            <Field className="form-control" name="postalCode" type="number" />
            <ErrorMessage
              name="postalCode"
              component="div"
              className="error-message ErrorMsgColor"
            />
          </div>

          <div className="form-group">
            <label>About Me</label>
            <Field
              className="form-control"
              name="aboutMe"
              as="textarea"
              rows={4}
            />
            <ErrorMessage
              name="aboutMe"
              component="div"
              className="error-message ErrorMsgColor"
            />
          </div>

          <button type="submit" className="btn btn-info btn-fill">
            Update
          </button>
        </Form>
      </Formik>
    </>
  );
};

export default Users;
