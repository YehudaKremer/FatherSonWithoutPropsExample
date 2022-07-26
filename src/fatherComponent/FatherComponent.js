import React, { useState } from "react";
import SonComponent from "./sonComponent/SonComponent";
import SonComponent2 from "./sonComponent/SonComponent2";

export const FatherContext = React.createContext({});

export default function FatherComponent() {
  const [value, setValue] = useState(1);

  return (
    <div>
      <div>FatherComponent, value is: {value}</div>
      <FatherContext.Provider value={{ value, setValue }}>
        <SonComponent />
        <SonComponent2 />
      </FatherContext.Provider>
    </div>
  );
}
