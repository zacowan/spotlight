import React, { PropsWithChildren } from "react";

type Props = {
  title: string;
};

const SetupBlurbSection: React.FC<PropsWithChildren<Props>> = ({
  children,
  title,
}) => {
  return (
    <React.Fragment>
      <h2 className="text-lg font-medium tracking-tight">{title}</h2>
      <div className="border-l border-slate-200">
        <div className="flex flex-col space-y-6 ml-4">{children}</div>
      </div>
    </React.Fragment>
  );
};

export default SetupBlurbSection;
