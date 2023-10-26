import Signup from "../../components/signup-form/signup-form.component";
import SignIn from "../../components/signin-form/signin-form.component";

import "./authentication.styles.scss";

const Authentication = () => {
  return (
    <div className="auth-container">
      <SignIn />
      <Signup />
    </div>
  );
};

export default Authentication;
