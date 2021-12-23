import { useMutation } from "@apollo/client";
import { LinkToAuth } from "components/shared";
import { SIGN_UP } from "utils";
import { SignUpForm } from "./SignUpForm";
import { SignUpHeader } from "./SignUpHeader";

export const SignUp: React.FC = () => {
  const [signUp, { data }] = useMutation(SIGN_UP);
  data && localStorage.setItem("accessToken", data.signUp.token);
  console.log(data);

  const onSubmit = (values: any) => {
    signUp({
      variables: {
        payload: {
          ...values,
        },
      },
    });
  };

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-zircon">
      <div className="w-1/3 rounded-lg shadow bg-white py-10 px-10 mt-6">
        <SignUpHeader />
        <SignUpForm onSubmit={onSubmit} />
      </div>

      <LinkToAuth
        text="Already have an account?"
        label="Just SignIn"
        link="/signin"
      />
    </div>
  );
};
