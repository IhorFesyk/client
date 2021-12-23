import { ISignInPayload } from "utils";

export interface ISignInFormProps {
  onSubmit: ({ email, password }: ISignInPayload) => void;
}
