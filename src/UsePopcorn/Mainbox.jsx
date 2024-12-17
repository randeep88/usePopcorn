import React from "react";
import LeftBox from "./LeftBox";
import RightMain from "./RightMain";

function Mainbox({ child, children }) {
  return (
    <div className="h-[613px] flex pt-5 justify-center gap-3">
      {child}
      {children}
    </div>
  );
}

export default Mainbox;
