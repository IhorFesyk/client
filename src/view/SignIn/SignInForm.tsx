import { IconLock, IconMail } from "assets";
import { Button, Input } from "components/shared";
import { Form, Formik } from "formik";
import { ISignInFormProps } from "./types";

export const SignInForm: React.FC<ISignInFormProps> = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={onSubmit}
      className="mt-8"
    >
      {({ values, handleChange }) => (
        <Form>
          <Input
            name="email"
            onChange={handleChange}
            value={values.email}
            icon={IconMail}
            placeholder="email@mail.com"
            type="email"
            indentation="mt-4"
            internalIndentation="py-2 px-8"
          />

          <Input
            name="password"
            onChange={handleChange}
            value={values.password}
            icon={IconLock}
            placeholder="password"
            type="password"
            indentation="mt-4"
            internalIndentation="py-2 px-8"
          />

          <Button type="submit" indentation="mt-4 py-3" text="Sign In" />
        </Form>
      )}
    </Formik>
  );
};
