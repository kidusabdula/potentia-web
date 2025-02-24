import React from "react";

const Card: React.FC<{ className?: string; children: React.ReactNode }> = ({
  className,
  children,
}) => {
  return (
    <div
      className={`bg-secondary text-white rounded-lg shadow-lg p-6 ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
