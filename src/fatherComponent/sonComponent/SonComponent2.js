import React, { useContext } from "react";
import { FatherContext } from "../FatherComponent";

export default function SonComponent2() {
  const context = useContext(FatherContext);

  return (
    <div>
      <hr />
      <div>SonComponent, value: {context.value}</div>
      <button onClick={() => context.setValue(5)}>Update Father Value</button>
    </div>
  );
}
