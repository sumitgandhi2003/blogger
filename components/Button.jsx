import React from "react";

const Button = ({ classname, text }) => {
  return (
    <div>
      <button className={classname}>{text}</button>
    </div>
  );
};

export default Button;
