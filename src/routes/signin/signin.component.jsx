import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.util";

const SignIn = () => {
  const loginWithGoogle = async () => {
    const res = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(res.user);
  };
  return (
    <div>
      {/* <h1>Sign In</h1> */}
      <button onClick={loginWithGoogle}>Sign in with Google</button>
    </div>
  );
};

export default SignIn;
