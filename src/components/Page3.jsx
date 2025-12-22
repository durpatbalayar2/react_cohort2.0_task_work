import React from "react";
import Page3_Card from "./Page3_Card";

const Page3 = () => {
  return (
    <div className="flex gap-3 items-center justify-around text-center ">
      <Page3_Card degination="designers" total="150+" />

      <Page3_Card degination="clients" total="500+" />
      <Page3_Card degination="masterpieces" total="20K+" />

      <Page3_Card degination="events" total="50+" />
    </div>
  );
};

export default Page3;
