import React from "react";

type Props = {
  label: string;
  blurb: string;
};

const SetupBlurb: React.FC<Props> = ({ label, blurb }) => {
  return (
    <div>
      <h3 className="font-medium">{label}</h3>
      <p className="text-slate-600 dark:text-slate-300">{blurb}</p>
    </div>
  );
};

export default SetupBlurb;
