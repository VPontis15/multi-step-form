const ErrorMessage = ({ children }) => {
  return (
    <p className="inline-block w-full bg-red-200 p-2 text-sm text-red-800 transition-opacity duration-300 ease-in-out">
      {children}
    </p>
  );
};

export default ErrorMessage;
