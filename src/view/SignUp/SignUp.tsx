import { useMutation } from "@apollo/client";
import { LinkToAuth } from "components/shared";
import { SIGN_UP } from "utils";
import { SignUpForm } from "./SignUpForm";
import { SignUpHeader } from "./SignUpHeader";

export const SignUp: React.FC = () => {
  const [signUp, { data, error }] = useMutation(SIGN_UP);
  const temp: any = error?.graphQLErrors[0].extensions.errors;

  if (data) {
    localStorage.setItem("accessToken", data.signIn.token);
  }

  const onSubmit = (values: any) => {
    signUp({
      variables: {
        payload: {
          username: values?.username,
          email: values?.email,
          password: values?.password,
        },
      },
    });
  };

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-zircon">
      <div className="w-1/3 rounded-lg shadow bg-white py-10 px-10 mt-6">
        <SignUpHeader />
        {temp && temp.username && (
          <p className="w-full text-sm p-1 text-center mt-2 rounded font-medium text-red-500">
            {temp.username}
          </p>
        )}
        {temp && temp.email && (
          <p className="w-full text-sm p-1 text-center mt-2 rounded font-medium text-red-500">
            {temp.email}
          </p>
        )}
        {temp && temp.password && (
          <p className="w-full text-sm p-1 text-center mt-2 rounded font-medium text-red-500">
            {temp.password}
          </p>
        )}
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
