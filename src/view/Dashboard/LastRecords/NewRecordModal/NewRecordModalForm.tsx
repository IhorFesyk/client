import { Input } from "components/shared";
import { Formik } from "formik";
import { SelectCategory } from "./SelectCategory";
import { useMutation } from "@apollo/client";
import { ADD_NEW_RECORD } from "utils";
import { INewRecordModalFormProps } from "view/Dashboard/types";

export const NewRecordModalForm: React.FC<INewRecordModalFormProps> = ({
  onClose,
  walletId,
}) => {
  const [addRecord] = useMutation(ADD_NEW_RECORD);

  const handleSubmit = (values: any) => {
    addRecord({
      variables: {
        payload: {
          type: values.type,
          amount: values.amount,
          category: values.category,
          description: values.description,
        },
        walletId: walletId,
      },
    });

    onClose();
  };

  return (
    <Formik
      initialValues={{
        type: "income",
        amount: "",
        category: "",
        description: "",
      }}
      onSubmit={(values) => handleSubmit(values)}
    >
      {({ values, handleChange, handleSubmit, setValues }) => (
        <form onSubmit={handleSubmit}>
          <div className="px-6 py-4">
            <div className="flex w-full items-center justify-evenly bg-blue-400 rounded-lg p-1">
              <label
                className={`flex items-center text-md font-semibold text-gray-50 px-20 py-1 rounded-md cursor-pointer ${
                  values.type === "income" && "bg-white text-blue-400"
                }`}
              >
                <span>Income</span>
                <Input
                  name="type"
                  type="radio"
                  value="income"
                  onChange={handleChange}
                  className="hidden"
                />
              </label>
              <label
                className={`flex items-center text-md font-semibold text-gray-50 px-20 py-1 rounded-md cursor-pointer ${
                  values.type === "spending" && "bg-white text-blue-400"
                }`}
              >
                <span>Spending</span>
                <Input
                  name="type"
                  type="radio"
                  value="spending"
                  onChange={handleChange}
                  className="hidden"
                />
              </label>
            </div>

            <label className="flex flex-col mt-4">
              <span className="font-medium text-sm cursor-pointer">
                Amount{" "}
              </span>
              <Input
                name="amount"
                type="number"
                value={values.amount}
                onChange={handleChange}
                placeholder="0"
                min="1"
                internalIndentation="p-2"
              />
            </label>

            <label className="flex flex-col mt-2 z-50">
              <span className="font-medium text-sm cursor-pointer">
                Category
              </span>
              <SelectCategory setValues={setValues} values={values} />
            </label>

            <label className="flex flex-col mt-2">
              <span className="font-medium text-sm cursor-pointer">
                Description
              </span>
              <Input
                type="text"
                name="description"
                value={values.description}
                onChange={handleChange}
                placeholder="Bought some eggs..."
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
