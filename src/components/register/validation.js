export default function validate(values) {
  const errors = {};

  const { username, email, password, retypedPassword } = values;

  if (!username.trim()) {
    errors.username = "Username is Required";
  } else if (username.length < 5) {
    errors.username = "Username should be at least 5 characters long";
  }

  if (!email.trim()) {
    errors.email = "Email is Required";
  } else if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email)) {
    errors.email = "Invalid email address";
  }

  if (!password) {
    errors.password = "Password is required";
  } else if (password.length < 8) {
    errors.password = "Password should be at least 8 chars long.";
  } else {
    const passPattern = /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8,}$/;
    const isPassValid = passPattern.test(password);

    if (!isPassValid) {
      errors.password =
        "Make sure you have 8 characters, A-Z, a-z, 0-9, ~`! @#$%^&*()_-+={[}]|:;\"'<,>.?/";
    }
  }

  if (!retypedPassword && !password) {
    errors.retypedPassword = "Provide password above first please.";
  } else if (!retypedPassword) {
    errors.retypedPassword = "Retyped password is required";
  } else if (retypedPassword !== password) {
    errors.retypedPassword = "Password must match.";
  }
  return errors;
}
