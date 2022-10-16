import React, { PropsWithChildren } from "react";

const MainContainer: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <main className="flex flex-col items-center space-y-40">{children}</main>
  );
};

export default MainContainer;
