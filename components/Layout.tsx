import React, { PropsWithChildren } from "react";

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex justify-center">
      <div className="py-8 bg-white w-full border-x border-slate-200 min-h-screen md:mx-8 lg:mx-16 mx-0 px-10">
        {children}
      </div>
    </div>
  );
};

export default Layout;
