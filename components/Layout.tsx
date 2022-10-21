import React, { PropsWithChildren } from "react";

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex justify-center">
      <div className="mx-0 min-h-screen w-full border-x border-slate-200 bg-white px-4 py-10 md:mx-8 md:px-10 md:py-20 lg:mx-16">
        {children}
      </div>
    </div>
  );
};

export default Layout;
