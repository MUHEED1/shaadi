import React from "react";
import Chat from "../components/chat";
import Svg from "@/public/icons/svg";
import Okay from "@/public/icons/okay";

const Page = () => {
  return (
    <div className="z-10 relative">
      <Chat />
      {/* <Svg/>
      <Okay/> */}
    </div>
  );
};

export default Page;
