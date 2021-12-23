import { SignInForm } from "./SignInForm";
import { SignInHeader } from "./SignInHeader";
import { useLazyQuery } from "@apollo/client";
import { ISignInPayload, SIGN_IN } from "utils";
import { LinkToAuth } from "components/shared";

export const SignIn: React.FC = () => {
  const [signIn, { data }] = useLazyQuery(SIGN_IN);

  if (data) {
    localStorage.setItem("accessToken", data.signIn.token);
  }

  const onSubmit = ({ email, password }: ISignInPayload) => {
    signIn({
      variables: {
        payload: {
          email,
          password,
        },
      },
    });
  };

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-zircon">
      <div className="w-1/3 rounded-lg shadow bg-white py-10 px-10 mt-6">
        <SignInHeader />
        <SignInForm onSubmit={onSubmit} />
      </div>

      <LinkToAuth
        text="Don't have an account yet?"
        label="Just SignUp"
        link="/signup"
      />
    </div>
  );
};
