import { IconLock, IconMail, IconUser } from "assets";
import { Button, Input } from "components/shared";
import { Form, Formik } from "formik";
import { ISignUpFormProps } from "./types";

export const SignUpForm: React.FC<ISignUpFormProps> = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{ username: "", email: "", password: "" }}
      onSubmit={onSubmit}
      className="mt-8"
    >
      {({ values, handleChange }) => (
        <Form>
          <Input
            name="username"
            onChange={handleChange}
            value={values.username}
            icon={IconUser}
            placeholder="username"
            type="text"
            indentation="mt-4"
            internalIndentation="py-2 px-8"
          />

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

          <Button indentation="mt-4 py-3" text="Sign Up" />
        </Form>
      )}
    </Formik>
  );
};
