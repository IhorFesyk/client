import { SignInForm } from "./SignInForm";
import { SignInHeader } from "./SignInHeader";
import { useLazyQuery } from "@apollo/client";
import { ISignInPayload, SIGN_IN } from "utils";
import { LinkToAuth } from "components/shared";

export const SignIn: React.FC = () => {
  const [signIn, { data, error }] = useLazyQuery(SIGN_IN);
  const temp: any = error?.graphQLErrors[0].extensions.errors;

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
        {temp && temp.email && (
          <p className="w-full text-sm p-1 text-center mt-2 rounded font-medium text-red-500">
            {temp.email}
          </p>
        )}
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
