// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import { useState } from "react";
import "./App.css";
import "./index.css";
import { BillSplitter } from "./components/BillSplitter/BillSplitter";
// import { Logo } from "./components/Logo";
// import { Widget } from "./components/Widget";
// import Counter from "./components/Counter/Counter";
// import { WindowSizeDisplay } from "./components/WindowSizeDisplay/WindowSizeDisplay";

function App() {
  return (
    <>
      <div className="text-custom-teal font-mono font-bold tracking-[0.2em] text-2xl p-auto m-0 ">
        <div>SPLI</div>
        <div>TTER</div>
      </div>
      <div className="bg-white p-8 rounded-3xl max-w-[1280px] w-full">
        <BillSplitter />
      </div>
    </>
  );
}

export default App;
{
  /* <Logo
          imageURL={viteLogo}
          url="https://vitejs.dev"
          shouldRotate={true}
        />
        <Logo
          imageURL={reactLogo}
          url="https://react.dev"
          customClass="react"
          shouldRotate
        /> */
}

{
  /* <WindowSizeDisplay></WindowSizeDisplay> */
}
