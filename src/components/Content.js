import React from "react";
import { Data_layer_value } from "../helper/DataLayer";

const Content = () => {
  const [{ children }, dispatch] = Data_layer_value();

  return (
    <div className="content">
      <main>{children}</main>
    </div>
  );
};

export default Content;
