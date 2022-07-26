import React, { useContext } from "react";
import { FatherContext } from "../FatherComponent";
import SonComponent2 from "./SonComponent2";

export default function SonComponent() {
  const context = useContext(FatherContext);

  return (
    <div>
      <hr />
      <div>SonComponent, value: {context.value}</div>
      <button onClick={() => context.setValue(6)}>Update Father Value</button>
      <SonComponent2 />
    </div>
  );
}
