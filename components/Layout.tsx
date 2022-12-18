import React, { PropsWithChildren } from "react";

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex justify-center dark:text-white">
      <div className="mx-0 min-h-screen w-full border-0 border-slate-200 bg-white px-4 py-10 dark:border-slate-800 dark:bg-slate-900 md:mx-8 md:border-x md:px-10 md:py-20 lg:mx-16">
        {children}
      </div>
    </div>
  );
};

export default Layout;
