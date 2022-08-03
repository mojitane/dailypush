import { FunctionComponent } from "react";

const Card: FunctionComponent = ({ children }) => {
  return (
    <div className="p-4 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
      {children}
    </div>
  );
};

export default Card;
