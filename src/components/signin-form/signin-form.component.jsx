import { useContext, useState } from "react";

import {
  auth,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.util";
import FormInput from "../form-input/form-input.component";
import "./sign-in-form.styles.scss";
import Button,{BUTTON_TYPE_CLASSES} from "../button/button.component";
import { UserContext } from "../../contexts/user.context";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignIn = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;


  const handleFormFields = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { user } = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );

      setFormFields(defaultFormFields);
    } catch (e) {
      switch (e.code) {
        case "auth/invalid-login-credentials":
          alert("Invalid login credentials");
          break;
        case "auth/user-not-found":
          alert("User not found");
          break;
        default:
      }
    }
  };

  //   useEffect(() => {
  //     async function temp() {
  //       const res = await getRedirectResult(auth);
  //       console.log(res);
  //       temp();
  //       if (res) {
  //         const userDocRef = await createUserDocumentFromAuth(res.user);
  //       }
  //     }
  //   }, []);
  const loginWithGoogle = async () => {
    await signInWithGooglePopup();
  };
  return (
    <div className="sign-up-container">
      <h2>Already have an account ?</h2>
      <span>Signin with Email and Password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleFormFields}
          name="email"
          value={email}
        />
        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleFormFields}
          name="password"
          value={password}
        />
      <div className="buttons-container">
          <Button type="submit">Sign in</Button>
          <Button buttonType={BUTTON_TYPE_CLASSES.google} type="button" onClick={loginWithGoogle}>
            Google Sign in
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
