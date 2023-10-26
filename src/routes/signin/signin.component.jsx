import { useEffect } from "react";
import {
  auth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.util";

import { getRedirectResult } from "firebase/auth";
import Signup from "../../components/signup-form/signup-form.component";

const SignIn = () => {
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
    const res = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(res.user);
  };

  return (
    <div>
      {/* <h1>Sign In</h1> */}
      <button onClick={loginWithGoogle}>Sign in with Google</button>
      {/* <button onClick={signInWithGoogleRedirect}>
        Sign in with Google Redirect
      </button> */}

      <Signup />
    </div>
  );
};

export default SignIn;
