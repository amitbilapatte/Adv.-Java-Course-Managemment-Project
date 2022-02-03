import react from "react";
import reactDom from "react-dom";

function AddUsers() {
  const usernameChangeHandler = (e) => {
    let text = e.target.value;
    if (!/^[a-z0-9_-]{3,20}$/.test(text)) {
      setUsernameError("Invalid Username");
      return false;
    }
    setUsernameError("");
    return true;
  };
  return {};
}
export default AddUsers;
