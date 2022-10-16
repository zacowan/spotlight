import React, { PropsWithChildren } from "react";

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex justify-center">
      <div className="bg-white w-full border-x border-slate-200 min-h-screen md:mx-8 lg:mx-16 mx-0 px-4 py-10 md:px-10 md:py-20">
        {children}
      </div>
    </div>
  );
};

export default Layout;
