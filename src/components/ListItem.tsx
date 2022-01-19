import * as React from "react";

const ListItem: React.FC = ({ children }) => {
  return (
    <li className="before:hidden m-0 p-0 translate-x-4 lg:translate-x-0 text-blue">
      <span className="relative -left-[3px] whitespace-normal text-black">
        {children}
      </span>
    </li>
  );
};

export default ListItem;
