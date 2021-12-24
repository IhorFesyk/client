import { Input } from "components/shared";
import { Formik } from "formik";
import { useMutation } from "@apollo/client";
import { CREATE_WALLET, GET_ALL_WALLETS_DATA } from "utils";
import { INewWalletModalFormProps } from "../types";

export const NewWalletModalForm: React.FC<INewWalletModalFormProps> = ({
  onClose,
}) => {
  const [addWallet] = useMutation(CREATE_WALLET, {
    refetchQueries: [GET_ALL_WALLETS_DATA, "GetWallets"],
  });

  const handleSubmit = ({ title }: any) => {
    addWallet({
      variables: {
        payload: {
          title,
        },
      },
    });

    onClose();
  };

  return (
    <Formik
      initialValues={{
        title: "",
      }}
      onSubmit={(values) => handleSubmit(values)}
    >
      {({ values, handleChange, handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <div className="px-6 py-4">
            <label className="flex flex-col mt-2">
              <span className="font-medium text-sm cursor-pointer">
                Wallet title
              </span>
              <Input
                type="text"
                name="title"
                value={values.title}
                onChange={handleChange}
                placeholder="Personal wallet"
                internalIndentation="p-2"
              />
            </label>
          </div>

          <div className="bg-gray-100 px-4 py-2 border-t sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              type="submit"
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Add
            </button>
            <button
              type="button"
              className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </form>
      )}
    </Formik>
  );
};
