import { ISignInPayload } from "utils";

export interface ISignUpFormProps {
  onSubmit: ({ email, password }: ISignInPayload) => void;
}
