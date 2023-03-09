export default function login__validate(values) {
  const errors = {};

  //validation for email
  if (!values.email) errors.email = "required";
  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) errors.email = "Invalid email address";

  //validation for password
  if (!values.password) errors.password = "Required";
  if (values.password.length < 8 || values.password.length > 20) errors.password = "Must be greater then 8 and less then 20 character long"
  if (values.password.includes(" ")) errors.password = "Invalid Password"

  return errors;
};

export function RegisterValidate(values) {
  const errors = {};

  //validate for form input "firstname"
  if (!values.firstname) errors.firstname = "Required"

  //validate for form input "lastname"
  if (!values.lastname) errors.lastname = "Required"

  //validation for email
  if (!values.email) errors.email = "required";
  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) errors.email = "Invalid email address";

  //validation for password
  if (!values.password) errors.password = "Required";
  if (values.password.length < 8 || values.password.length > 20) errors.password = "Must be greater then 8 and less then 20 character long"
  if (values.password.includes(" ")) errors.password = "Invalid Password"

  return errors
}

