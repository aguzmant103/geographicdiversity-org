import React from "react";

const Bar = ({ title, percentage, color }) => {
  return (
    <div className="mt-[10px]">
      <h2 className="opacity-90 mb-[2px]">
        {title} - {percentage}
      </h2>
      <div className="striped-bg h-[18px] w-full rounded-[8px] overflow-hidden">
        <div
          className="h-full"
          style={{ backgroundColor: color, width: percentage }}
        ></div>
      </div>
    </div>
  );
};

export default Bar;
