export default function validate(values) {
  const errors = {};
  const { username, password } = values;

  if (!username.trim()) {
    errors.username = "Username or email are required to log in.";
  } else if (username.length < 5) {
    errors.username = "Username is too short.";
  } else if (
    username.includes("@") &&
    !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(username)
  ) {
    errors.username = "Wrong email adress format.";
  }

  if (!password) {
    errors.password = "Password is required to log in.";
  } else if (password.length < 8) {
    errors.password = "Password should be 8 characters long.";
  }

  return errors;
}
