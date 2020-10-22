const validate = (values) => {
  const errors = {};

  if (!values.username.trim()) {
    errors.username = "Username is Required";
  } else if (values.username.length < 5) {
    errors.username = "Username should be at least 5 characters long";
  }

  if (!values.email.trim()) {
    errors.email = "Email is Required";
  } else if (
    !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(values.email)
  ) {
    errors.email = "Invalid email address";
  }

  const pass = values.password.trim();
  const retPass = values.retypePassword.trim();

  if (!pass) {
    errors.password = "Password is required";
  } else if (pass.length < 8) {
    errors.password = "Password should be at least 8 chars long.";
  } else {
    const passPattern = /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8,}$/;
    const isPassValid = passPattern.test(pass);

    if (!isPassValid) {
      errors.password =
        "Make sure you have 8 characters, A-Z, a-z, 0-9, ~`! @#$%^&*()_-+={[}]|:;\"'<,>.?/";
    }
  }

  if (!retPass && !pass) {
    errors.retypePassword = "Provide password above first please.";
  } else if (!retPass) {
    errors.retypePassword = "Retyped password is required";
  } else if (retPass !== pass) {
    errors.retypePassword = "Password must match.";
  }
  return errors;
};

export default validate;
