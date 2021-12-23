export const Loader = () => {
  return (
    <div className="flex h-full justify-center items-center">
      <div
        className="spinner-border border-gray-300 animate-spin inline-block w-8 h-8 border-4 rounded-full"
        role="status"
      >
        <div className="w-2 h-2 -ml-1 rounded-full bg-gray-500" />
      </div>
    </div>
  );
};
